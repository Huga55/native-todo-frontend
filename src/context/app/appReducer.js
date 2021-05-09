export const SET_IS_LOADING = "SET_IS_LOADING";
export const CLEAR_IS_LOADING = "CLEAR_IS_LOADING";
export const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";
export const CLEAR_GLOBAL_ERROR = "CLEAR_GLOBAL_ERROR";

const appReducer = (state, action) => {
    switch(action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case CLEAR_IS_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error,
            }
        case CLEAR_GLOBAL_ERROR: 
            return {
                ...state,
                globalError: null,
            }
        default: return state
    }
}

export default appReducer;