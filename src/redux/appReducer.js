import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "social-network/app/INITIALIZED_SUCCESS";

let initState = {
    isInitialized: false
}

const appReducer = (state = initState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

export const initializeApp = () => {
    return async(dispatch) => {
        await dispatch(getAuthUserData());
        dispatch(initializeSuccess());
    }
} 

export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS});
export default appReducer;