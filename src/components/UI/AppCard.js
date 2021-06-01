import React from 'react';
import {StyleSheet, View} from "react-native";
import {THEME} from "../../theme";

export const AppCard = props => (
    <View style={ {...styles.default, ...props.style } }>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    default: {
        borderWidth: 2,
        padding:20,
        borderColor: THEME.GREY_COLOR,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'#000000',
        shadowRadius:2,
        shadowOpacity:0.3,
        shadowOffset: {width:2,height:2},
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius:10
    }
})