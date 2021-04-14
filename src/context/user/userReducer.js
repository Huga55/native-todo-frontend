export const SET_USER_DATA = "SET_USER_DATA";
export const DELET_USER_DATA = "UNSET_USER";

const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                token: action.data.token,
                isAuth: true,
            }
        case DELET_USER_DATA: 
            return {
                ...state,
                id: null,
                email: null,
                token: null,
                isAuth: false,
            } 
        default: return state;
    }
}

export default userReducer;
