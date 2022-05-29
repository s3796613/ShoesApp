import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import { fetchCategories, fetchProducts } from './HomeThunks'
import { useDispatch, useSelector } from 'react-redux'
import StaggeredList from '@mindinventory/react-native-stagger-view';
import styles from './HomeStyle';
import Appbar from './components/Appbar';
import Category from './components/Category';

const HomeScreen = () => {
    const likeIcon = require('../../assets/images/like.png')
    const dispatch = useDispatch()
    const dataProducts = useSelector((state) => state.home.dataProducts)
    const dataCategories = useSelector((state) => state.home.dataCategories)

    
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }, [])

    
    
    const renderItem = (item) => (
        <View style={styles.shoecard}>
            <Image source={likeIcon} style={{width: 16, height: 16, alignSelf: 'flex-end'}}/>
            <Image source={{uri: item.image}}  style={{width: '100%', height: 100}}/>
            <Text style={styles.shoecard_name}>{item.name}</Text>
            <Text style={styles.shoecard_price}>${item.price}</Text>
        </View>
    )

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container__header}></View>
        <Appbar />
        <Category data={dataCategories} />
        <StaggeredList
            data={dataProducts}
            animationType={'FADE_IN_FAST'}
            renderItem={({item}) => renderItem(item)}
        />
          
      </SafeAreaView>
  )
}

export default HomeScreen