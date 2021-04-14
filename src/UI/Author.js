import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../Theme/Theme";

const Author = () => {
    return(
        <View style={styles.block}>
            <Text style={styles.text}>BY WIMDEV.COM</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        paddingBottom: 15,
        alignItems: "center",
    },
    text: {
        color: Theme.MAIN_COLOR,
        fontSize: 16,
    }
});

export default Author;