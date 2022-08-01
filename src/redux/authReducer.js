import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "social-network/app/SET_AUTH_USER_DATA";
const SET_IS_FETCHING = "social-network/app/SET_IS_FETCHING";

let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                ...action.isFetching
            }
        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        let response = await authAPI.me();
        dispatch(setIsFetching(false));
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export const login = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        let response = await authAPI.authorizeUser(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let errorMessage = (response.data.messages && response.data.messages.length > 0) ? response.data.messages.join("; ") : "Some error ocurred";
            setStatus(errorMessage);
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        let response = await authAPI.unauthorizeUser();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}});
export default authReducer;