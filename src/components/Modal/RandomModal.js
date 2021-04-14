import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../UI/AppText";
import AppButton from "../AppButton";

const RandomModla = (props) => {
    const { items } = props;

    return(
        <View>
            <AppText>
                RandomModal
            </AppText>
            <AppButton>
                Close
            </AppButton>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default RandomModla;