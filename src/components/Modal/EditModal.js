import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import UserContext from "../../context/user/UserContext";
import ModalContext from "./../../context/modal/ModalContext";
import SectionContext from "./../../context/section/SectionContext";
import { Theme } from "./../../Theme/Theme";
import AppText from "./../../UI/AppText";
import AppButton from "./../AppButton";

const EditModal = () => {
    const { deleteModalAction, modalType, sectionType, editId } = useContext(ModalContext);
    const { setOneAction, changeOneAction, ...otherSectionProps } = useContext(SectionContext);
    const { limit } = useContext(UserContext);

    const activeSection = editId && otherSectionProps[sectionType].find(s => s.id === editId);
    const [nameInput, setNameInput] = useState(activeSection? activeSection.name : "");
    const [describeInput, setDescribeInput] = useState(activeSection? activeSection.description : "");
    const [describeLength, setDescribeLength] = useState(0);

    const describeHandler = (e) => {
        setDescribeInput(e);
        setDescribeLength(e.length);
    }

    const submitHundler = () => {
        if(nameInput.trim() !== "") {
            if(modalType === "create") {
                if(otherSectionProps[sectionType].length < limit) {
                    setOneAction(sectionType, {name: nameInput, description: describeInput});
                }else {
                    getError("К сожалению лимит превышен :(");
                }   
            }else {
                changeOneAction(sectionType, {id: activeSection.id, name: nameInput, description: describeInput});
            }   
            deleteModalAction();
        }else {
            getError("Поле с названием должно быть заполнено");
        }
    }

    const getError = (text) => {
        Alert.alert(
            "Ошибка :-(",
            text,
            [
              { text: "OK" }
            ]
        );
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <AppText style={styles.titleText}>
                        {modalType === "create"? "Создание" : "Редактирование"}
                    </AppText>
                </View>
                <TextInput
                    style={styles.inputName}
                    onChangeText={setNameInput}
                    value={nameInput}
                    placeholder="Название"
                />
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputDescribe}
                        onChangeText={describeHandler}
                        value={describeInput}
                        placeholder="Описание"
                        multiline={true}
                        maxLength={150}
                    />
                    <AppText style={styles.length}>
                        {describeLength} / 150
                    </AppText>
                </View>
                <View style={styles.buttons}>
                    <AppButton style={styles.cancel} onPress={deleteModalAction}>
                        Отмена
                    </AppButton>
                    <AppButton style={styles.accept} onPress={submitHundler}>
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        alignItems: "center",
    },
    titleText: {
        color: Theme.MAIN_COLOR,
        fontSize: 24,
    },
    inputName: {
        width: "80%",
        paddingTop: 10,
        paddingHorizontal: 5,
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 2,
    },
    inputDescribe: {
        width: "100%",
        
    },
    inputWrapper: {
        width: "80%",
        minHeight: 100,
        marginTop: 15,
        padding: 15,
        paddingBottom: 30,
        position: "relative",
        borderColor: Theme.MAIN_COLOR,
        borderWidth: 2,
        borderRadius: 10,
    },
    length: {
        position: "absolute",
        bottom: 10,
        right: 10,
        color: "#000",
    },
    buttons: {
        height: 40,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    cancel: {
        width: 100,
        marginHorizontal: 10,
        backgroundColor: Theme.WARNING_COLOR,
        borderRadius: 10,
    },
    accept: {
        width: 100,
        marginHorizontal: 10,
        backgroundColor: Theme.MAIN_COLOR,
        borderRadius: 10,
    }
});

export default EditModal;