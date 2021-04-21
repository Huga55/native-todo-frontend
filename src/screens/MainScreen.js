import React from "react";
import { View, StyleSheet } from "react-native";
import { useEffect } from "react/cjs/react.development";
import Link from "../components/Link";
import Author from "../UI/Author";
import Container from "./../UI/Container";


const MainScreen = (props) => {
    const { navigation } = props;

    const links = [
        {title: "Мои Фильмы", type: "movies", name: "фильмов"}, 
        {title: "Мои Книги", type: "books", name: "книг"}, 
        {title: "Нужно сделать", type: "todos", name: "дел"}
    ];

    return(
        <Container>
            <View style={styles.wrapper}>
                {
                    links.map((l, index) => <Link key={index} info={l} navigation={navigation}  />)
                }
            </View>
            <Author />
        </Container>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});


export default MainScreen;