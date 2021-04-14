import React from "react";
import { useReducer } from "react";
import ModalContext from "./ModalContext";
import modalReducer, { SET_MODAL, DELETE_MODAL } from "./modalReducer";

const ModalState = (props) => {
    const { children } = props;

    const initialState = {
        isActive: false,
        modalType: null,
        sectionType: null,
        editId: null,
    }

    const [state, dispatch] = useReducer(modalReducer, initialState);

    const setModalAction = (modalType, sectionType, editId = null) => dispatch({type: SET_MODAL, modalType, sectionType, editId});
    const deleteModalAction = () => dispatch({type: DELETE_MODAL});

    return(
        <ModalContext.Provider value={{
            isActive: state.isActive,
            modalType: state.modalType,
            sectionType: state.sectionType,
            editId: state.editId,
            setModalAction,
            deleteModalAction
        }}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalState;