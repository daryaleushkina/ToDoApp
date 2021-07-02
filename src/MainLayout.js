import React, {useContext} from 'react'
import {Navbar} from "./components/Navbar";
import {View, StyleSheet, Alert} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)

    console.log(todoId)

    return (<View>
        <Navbar title='Todo App!' />
        <View style={styles.container}>
            {
                todoId ? <TodoScreen/> : <MainScreen/>
            }
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})