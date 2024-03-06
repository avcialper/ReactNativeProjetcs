import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from './Loading.style.js'

export default () => {
    return (
        <View style={styles.container} >
            <ActivityIndicator color={'white'} size={40} />
        </View>
    )
}