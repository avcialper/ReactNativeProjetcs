import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import styles from './ContentInputModal.styles'
import Button from '../../Button'
import Modal from 'react-native-modal'

export default ({ isVisible, onClose, onSend }) => {

    const [text, setText] = useState('')

    const handleSend = () => {
        if (!text)
            return
        onSend(text)
        setText('')
    }

    return (
        <Modal
            style={styles.modal}
            swipeDirection='down'
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container} >
                <View style={styles.inputContainer} >
                    <TextInput
                        placeholder='derdin ne?'
                        onChangeText={setText}
                        style={styles.input}
                        multiline={true} />
                </View>
                <Button text='salla gitsin' onPress={handleSend} />
            </View>
        </Modal>
    )
}