import React from "react";
import { useContext } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Keyboard, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import UserContext from "../../context/user/UserContext";
import { Theme } from "../../Theme/Theme";
import AppText from "../../UI/AppText";
import AppButton from "../AppButton";
import AppContext from "./../../context/app/AppContext";
import Loader from "./../../components/Loader";

const AuthModal = (props) => {
    const { registerUser, loginUser, checkUser } = useContext(UserContext);
    const { isLoading } = useContext(AppContext);

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [type, setType] = useState("auth");

    useEffect(() => {
        checkUser();
    }, []);

    const handleSubmit = () => {
        if(!emailInput || !passwordInput) {
            getAlert("Поля email и пароль должны быть заполнены.");
            return;
        }
        const regExp = /.+@.+\..+/;
        if(!emailInput.match(regExp)) {
            getAlert("Некорректный email.");
            return;
        }
        if(passwordInput.length < 6) {
            getAlert("Пароль должен содержать не менее 6ти символов.");
            return;
        }
        if(type === "auth") {
            loginUser(emailInput, passwordInput);
        }else if(type === "register") {
            registerUser(emailInput, passwordInput);
        }
    }

    const getAlert = (text) => {
        Alert.alert(
            "Ошибка :-(",
            text,
            [
              { text: "OK" }
            ]
        );
    }

    const changeType = () => {
        if(type === "auth") {
            setType("register");
        }else {
            setType("auth");
        }
    }

    return(
        <>
            {isLoading? <Loader /> : null}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.wrapper}>
                    <View style={styles.title}>
                        <AppText style={styles.titleText}>
                            {type === "auth"? "Авторизация" : "Регистрация"}
                        </AppText>
                    </View>
                    <View style={styles.emailWrapper}>
                        <TextInput 
                            style={styles.emailInput}
                            value={emailInput}
                            onChangeText={setEmailInput}
                            maxLength={80}    
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.passWrapper}>
                        <TextInput 
                            style={styles.passInput}
                            value={passwordInput}
                            onChangeText={setPasswordInput}
                            maxLength={40}    
                            placeholder="Пароль"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <AppButton style={styles.button} onPress={handleSubmit}>
                            {type === "auth"? "Войти" : "Зарегистрироваться"}
                        </AppButton>
                    </View>
                    <View style={styles.changeWrapper}>
                        <AppButton style={styles.change} styleText={styles.changeText} onPress={changeType}>
                            {type === "auth"? "Регистрация" : "Авторизация"}
                        </AppButton>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    title: {
        marginTop: -50,
        alignItems: "center",
    },
    titleText: {
        color: "#000",
        fontSize: 16
    },
    emailWrapper: {
        alignItems: "center",
        marginVertical: 15
    },
    emailInput: {
        width: 200,
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 2,
    },
    passWrapper: {
        alignItems: "center"
    },
    passInput: {
        width: 200,
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 2,
    },
    buttonWrapper: {
        height: 35,
        marginTop: 15,
        alignItems: "center",
    },
    button: {
        width: 200,
        borderRadius: 8,
        backgroundColor: Theme.MAIN_COLOR
    },
    changeWrapper: {
        height: 30,
        marginTop: 15,
        alignItems: "center",
    },
    change: {
        width: 200,
    },
    changeText: {
        color: Theme.MAIN_COLOR
    }
});

export default AuthModal;