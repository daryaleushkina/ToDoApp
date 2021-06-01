import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View, Keyboard} from 'react-native'
import {THEME} from "../theme";
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым')
        }
    }
    const [value, setValue] = useState('')
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Введите название дела'
                autoCorrect={false}
            />
            <AntDesign.Button onPress={pressHandler}
                              name="pluscircleo"
                              color="white" >
                Добавить
            </AntDesign.Button>
        </View>

    )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        borderBottomColor: THEME.MAIN_COLOR,
        borderLeftColor: '#fff',
        padding: 10
    }

})
