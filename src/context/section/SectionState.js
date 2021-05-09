import React from "react";
import { useReducer } from "react";
import SectionContext from "./SectionContext";
import sectionReducer from "./sectionReducer";
import { SET_ALL, SET_ONE, DELETE_ONE, CHANGE_ONE, CLEAR_ALL } from "./sectionReducer";
import useHttp from "./../../hooks/useHttp";
import { sectionAPI } from "./../../api/API";

const SectionState = (props) => {
    const { children } = props;
    const { request } = useHttp();

    const initialState = {
        movies: null,
        books: null,
        todos: null,
    }

    const [state, dispatch] = useReducer(sectionReducer, initialState);

    const setAllAction = async () => {
        const {response, status} = await request(sectionAPI.getAll());
        if(response.success && status == 200) {
            dispatch({type: SET_ALL, ...response.data});
        }
    }
    const setOneAction = async (sectionType, data) => {
        const {response, status} = await request(sectionAPI.create(sectionType, data));
        if(response.success && status === 200) {
            dispatch({type: SET_ONE, data: response.data, sectionType});
        }
    }
    const deleteOneAction = async (sectionType, id) => {
        const {response, status} = await request(sectionAPI.delete(sectionType, id));
        if(response.success && status === 200) {
            dispatch({type: DELETE_ONE, id: response.data.id, sectionType});
        }
    }
    const changeOneAction = async (sectionType, data) => {
        const {response, status} = await request(sectionAPI.change(sectionType, data));
        if(response.success && status === 200) {
            dispatch({type: CHANGE_ONE, data: response.data, sectionType});
        }
    }

    const clearAllAction = () => {
        dispatch({type: CLEAR_ALL});
    }

    return(
        <SectionContext.Provider value={{
            movies: state.movies,
            books: state.books,
            todos: state.todos,
            setAllAction,
            setOneAction,
            deleteOneAction,
            changeOneAction,
            clearAllAction
        }}>
            {children}
        </SectionContext.Provider>
    );
}

export default SectionState;