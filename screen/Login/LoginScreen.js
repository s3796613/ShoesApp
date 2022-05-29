import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style/styles'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import { callLogin } from './LoginThunks'
import { KEY_LOCAL_TOKEN } from '../../common/Constant'

const LoginScreen = () => {
    const bg_login = require('../../assets/images/bg_login.webp')
    const icon_user = require('../../assets/images/icon_user.png')
    const icon_password = require('../../assets/images/ic_password.png')
    const dispatch = useDispatch()
    // const loginStatus = useSelector((state) => state.login.loginStatus)
    // const accessToken = useSelector((state) => state.login.accessToken)


    let user = {
        email: "",
        password: ""
    }


    const emailHandler = (data) => {
        let loginData = user
        loginData.email = data
    }

    const passwordHandler = (data) => {
        let loginData = user
        loginData.password = data
    }

    const onPressLogin = () => {
        console.log(user)
        dispatch(callLogin(user))
    }

    useEffect(() => {
        
    }, [])
    
    
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
          <Image source={bg_login}
              style={{width: '100%', height: "100%"}}
              resizeMode='cover'
          />
      </View>

      <View style={{flex: 1}}>

      </View>

        <LinearGradient
            style={styles.gradient_container}
            colors={["transparent","#FFF","#FFF"]}
        >
            <View style={styles.linear_container}>
                <View style={styles.form_container}>
                    <View style={styles.form_container_flex}>
                        <Text style={styles.form_container_flex__title}>Login</Text>
                        <View style={styles.form_input_container}>
                            <View style={styles.input_container}>
                                <View style={styles.input_with_icon_container}>
                                    <Image source={icon_user} style={styles.input_with_icon_container__icon}/>
                                    <TextInput placeholder='Email' style={styles.input_with_icon_container__input} onChangeText={emailHandler}/>
                                </View>
                                <View style={{height: 1, backgroundColor: "#DFDFDF"}} />
                                <View style={styles.input_with_icon_container}>
                                    <Image source={icon_password} style={styles.input_with_icon_container__icon}/>
                                    <TextInput placeholder='Password' style={styles.input_with_icon_container__input} onChangeText={passwordHandler} secureTextEntry/>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.form_input_button} onPress={() => {onPressLogin()}}>
                            <Text style={styles.form_input_button__text}>Log in</Text>
                        </TouchableOpacity>
                        <Text style={styles.form_container__signup_text}>Don't have an account? Signup</Text>
                        </View>


                    </View>
                </View>
            </View>

        </LinearGradient>
    </View>
  )
}

export default LoginScreen
