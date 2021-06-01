import React from 'react'
import {StyleSheet, View, FlatList, Image} from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
                <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
            )}
        />
    )
    if (!todos.length) {
        content = <View style={styles.imageWrap}>
            <Image style={styles.image}
                   source={require('../../assets/no-items.png')}/>
        </View>
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})
