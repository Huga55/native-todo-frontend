import React, { useReducer, useContext } from "react";
import UserContext from "./UserContext";
import userReducer from "./userReducer";
import useHttp from "../../hooks/useHttp";
import { userAPI } from "./../../api/API";
import { SET_USER_DATA, DELETE_USER_DATA } from "./userReducer";
import * as SecureStore from 'expo-secure-store';
import AppContext from "./../app/AppContext";

const UserState = (props) => {
    const { setGlobalError } = useContext(AppContext);
    const { request } = useHttp();
    const { children } = props;

    const initialState = {
        email: null,
        token: null,
        isAuth: false,
        limit: null,
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const registerUser = async (email, password) => {
        const {response, status} = await request(userAPI.register(email, password));
        if(status === 201 && response.success) {
            dispatch({type: SET_USER_DATA, data: response.data});
        }
    }

    const loginUser = async (email, password) => {
        const {response, status} = await request(userAPI.login(email, password));
        if(status === 201 && response.success) {
            dispatch({type: SET_USER_DATA, data: response.data});
        }
    }

    const logoutUser = async () => {
        const { response, status } = await request(userAPI.logout());
        if(response.success && status === 200) {
            await SecureStore.deleteItemAsync("secure_token");
            dispatch({type: DELETE_USER_DATA});
        }
    }

    const checkUser = async () => {
        const { response, status } = await request(userAPI.check(), false);
        if(response.success && status === 200) {
            const token = await SecureStore.getItemAsync('secure_token');
            dispatch({type: SET_USER_DATA, data: {...response.data, token}});
        }
    }

    const rememberPassword = async (email) => {
        const { response, status } = await request(userAPI.remember(email));
        if(response.success && status === 200) {
            //message for user
            await setGlobalError(response.data.message, "Успешно :)");
            return true;
        }
        return false;
    }

    return(
        <UserContext.Provider value={{
            email: state.email,
            isAuth: state.isAuth,
            token: state.token,
            limit: state.limit,
            loginUser, registerUser, logoutUser, checkUser, rememberPassword
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserState;