import React from "react";
import { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "./userReducer";

const UserState = (props) => {
    const { children } = props;

    const initialState = {
        email: "email@mail.ru",
        token: "asd",
        isAuth: false,
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const loginUser = () => {
        return dispatch({type: SET_USER_DATA, data});
    }

    const logoutUser = () => {
        return dispatch({type: DELET_USER_DATA});
    }

    const checkUser = () => {
        return dispatch({type: SET_USER_DATA, data});
    }

    return(
        <UserContext.Provider value={{
            id: state.id,
            email: state.email,
            loginUser, logoutUser, checkUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserState;