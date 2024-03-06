import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Input.styles'

export default ({ placeholder, text, onChangeText, iconName = [null, null], isSecure = false, changeableIcon = false }) => {

    const [secure, setSecure] = useState(isSecure)
    const [initialIcon, setInitialIcon] = useState()

    useEffect(() => {
        isSecure ? setInitialIcon(0) : setInitialIcon(1)
    }, [])

    const changeIcon = () => {
        if (changeableIcon) {
            if (initialIcon === 1) {
                setInitialIcon(0)
                setSecure(true)
            } else {
                setInitialIcon(1)
                setSecure(false)
            }
        }
    }

    return (
        <View style={styles.container} >
            <TextInput
                autoCapitalize='none'
                style={styles.input}
                value={text}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secure} />
            <Icon style={styles.icon} name={iconName[initialIcon]} onPress={changeIcon} />
        </View>
    )
}