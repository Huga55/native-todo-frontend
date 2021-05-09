import React, { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import ListElem from "../components/ListElem";
import SectionContext from "../context/section/SectionContext";
import UserContext from "../context/user/UserContext";
import { Theme } from "../Theme/Theme";
import AppText from "../UI/AppText";
import Empty from "../UI/Empty";
import RandomModal from "./../components/Modal/RandomModal";

const ListScreen = (props) => {
    const [isReady, setIsReady] = useState(false);
    const [modal, setModal] = useState(false);
    const contextData = useContext(SectionContext);
    const { limit } = useContext(UserContext);

    const { navigation, route } = props;
    const { listType, title } = route.params;
    const needRandom = listType === "books" || listType === "movies";

    useEffect(() => {
        navigation.setOptions({title: `Список ${title}`});
        setIsReady(true);
    }, []);

    const getModalHandler = () => {
        if(contextData[listType].length >= 4) {
            setModal(true);
        }else {
            Alert.alert(
                "Ошибка :-|",
                "Нужно не менее 4х элементов",
                [
                  { text: "OK" }
                ]
            );
        }
    }
    
    if(!isReady) {
        return <View><AppText>Loading...</AppText></View>
    }

    return(
        <>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
            ><RandomModal items={contextData[listType]} close={() => setModal(false)} /></Modal>
            <View style={ [styles.wrapper, !needRandom? {marginTop: 20} : ""] }>
                {
                    needRandom &&
                    <TouchableOpacity style={styles.button} onPress={getModalHandler}>
                        <AppText style={styles.buttonText}>
                            Случайный выбор
                        </AppText>
                    </TouchableOpacity>
                }
            </View>
            {
                contextData[listType].length > 0?
                <>
                    <View style={styles.countWrapper}>
                        <AppText style={styles.count}>{contextData[listType].length} / {limit}</AppText>
                    </View>
                    <FlatList
                        data={contextData[listType]}
                        renderItem={({item}) => <ListElem item={item} navigation={navigation} route={route}/>}
                        keyExtractor={item => item.id}
                    /> 
                </>
                : <Empty />
            }
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 15,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: "center",
        borderWidth: 1,
        borderColor: Theme.MAIN_COLOR,
    },
    buttonText: {
        fontSize: 18,
        color: Theme.MAIN_COLOR,
    },
    countWrapper: {
        paddingBottom: 5,
        paddingHorizontal: 20,
        alignItems: "flex-end"
    },
    count: {
        fontSize: 16,
        color: Theme.MAIN_COLOR
    }
});

export default ListScreen;