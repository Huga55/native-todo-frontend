import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import { Entypo } from '@expo/vector-icons'; 

const Empty = () => {
    return(
        <View style={styles.empty}>
            <AppText style={styles.emptyText}>
                Ничего нет 
            </AppText>
            <Entypo name="emoji-sad" size={24} color="black" style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    empty: {
        justifyContent: "center",
        "alignItems": "center",
        "flexDirection": "row",
    },
    emptyText: {
        marginRight: 5,
        color: "#000",
    },
});

export default Empty;