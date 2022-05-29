import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Appbar = () => {
    const iconClose = require('../../../assets/images/icon_close.png')
    const iconTune = require('../../../assets/images/icon_tune.png')
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Image source={iconClose} style={styles.button_icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
          <Image source={iconTune} style={styles.button_icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Appbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },

    button_icon: {
        width: 24,
        height: 24
    }
})