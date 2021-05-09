import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from "../Theme/Theme";
import MainScreen from "../screens/MainScreen";
import ListScreen from "../screens/ListScreen";
import InfoScreen from "../screens/InfoScreen";
import IconButton from "../components/IconButton";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();

const headerStyle = {
    backgroundColor: Platform.OS === "android"? Theme.MAIN_COLOR : Theme.TEXT_COLOR,
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 2,
}

const headerTintColor = Platform.OS === "android"? Theme.TEXT_COLOR : Theme.MAIN_COLOR;

const myTheme = {
    
}

const NavigationWrapper = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={MainScreen} 
                    options={{
                        title: "Главная",
                        headerStyle,
                        headerTintColor,
                    }}    
                />
                <Stack.Screen 
                    name="Info"
                    component={InfoScreen}
                    options={({ navigation, route }) => ({
                        title: "Информация",
                        headerStyle,
                        headerTintColor,
                        headerRight: () => <IconButton navigation={navigation} route={route} modal={() => setModalVisible(true)} buttonType={"edit"}>
                                <MaterialIcons name="edit" size={24} color={Platform.OS === "android"? Theme.TEXT_COLOR : Theme.MAIN_COLOR} buttonType={"edit"}/>
                            </IconButton>,
                    })}
                />
                <Stack.Screen 
                    name="List"
                    component={ListScreen}
                    options={ ({ navigation, route }) => ({
                        title: "Список",
                        headerStyle,
                        headerTintColor,
                        headerRight: () => <IconButton navigation={navigation} route={route} modal={() => setModalVisible(true)} buttonType={"create"}>
                            <Entypo name="plus" size={24} color={Platform.OS === "android"? Theme.TEXT_COLOR : Theme.MAIN_COLOR} />
                        </IconButton>,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationWrapper;