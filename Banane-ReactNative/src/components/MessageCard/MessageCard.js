import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './MessageCard.styles'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export default ({ message, onBanane }) => {

    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr
    })

    return (
        <View style={styles.container}>
            <View style={styles.upperBody} >
                <Text style={styles.title}>{message.username}</Text>
                <Text style={styles.title}>{formattedDate}</Text>
            </View>
            <Text style={styles.content} >{message.text}</Text>
            <View style={styles.footer} >
                <Pressable style={styles.dislikeContainer} onPress={onBanane} >
                    {
                        !!message.dislike &&
                        <View style={styles.dislikeCounter}>
                            <Text style={styles.dislikeCount}>{message.dislike}</Text>
                        </View>
                    }
                    <Text style={styles.banane} >bana ne?</Text>
                </Pressable>
            </View>
        </View>
    )
}