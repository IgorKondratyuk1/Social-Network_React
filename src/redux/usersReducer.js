import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelper"; 

const FOLLOW_USER = "social-network/app/FOLLOW_USER";
const UNFOLLOW_USER = "social-network/app/UNFOLLOW_USER";
const SET_USERS = "social-network/app/GET_USERS";
const SET_CURRENT_PAGE = "social-network/app/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/app/SET_USERS_TOTAL_COUNT";
const SET_IS_FETCHING = "social-network/app/SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROCESS = "social-network/app/SET_FOLLOWING_IN_PROCESS";

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
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }    
        case UNFOLLOW_USER: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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



export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setUsers(response.items));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProcess(true, userId));
    let response = await apiMethod(userId);
    debugger;
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProcess(false, userId));
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
    }
} 

export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess);
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