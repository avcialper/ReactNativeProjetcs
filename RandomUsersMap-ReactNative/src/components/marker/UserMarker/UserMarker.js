import React from 'react'
import { View, Image } from 'react-native'
import { Marker } from 'react-native-maps'
import styles from './UserMarker.style'

export default ({ coordinates, userImageURL, onClick }) => {
    return (
        <Marker coordinate={coordinates} onPress={onClick} >
            <View>
                <Image style={styles.image} source={{ uri: userImageURL }} />
            </View>
        </Marker>
    )
}