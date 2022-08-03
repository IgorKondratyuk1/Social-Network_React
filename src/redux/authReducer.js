import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "social-network/app/SET_AUTH_USER_DATA";
const SET_CAPTCHA_SUCCESS = "social-network/app/SET_CAPTCHA_SUCCESS";
const SET_IS_FETCHING = "social-network/app/SET_IS_FETCHING";

let initState = {
    id: null,
    login: null,
    email: null,
    captchaUrl: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_SUCCESS:
        case SET_IS_FETCHING:
            return {
                ...state,
                ...action.payload
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

export const login = (email, password, rememberMe, captcha = null, setStatus) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await authAPI.authorizeUser(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let errorMessage = (response.data.messages && response.data.messages.length > 0) ? response.data.messages.join("; ") : "Some error ocurred";
            setStatus(errorMessage);
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await authAPI.unauthorizeUser();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptcha();
        const captchaUrl = response.url;
        dispatch(setCaptchaUrl(captchaUrl));
    }
}

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: {isFetching}});
export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, login, email, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_SUCCESS, payload: {captchaUrl}});
export default authReducer;