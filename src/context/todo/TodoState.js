import React, {useReducer, useContext} from 'react'
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {ADD_TODO, EDIT_TODO, REMOVE_TODO} from "../types";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [
            {id: '1', title: 'Выучить React Native'},
            {id: '2', title: 'Выучить Kotlin'},
            {id: '3', title: 'Провести занятие'},
            {id: '4', title: 'Сделать code-review😎'},
        ]
    }

    const {changeScreen} = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({type: ADD_TODO, title: title})

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null)
                        dispatch({type: REMOVE_TODO, id})
                    }
                }
            ],
            {cancelable: false}
        )

    }

    const editTodo = (id, title) => dispatch({type: EDIT_TODO, id, title})
    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        editTodo
    }}>
        {children}
    </TodoContext.Provider>
}