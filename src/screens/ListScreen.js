import React, { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import ListElem from "../components/ListElem";
import SectionContext from "../context/section/SectionContext";
import { Theme } from "../Theme/Theme";
import AppText from "../UI/AppText";
import Empty from "../UI/Empty";
import RandomModal from "./../components/Modal/RandomModal";

const ListScreen = (props) => {
    const [modal, setModal] = useState(false);
    const contextData = useContext(SectionContext);

    const { navigation, route } = props;
    const { listType, title } = route.params;
    const needRandom = listType === "books" || listType === "movies";

    useEffect(() => {
        navigation.setOptions({title: `Список ${title}`});
    }, []);

    return(
        <>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
            ><RandomModal items={contextData[listType]} /></Modal>
            <View style={ [styles.wrapper, !needRandom? {marginTop: 20} : ""] }>
                {
                    needRandom &&
                    <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
                        <AppText style={styles.buttonText}>
                            Случайный выбор
                        </AppText>
                    </TouchableOpacity>
                }
            </View>
            {
                contextData[listType].length > 0?
                <FlatList
                    data={contextData[listType]}
                    renderItem={({item}) => <ListElem item={item} navigation={navigation} route={route}/>}
                    keyExtractor={item => item.id}
                /> : <Empty />
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
});

export default ListScreen;