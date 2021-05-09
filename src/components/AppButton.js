import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./../UI/AppText";

const AppButton = (props) => {
    const { children, style, styleText, ...otherProps } = props;

    return(
        <TouchableOpacity activeOpacity={0.7} style={ {...styles.button, ...style} } {...otherProps}>
            <AppText style={ {...styleText} }>
                {children}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        "alignItems": "center",
    }
});

export default AppButton;