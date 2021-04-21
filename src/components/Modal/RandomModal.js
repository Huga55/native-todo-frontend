import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Theme } from "../../Theme/Theme";
import AppText from "../../UI/AppText";
import AppButton from "../AppButton";
import * as Animatable from 'react-native-animatable';

const RandomModla = (props) => {
    const { items, close } = props;

    const getAnimatableElems = () => {
        const newItems = [...items];
        newItems.sort(() => Math.random() - 0.5);

        const randomIndex = Math.floor(Math.random() * 4)

        const elems = newItems.slice(0, 4).map( (item, index) => {

            return(
                <Animatable.View 
                    animation={"bounceInDown"} 
                    delay={index * 400} 
                    duration={3000} 
                    key={item.id} 
                    style={styles.animationWrapper}
                    >
                    <Animatable.View  
                        style={styles.textWrapper} 
                        animation={index === randomIndex? "" : index % 2 === 0? "fadeOutLeftBig" : "fadeOutRightBig"} 
                        duration={1000}
                        delay={2000 + index * 400}
                        >
                        <AppText style={styles.name}>
                            {item.name}
                        </AppText>
                    </Animatable.View>
                </Animatable.View>
            );
        })
        return elems;
    }

    return(
        <View style={styles.wrapper}>
            <View style={styles.nameWrapper}>
                {getAnimatableElems()}
            </View>
            <View style={styles.closeWrapper}>
                <AppButton style={styles.closeButton} onPress={close}>
                    OK
                </AppButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textWrapper: {

    }, 
    animationWrapper: {
        position: "absolute", 
        justifyContent: "center",
        alignItems: "center",
    },
    nameWrapper: {
        width: "70%",
        height: 30,
        marginBottom: 20,
        position: "relative",
        borderWidth: 1,
        borderColor: Theme.MAIN_COLOR,
        justifyContent: "center",
        alignItems: "center",
    }, 
    name: {
        color: Theme.MAIN_COLOR,
    },
    closeWrapper: {
        width: "70%",
        height: 30,
        backgroundColor: Theme.MAIN_COLOR,
    },
    closeButton: {
        
    }
});

export default RandomModla;