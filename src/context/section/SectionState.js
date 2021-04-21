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
                name: "Movie sdfisdjlkg 1",
                describe: "",
                isEnd: false,
            },
            {
                id: "2",
                name: "Movie .v,mx.b,;'1 2",
                describe: "",
                isEnd: false,
            },
            {
                id: "3",
                name: "Movie 3",
                describe: "",
                isEnd: false,
            },
            {
                id: "4",
                name: "Movie sd;kv;vob[pcvob] 4",
                describe: "",
                isEnd: false,
            },
            {
                id: "5",
                name: "Movie .v,mx.b,;'1 5",
                describe: "",
                isEnd: false,
            },
            {
                id: "6",
                name: "Movie 6",
                describe: "",
                isEnd: false,
            },
            {
                id: "7",
                name: "Movie sd;kv;vob[pcvob] 7",
                describe: "",
                isEnd: false,
            },
            {
                id: "8",
                name: "Movie 6",
                describe: "",
                isEnd: false,
            },
            {
                id: "9",
                name: "Movie sd;kv;vob[pcvob] 7",
                describe: "",
                isEnd: false,
            },
            {
                id: "10",
                name: "Movie 6",
                describe: "",
                isEnd: false,
            },
            {
                id: "11",
                name: "Movie sd;kv;vob[pcvob] 7",
                describe: "",
                isEnd: false,
            },
            {
                id: "12",
                name: "Movie 6",
                describe: "",
                isEnd: false,
            },
            {
                id: "13",
                name: "Movie sd;kv;vob[pcvob] 7",
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