import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { saveLocalStorage, getLocalStorage } from '../../common/LocalStorage'
import { KEY_LOCAL_STORAGE } from '../../common/Constant'


const LocalStorageScreen = () => {
    const onSaveLocalStorage = () => {
        let data = {
            username: "Victor",
            password: "123"
        }
        saveLocalStorage(KEY_LOCAL_STORAGE,data)
    }

    const onGetLocalStorage = () => {
        let data = getLocalStorage(KEY_LOCAL_STORAGE).
        then((data) => console.log(data))
        
    }

  return (
      <SafeAreaView style={styles.container}>
            <Text>Result: </Text>
            <TouchableOpacity onPress={() => onSaveLocalStorage()} style={[styles.btn,styles.btn_secondary]}>
                <Text style={styles.btn_text}>Save Local Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onGetLocalStorage()} style={[styles.btn,styles.btn_primary]}>
                <Text style={styles.btn_text}>Get Local Storage</Text>
            </TouchableOpacity>
      </SafeAreaView>
  )
}

export default LocalStorageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn: {
        padding: 16,
        borderRadius: 5,
        marginTop: 8
    },

    btn_primary: {
        backgroundColor: "blue",
        
    },
    btn_secondary: {
        backgroundColor: "red",
        
    },

    btn_text: {
        color: "#FFF"
    }
})