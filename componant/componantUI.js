import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import React from 'react';


export const ButtonStyle = ({ message, colorStyle, onPress, disabled }) => {
    return (
        <Pressable style={[styles.button, colorStyle? { borderColor: colorStyle, backgroundColor: colorStyle} : { borderColor: 'gray', backgroundColor: null }]} onPress={onPress} disabled={disabled}>
            <Text style={[styles.buttonText, colorStyle? { color: 'white'} : { color: 'black' }]}>{message}</Text>
        </Pressable>
    )
}
export const TestTest=()=>{
    return(
        <View>
        <Text>dfsdfsdfsdfsd</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


    },
    buttonText: {
        fontWeight: 800,
    }
})



