import React, {useState, useEffect}from 'react'
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import {THEME} from "../theme";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width-2*THEME.PADDING_HORIZONTAL)

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL* 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)

        return() => {
            Dimensions.removeEventListener('change', update)
        }
    })

    let content = (
        <View style={{width:deviceWidth}}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => (
                    <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
                )}
            />
        </View>

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
