import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {AppText} from "./UI/AppText";
import {AppTextBold} from "./UI/AppTextBold";

export const Todo = ({todo, removeTodo,onOpen}) => {


    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onLongPress={() => removeTodo(todo.id)}
            onPress={() => onOpen(todo.id)}
        >
            <View style={styles.todo}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    todo: {
        marginBottom:10,
        flexDirection: 'row',
        alignItems:'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5

    }
})
