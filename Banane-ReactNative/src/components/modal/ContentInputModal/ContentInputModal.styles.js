import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    modal: {
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: '#3b3a38',
        padding: 10,
        borderRadius: 10,
        height: Dimensions.get('screen').height / 3,
    },
    inputContainer: {
        flex: 1,
    }
})