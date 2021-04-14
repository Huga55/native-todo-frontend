export const SET_MODAL = "SET_MODAL";
export const DELETE_MODAL = "DELETE_MODAL";

const modalReducer = (state, action) => {
    switch(action.type) {
        case SET_MODAL:
            return {
                ...state,
                isActive: true,
                modalType: action.modalType,
                sectionType: action.sectionType,
                editId: action.editId,
            }
        case DELETE_MODAL:
            return {
                ...state,
                isActive: false,
                modalType: null,
                sectionType: null,
                editId: null,
            }
        default: return state;
    }
}

export default modalReducer;