import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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
    return (dispatch) => {
        dispatch(setIsFetching(true));

        return authAPI.me().then(response => {
            console.log('getAuthUserData', response);
            dispatch(setIsFetching(false));
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true));
            } else {

            }
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    }
}

export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));

        authAPI.authorizeUser(email, password, rememberMe).then(response => {
            console.log('login', response);
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let errorMessage = (response.data.messages && response.data.messages.length > 0) ? response.data.messages.join("; ") : "Some error ocurred";
                setStatus(errorMessage);
            }
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));

        authAPI.unauthorizeUser().then(response => {
            console.log('logout', response);
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
        .catch(error => {
            console.log("Error: " + error);
        });
    }
}

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}});
export default authReducer;