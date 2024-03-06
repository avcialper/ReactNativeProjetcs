import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './FloatingButton.styles'

export default ({ iconName, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Icon name={iconName} style={styles.icon} />
        </Pressable>
    )
}