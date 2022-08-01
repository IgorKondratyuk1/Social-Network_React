import { profileAPI } from "../api/api";

const ADD_POST = "social-network/app/ADD_POST";
const DELETE_POST = "social-network/app/DELETE_POST";
const SET_USER_PROFILE = "social-network/app/SET_USER_PROFILE";
const SET_USER_STATUS = "social-network/app/SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "social-network/app/SAVE_PHOTO_SUCCESS";

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
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data));
    }
}  

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}  

export const savePhoto = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(photo);
        debugger;
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    }
}

export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export default profileReducer;