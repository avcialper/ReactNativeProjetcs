import React from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'
import styles from './Button.styles'

export default ({ text, loading = false, onPress, theme = 'primary' }) => {
    return (
        <Pressable
            style={styles[theme].container}
            onPress={onPress}
            disabled={loading}>
            {
                loading ?
                    <ActivityIndicator color='white' /> :
                    <Text style={styles[theme].text} >{text}</Text>
            }
        </Pressable>
    )
}