import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/modal/ContentInputModal'
import styles from './Messages.styles'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import MessageCard from '../../components/MessageCard'
import parseContentData from '../../utils/parseContentData'

export default () => {

    const [inputModalVisible, setInputContentVisible] = useState(false)
    const [contentList, setContentList] = useState([])
    const [usermail, setUsername] = useState(auth().currentUser.email)

    useEffect(() => {
        database().ref('messages/').on('value', snapshot => {
            const contentData = snapshot.val()
            const parsedContent = parseContentData(contentData || {})
            setContentList(parsedContent)
        })
    }, [handleBanane])

    const handleInputToggle = () => {
        setInputContentVisible(!inputModalVisible)
    }

    const handleInputSend = (content) => {
        handleInputToggle()
        sendContent(content)
    }

    const sendContent = (content) => {
        const contentObj = {
            text: content,
            username: usermail.split('@')[0],
            date: new Date().toISOString(),
            dislike: 0,
            usersDislike: []
        }
        database().ref('messages/').push(contentObj)
    }

    const handleBanane = (item) => {
        const index = contentList.indexOf(item)
        const disliked = !!contentList[index].usersDislike ? contentList[index].usersDislike : []
        if (disliked.indexOf(usermail) === -1)
            database().ref(`messages/${item.id}/`)
                .update({ dislike: item.dislike + 1, usersDislike: disliked.concat(usermail) })
        else
            database().ref(`messages/${item.id}/`)
                .update({ dislike: item.dislike - 1, usersDislike: contentList[index].usersDislike.filter(users => users !== usermail) })

    }

    const renderMessageCard = ({ item }) => <MessageCard message={item} onBanane={() => handleBanane(item)} />

    return (
        <View style={styles.container} >
            <FlatList
                data={contentList}
                renderItem={renderMessageCard}
            />
            <FloatingButton iconName={'plus'} onPress={handleInputToggle} />
            <ContentInputModal isVisible={inputModalVisible} onClose={handleInputToggle} onSend={handleInputSend} />
        </View>
    )
}