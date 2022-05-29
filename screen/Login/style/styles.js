import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gradient_container: {
        position: 'absolute',
        width: "100%",
        height: "100%"
    },

    linear_container: {
        flex: 1,
        alignItems: 'center'
    },

    form_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0
    },

    form_container_flex: {
        flex: 1,
        alignItems: 'center'
    },

    form_container_flex__title: {
        fontWeight: '500',
        fontSize: 24,
        color: "#000"
    },

    form_input_container: {
        width: "80%",
        marginTop: 24,

    },

    input_container: {
        borderRadius: 30,
        backgroundColor: "#F7F7F7",
        padding: 24
    },

    input_with_icon_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    input_with_icon_container__icon: {
        width: 24,
        height: 24,
        // marginRight: 8
    },

    input_with_icon_container__input: {
        height: 42,
        width: "80%",
        padding: 8
    },

    form_input_button: {
        height: 45,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
    },

    form_input_button__text: {
        color: "white",
        alignSelf: 'center',
        fontSize: 16
    },

    form_container__signup_text: {
        alignSelf: 'center',
        color: 'black',
        marginTop: 16
    }



})