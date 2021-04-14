import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Theme } from "../Theme/Theme";
import AppText from "./../UI/AppText";

const Link = (props) => {
    const { info, navigation } = props;

    const setListScreen = () => {
        navigation.push("List", {listType: info.type, title: info.name});
    }

    return(
        <TouchableOpacity style={styles.buttonWrapper} onPress={setListScreen}>
            <View style={styles.button}>
                <AppText style={styles.buttonText}>{info.title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 160,
        height: 40,
        marginVertical: 10,
    },
    button: {
        width: "100%",
        height: "100%",
        backgroundColor: Theme.MAIN_COLOR,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: Theme.TEXT_COLOR,
    }
});

export default Link;