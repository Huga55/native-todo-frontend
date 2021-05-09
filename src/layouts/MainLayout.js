import React, { useContext } from "react";
import { Modal, Alert } from "react-native";
import NavigationWrapper from "./../navigation/NavigationWrapper";
import EditModal from "./../components/Modal/EditModal";
import ModalContext from "./../context/modal/ModalContext";
import AppContext from "../context/app/AppContext";
import { useEffect } from "react/cjs/react.development";
import Loader from "../components/Loader";
import UserContext from "../context/user/UserContext";
import SectionContext from "../context/section/SectionContext";

const MainLayout = () => {
    const { isActive } = useContext(ModalContext); 
    const { isLoading, globalError, clearGlobalError } = useContext(AppContext);
    const { setAllAction, clearAllAction } = useContext(SectionContext);
    const { isAuth } = useContext(UserContext);

    useEffect(() => {
        if(globalError) {
            Alert.alert(
                "Ой-ой.. :(",
                globalError,
                [
                  { text: "OK", onPress: () => clearGlobalError() }
                ]
            );
        }
    }, [globalError]);
    
    useEffect(() => {
        if(isAuth) {
            //to get all data for user (movies, books, todos)
            setAllAction();
        }else {
            clearAllAction();
        }
    }, [isAuth]);

    return(
        <>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isActive}
            ><EditModal /></Modal>
            <NavigationWrapper />
            {isLoading? <Loader /> : null}
        </>
    );
}

export default MainLayout;