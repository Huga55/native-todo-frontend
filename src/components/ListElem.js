import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Theme } from "../Theme/Theme";
import AppText from "./../UI/AppText";

const ListElem = (props) => {
    const { item, navigation, route } = props;
    const { name, id } = item;
    
    const getInfoScreen = () => {
        navigation.push("Info", {...route.params, id});
    }

    return(
        <TouchableOpacity style={styles.button} onPress={getInfoScreen}>
            <View style={styles.buttonWrapper}>
                <AppText>
                    {name}
                </AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
    },
    buttonWrapper: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Theme.MAIN_COLOR,
        borderRadius: 8,
    },
});

export default ListElem;