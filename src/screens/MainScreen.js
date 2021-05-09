import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Modal, Alert } from "react-native";
import AppButton from "../components/AppButton";
import Link from "../components/Link";
import AuthModal from "../components/Modal/AuthModal";
import UserContext from "../context/user/UserContext";
import { Theme } from "../Theme/Theme";
import Author from "../UI/Author";
import Container from "./../UI/Container";


const MainScreen = (props) => {
    const { isAuth, logoutUser } = useContext(UserContext);

    const { navigation } = props;

    const links = [
        {title: "Мои Фильмы", type: "movies", name: "фильмов"}, 
        {title: "Мои Книги", type: "books", name: "книг"}, 
        {title: "Нужно сделать", type: "todos", name: "дел"}
    ];

    const handlerExit = () => {
        Alert.alert(
            "Выход",
            "Вы уверены, что хотите выйти из аккаунта?",
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                { 
                    text: "Выйти", 
                    onPress: () => logoutUser(),
                    style: "destructive" 
                }
            ]
        );
    }

    return(
        <>
            <Modal
                animationType="slide"
                transparent={false}
                visible={!isAuth}
            ><AuthModal /></Modal>
            <Container>
                <View style={styles.wrapper}>
                    <View style={styles.exit}>
                        <AppButton style={styles.exitButton} styleText={styles.exitText} onPress={handlerExit}>
                            Выйти
                        </AppButton>
                    </View>
                    {
                        links.map((l, index) => <Link key={index} info={l} navigation={navigation}  />)
                    }
                </View>
                <Author />
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    exit: {
        position: "absolute",
        right: 0,
        top: 15,
    },
    exitButton: {
        paddingHorizontal:10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: Theme.MAIN_COLOR,
        borderRadius: 10,
    },
    exitText: {
        color: Theme.MAIN_COLOR
    }
});


export default MainScreen;