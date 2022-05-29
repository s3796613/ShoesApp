import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container__header: {
        width: "100%",
        height: 250,
        backgroundColor: "#000",
        position: 'absolute'
    },

    shoecard: {
        backgroundColor: "#FFF",
        margin: 8, 
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    shoecard_name: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 16
    },

    shoecard_price: {
        fontSize: 16,
        color: "#CCC",
        marginTop: 16
    },

    button__text_color: {
        fontSize: 16,
        fontWeight: '500',
        margin: 8
    }
})

export default styles