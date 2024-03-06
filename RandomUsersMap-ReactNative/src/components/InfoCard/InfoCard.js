import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import styles from './InfoCard.style'

export default ({ visible, close, user }) => {
    return (
        <Modal
            isVisible={visible}
            swipeDirection='down'
            onSwipeComplete={close}
            onBackdropPress={close}
            onBackButtonPress={close}
            backdropOpacity={0.3}
            style={styles.modal} >
            <View style={styles.container} >
                <Text style={styles.username} >{user.username}</Text>
                <Text style={styles.fullName} >{user.first_name} {user.last_name}</Text>
            </View>
        </Modal>
    )
}