import { View, Text, StyleSheet, SafeAreaView, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import { ButtonStyle } from '../componant/componantUI';
import { useSelector, useDispatch } from 'react-redux';
import { LoginData } from '../redux/action';


function Login(prop) {
    const [PhoneNumber, setPhoneNumber] = useState()
    const [LengthNum, setLengthNum] = useState()
    const dispatch = useDispatch();
    const {loginstate, phoneNumber} = useSelector(state => state.userReducer);
    let user = {
        phoneNumber:PhoneNumber,
    }

    const login=()=>{
        dispatch(LoginData(user));
    }
    
    return (
        <SafeAreaView style={styles.contrainer}>        
            
            <TextInput placeholder={PhoneNumber?PhoneNumber:'0XX-XXX-XXXX'} style={styles.input} value={PhoneNumber} onChangeText={(value)=>{setPhoneNumber(value), setLengthNum(value.length)}} maxLength={10}/>
            <ButtonStyle message={'เข้าสู่ระบบ'} onPress={()=>{prop.navigation.navigate('Home')}} />
            {loginstate?<Text style={{color:'black'}}>loginsuccess num is {phoneNumber}</Text>:<Text>Login please {PhoneNumber} </Text>}
            <ButtonStyle message={'ลงทะเบียน'} colorStyle={'#7DB9B6'} onPress={()=> {login(user)}} disabled={LengthNum === 10?false:true}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contrainer: {
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input:{
        width:'100%',
        height:50,
        backgroundColor:'#BDCDD6',
        borderRadius:10,
        fontSize:25,
        textAlign:'center',
    }

})

export default Login;