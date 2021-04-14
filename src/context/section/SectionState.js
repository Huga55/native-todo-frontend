import React from "react";
import { useReducer } from "react";
import SectionContext from "./SectionContext";
import sectionReducer from "./sectionReducer";
import { SET_ALL, SET_ONE, DELETE_ONE, CHANGE_ONE } from "./sectionReducer";

const SectionState = (props) => {
    const { children } = props;

    const initialState = {
        movies: [
            {
                id: "1",
                name: "Movie 1",
                describe: "",
                isEnd: false,
            }
        ],
        books: [
            {
                id: "1",
                name: "Book 1",
                describe: "Descr 1",
                isEnd: false,
            },
        ],
        todos: [
            {
                id: "1",
                name: "Todo 1",
                describe: "Descr 1",
                isEnd: false,
            },
        ],
    }

    const [state, dispatch] = useReducer(sectionReducer, initialState);

    const setAllAction = (data, name) => dispatch({type: SET_ALL, data, name});
    const setOneAction = (data, name) => dispatch({type: SET_ONE, data, name});
    const deleteOneAction = (id, name) => dispatch({type: DELETE_ONE, id, name});
    const changeOneAction = (data, name) => dispatch({type: CHANGE_ONE, data, name});

    return(
        <SectionContext.Provider value={{
            movies: state.movies,
            books: state.books,
            todos: state.todos,
            setAllAction,
            setOneAction,
            deleteOneAction,
            changeOneAction
        }}>
            {children}
        </SectionContext.Provider>
    );
}

export default SectionState;