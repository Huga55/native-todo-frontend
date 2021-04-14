import React from "react";
import { View, StyleSheet } from "react-native";

const Container = (props) => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
    }
});

export default Container;