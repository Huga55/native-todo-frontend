import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import AppText from "./../UI/AppText";
import { AntDesign } from '@expo/vector-icons'; 

const Loader = () => {
    return(
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
            <AppText style={styles.text}>
                Делаем всякие нужные штуки...<AntDesign name="smileo" size={24} color="#0000ff" />
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1000,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    text: {
        color: "#0000ff",
    },
});

export default Loader;