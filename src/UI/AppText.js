import React from "react";
import { Text, StyleSheet } from "react-native";
import { Theme } from "../Theme/Theme";

const AppText = (props) => {
    const { style, children } = props;

    return(
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Theme.TEXT_COLOR,
    }
});

export default AppText