import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import HomeScreen from './screen/Home/HomeScreen'
import LoginScreen from './screen/Login/LoginScreen'
import LocalStorageScreen from './screen/LocalStorage/LocalStorageScreen'

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
      {/* <LocalStorageScreen /> */}
      {/* <LoginScreen /> */}
    </Provider>
  )
}

export default App