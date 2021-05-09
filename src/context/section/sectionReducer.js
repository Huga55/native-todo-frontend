export const SET_ALL = "SET_ALL";
export const SET_ONE = "SET_ONE";
export const DELETE_ONE = "DELETE_ONE";
export const CHANGE_ONE = "CHANGE_ONE";
export const CLEAR_ALL = "CLEAR_ALL";

const sectionReducer = (state, action) => {
    switch(action.type) {
        case SET_ALL:
            return {
                ...state,
                movies: action.movies,
                books: action.books,
                todos: action.todos,
            }
        case SET_ONE:
            return {
                ...state,
                [action.sectionType]: [...state[action.sectionType], action.data],
            }
        case DELETE_ONE:
            return {
                ...state,
                [action.sectionType]: state[action.sectionType].filter(m => m.id !== action.id),
            }
        case CHANGE_ONE:
            return {
                ...state,
                [action.sectionType]: state[action.sectionType].map(m => m.id === action.data.id? action.data : m)
            }
        case CLEAR_ALL:
            return {
                ...state,
                movies: null,
                books: null,
                todos: null,
            }
        default: return state;
    }
}

export default sectionReducer;