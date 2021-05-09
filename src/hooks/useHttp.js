import { useContext } from "react";
import AppContext from "./../context/app/AppContext";
import * as SecureStore from 'expo-secure-store';

const useHttp = () => {
    const { setGlobalError, setIsLoading, clearIsLoading } = useContext(AppContext);

    const baseURL = "https://wimdev.ru/native-todo/";

    const request = async ({endpoint, method, needToken, data = {}, headers = {}}) => {
        try {
            setIsLoading();
            const token = await SecureStore.getItemAsync('secure_token');
            let authorization = {};
            if(token && needToken) {
                authorization = {authorization: `Bearer ${token}`}
            }

            let responseJSON;
            console.log("data request", data)
            if(method === "POST" || method === "PUT") {
                responseJSON = await fetch(`${baseURL}${endpoint}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        ...authorization,
                        ...headers
                    },
                    body: JSON.stringify({...data}),
                });
            }else {
                responseJSON = await fetch(`${baseURL}${endpoint}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        ...authorization,
                        ...headers
                    },
                });
            }
            
            const status = responseJSON.status;
            const response = await responseJSON.json();
            console.log(response)
            if(response.success) {
                if(response.data && response.data.token) {
                    await SecureStore.setItemAsync('secure_token', response.data.token);
                }
            }else {
                setGlobalError(response.error);
            }
            clearIsLoading();
            return {response, status}
        } catch(error) {
            clearIsLoading();
            console.log("catched error", error)
        }
    }
    return {request};
}

export default useHttp;