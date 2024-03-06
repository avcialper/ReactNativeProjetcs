import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const baseStyle = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 45,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default {
    primary: StyleSheet.create({
        container: {
            ...baseStyle.container,
            backgroundColor: colors.lightyellow,
        },
        text: {
            ...baseStyle.text,
            color: 'black'
        }
    }),
    secondary: StyleSheet.create({
        container: {
            ...baseStyle.container,
            borderWidth: 3,
            borderColor: colors.lightyellow
        },
        text: {
            ...baseStyle.text,
            color: colors.lightyellow
        }
    })
}