import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.lightyellow,
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
    upperBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    title: {
        fontSize: 15,
        fontStyle: 'italic',
        color: 'black'
    },
    content: {
        fontSize: 17,
        color: 'black'
    },
    footer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    banane: {
        marginHorizontal: 5,
        color: colors.lightyellow
    },
    dislikeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderWidth: 2,
        borderRadius: 15,
    },
    dislikeCounter: {
        backgroundColor: colors.lightyellow,
        paddingHorizontal: 3,
        borderRadius: 15
    },
    dislikeCount: {
        color: 'black',
        fontWeight: 'bold'
    }
})