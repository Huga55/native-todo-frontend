import React, { useReducer } from "react";
import AppContext from "./AppContext";
import appReducer, { SET_IS_LOADING, CLEAR_IS_LOADING, SET_GLOBAL_ERROR, CLEAR_GLOBAL_ERROR } from "./appReducer";

const AppState = (props) => {
    const { children } = props;

    const initialState = {
        globalError: null,
        isLoading: false,
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const setIsLoading = () => dispatch({type: SET_IS_LOADING});
    const clearIsLoading = () => dispatch({type: CLEAR_IS_LOADING});
    const setGlobalError = (error) => dispatch({type: SET_GLOBAL_ERROR, error});
    const clearGlobalError = () => dispatch({type: CLEAR_GLOBAL_ERROR}); 

    return(
        <AppContext.Provider value={{
            globalError: state.globalError,
            isLoading: state.isLoading,
            setIsLoading, clearIsLoading, setGlobalError, clearGlobalError
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppState;