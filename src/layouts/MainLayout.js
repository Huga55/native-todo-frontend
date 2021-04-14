import React, { useContext } from "react";
import { Modal } from "react-native";
import NavigationWrapper from "./../navigation/NavigationWrapper";
import EditModal from "./../components/Modal/EditModal";
import ModalContext from "./../context/modal/ModalContext";


const MainLayout = () => {
    const { isActive } = useContext(ModalContext); 

    return(
        <>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isActive}
            ><EditModal /></Modal>
            <NavigationWrapper />
        </>
    );
}

export default MainLayout;