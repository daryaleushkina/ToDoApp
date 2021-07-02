import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Modal, Alert} from "react-native";
import {THEME} from "../theme";
import {AppButton} from "./UI/AppButton";

export const EditModal =( {visible, onCancel, titleTodo, onSave} ) => {
    const [title,setTitle] = useState(titleTodo)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка! Минимальная длина 3 символа')
        }
        else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(titleTodo)
        onCancel()
    }
    return (
        <Modal visible={visible}
               animationType="slide"
               transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           value={title}
                           autoCapitalize='none'
                           autoCorrect={false}
                           maxLength={64}
                           onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <AppButton
                            onPress={cancelHandler}
                            color={THEME.DANGER_COLOR}
                    >Отменить
                    </AppButton>
                    <AppButton
                            onPress={saveHandler}
                    >
                        Сохранить
                    </AppButton>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        borderBottomColor: THEME.MAIN_COLOR,
        borderLeftColor: '#fff',
        padding: 10
    },
    buttons: {
        width: '100%',
        justifyContent: 'space-around',
        marginTop:10,
        flexDirection:'row'
    },
    cancel: {
        color: THEME.DANGER_COLOR
    }

})