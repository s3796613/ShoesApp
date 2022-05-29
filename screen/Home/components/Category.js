import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductByCategoryId } from '../HomeThunks'

const Category = (props) => {
    const dispatch = useDispatch()
    const renderItem = (item) => (
        <TouchableOpacity onPress={() => dispatch(fetchProductByCategoryId(item.id))}>
            <Text style={styles.button__text_color}>{item.category}</Text>
        </TouchableOpacity>
    )
  return (
    <View style={{}}>
      <FlatList data={props.data} renderItem={({item}) => renderItem(item)} horizontal/>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    button__text_color: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        margin: 8
    }
})