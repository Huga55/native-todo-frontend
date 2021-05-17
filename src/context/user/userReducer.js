export const SET_USER_DATA = "SET_USER_DATA";
export const DELETE_USER_DATA = "DELETE_USER_DATA";

const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                token: action.data.token,
                limit: action.data.limit,
                isAuth: true,
            }
        case DELETE_USER_DATA: 
            return {
                ...state,
                email: null,
                token: null,
                isAuth: false,
                limit: null,
            } 
        default: return state;
    }
}

export default userReducer;
