import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initState = {
    posts: [
        {id: 1, message: "Hello it's my first post", likesCount: 12},
        {id: 2, message: "Yeeeeaaaah", likesCount: 5},
        {id: 3, message: "Press F", likesCount: 4}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5, 
                message: action.text, 
                likesCount: 100
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }
}  

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }
}  

export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export default profileReducer;