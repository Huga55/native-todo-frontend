import React from "react";
import { View, StyleSheet, Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "./../UI/AppText";
import { MaterialIcons } from '@expo/vector-icons';
import { Theme } from "../Theme/Theme";
import IconButton from "../components/IconButton";
import { useContext } from "react";
import SectionContext from "../context/section/SectionContext";
import Empty from "../UI/Empty";
import { useEffect } from "react/cjs/react.development";

const InfoScreen = (props) => {
    const { deleteOneAction, ...sectionData } = useContext(SectionContext);
    const { navigation, route } = props;

    const { listType, id } = route.params;

    const section = sectionData[listType].find(s => s.id === id);

    const deleteHandler = () => {
        Alert.alert(
            "Удаление",
            `Вы уверены, что хотите удалить ${section.name}?`,
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  navigation.goBack();
                  deleteOneAction(id, listType);
              }}
            ]
        );
    }

    if(!section) {
        return <View></View>;
    }

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.block}>
                <AppText style={styles.name}>{section.name}</AppText>
                <View style={styles.button}>
                    <IconButton onPress={deleteHandler} navigation={navigation} route={route}>
                        <MaterialIcons name="delete-forever" size={24} color={Theme.WARNING_COLOR} />
                    </IconButton>
                </View>
            </View>
            {
                section.describe !== ""?
                <AppText style={styles.description}>
                    {section.describe}
                </AppText> : <Empty />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    block: {
        
    },  
    name: {
        marginBottom: 15,
        color: "#000",
        fontSize: 20,
    },
    description: {
        color: "#000",
        fontSize: 16,
        lineHeight: 25,
    },
    scroll: {
        marginVertical: 15,
        paddingHorizontal: 15,
        position: "relative",
    },
    button: {
        position: "absolute",
        right: -10,
    },
});

export default InfoScreen;