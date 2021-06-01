import React, {useState} from 'react'
import {StyleSheet, View, Button,Dimensions} from 'react-native'
import {THEME} from "../theme";
import {AppCard} from "../components/UI/AppCard";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/UI/AppTextBold";
import {AppButton} from "../components/UI/AppButton";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

export const TodoScreen = ({ goBack, todo, removeTodo, editTodo }) => {
    const [value, setValue] = useState('')
    const [modal, setModal] = useState(false)

    const onSave = (title) => {
        editTodo(todo.id,title)
        setModal(false)
    }
    return (
        <View>
            <EditModal visible={modal}
                       onCancel={()=>setModal(false)}
                       titleTodo={todo.title}
                       onSave={onSave}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>

                <AppButton onPress={()=>setModal(true)}>
                    <FontAwesome name={'edit'} size={20}/>
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton
                        onPress={goBack}
                        color={THEME.GREY_COLOR}
                    >
                        <AntDesign name={'back'} size={20} color={'#fff'}></AntDesign>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                            color={THEME.DANGER_COLOR}
                            onPress={() => {
                                removeTodo(todo.id)
                            }
                            }
                    ><AntDesign name="delete" size={24} color="#fff" />
                    </AppButton>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width * 0.4,
        color:'#fff34a'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize:20
    },
    card: {
        marginBottom:20,
        padding: 15
    }
})
