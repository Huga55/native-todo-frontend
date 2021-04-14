export const SET_ALL = "SET_ALL";
export const SET_ONE = "SET_ONE";
export const DELETE_ONE = "DELETE_ONE";
export const CHANGE_ONE = "CHANGE_ONE";

const sectionReducer = (state, action) => {
    switch(action.type) {
        case SET_ALL:
            return {
                ...state,
                [action.name]: action.data,
            }
        case SET_ONE:
            return {
                ...state,
                [action.name]: [...state[action.name], action.data],
            }
        case DELETE_ONE:
            return {
                ...state,
                [action.name]: state[action.name].filter(m => m.id !== action.id),
            }
        case CHANGE_ONE:
            return {
                ...state,
                [action.name]: state[action.name].map(m => m.id === action.data.id? action.data : m)
            }
        default: return state;
    }
}

export default sectionReducer;