import { usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "GET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROCESS = "SET_FOLLOWING_IN_PROCESS";


let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: []
};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case FOLLOW_USER: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }    
        case UNFOLLOW_USER: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;  
                })
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_FOLLOWING_IN_PROCESS: 
            return {
                ...state,
                followingInProcess: action.isFetching 
                    ? [...state.followingInProcess, action.userId] 
                    : state.followingInProcess.filter(id => id !== action.userId) 

            }
        default:
            return state;
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsFetching(false));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(setUsers(response.items));
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProcess(true, userId));
        usersAPI.unfollowUser(userId)
            .then(response => {
                console.log(response);
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(setFollowingInProcess(false, userId));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProcess(true, userId));
        usersAPI.followUser(userId)
            .then(response => {
                console.log(response);
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(setFollowingInProcess(false, userId));
            });
    }
} 

export const setFollowingInProcess = (isFetching, userId) => ({type: SET_FOLLOWING_IN_PROCESS, isFetching, userId});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setUsers = (users) => ({type: SET_USERS, users});
export const followSuccess = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId});
export default usersReducer;