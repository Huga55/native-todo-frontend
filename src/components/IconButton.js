import React, { useContext }  from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import ModalContext from "../context/modal/ModalContext";

;

const IconButton = (props) => {
    const { setModalAction } = useContext(ModalContext);
    const { children, style, route, navigation, buttonType, onPress, ...otherProps } = props;

    const { listType, id } = route.params;

    const showModal = () => {
        setModalAction(buttonType, listType, id);
    }

    return(
        <TouchableOpacity style={ {...styles.button, ...style} } {...otherProps} onPress={onPress? onPress : showModal}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
    }
});

export default IconButton;