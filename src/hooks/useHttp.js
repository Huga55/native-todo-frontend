import { useEffect, useState } from "react";
import {SecureStore} from 'expo';

const useHttp = (endpoint, type, needToken, data = null, headers = {}) => {
    const [responseData, setResponseData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const baseURL = "https://localhost:5000/";

    useEffect(() => {
        toRequest();
    }, [])

    const toRequest = async () => {
        setLoader(true);

        const token = await SecureStore.getItemAsync('secure_token');
        let authorization = {};
        if(token && needToken) {
            authorization = {authorization: `Bearer ${token}`}
        }

        const responseJSON = await fetch(`${baseURL}${endpoint}`, {
            method: type,
            headers: {
                "Content-Type": "application/json",
                ...authorization,
                ...headers
            },
            body: data,
        });
    
        const response = await responseJSON.json();
        
        if(response.success) {
            if(response.data.token) {
                await SecureStore.setItemAsync('secure_token', response.data.token);
            }
            setResponseData(response.data);
        }else {
            setError(response.error);
        }

        setLoader(false);
    }
    return {responseData, loader, error};
}

export default useHttp;