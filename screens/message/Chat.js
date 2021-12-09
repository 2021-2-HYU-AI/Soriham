import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { AntDesign } from '@expo/vector-icons';
import {
    collection,
    addDoc,
} from 'firebase/firestore';
import { database } from '../../config/firebase';

function Chat({navigation: {goBack}}) {
    const [messages, setMessages] = useState([]);
    
    const onSend = useCallback((messages = []) => {
        // console.log('previousMessages: ',previousMessages)
        console.log('messages:', messages)
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const { text, createdAt } = messages[0];
        addDoc(collection(database, 'chats'), {
            text,
            createdAt,
        });
    }, [])
    return (
        <View style={{ flex: 1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>메세지 남기기</Text>
            </View>
        <GiftedChat
            placeholder={'메세지를 입력하세요...'}
            alwaysShowSend={true}
            messages={messages}
            textInputProps={{ keyboardAppearance: 'dark', autoCorrect: false }}
            onSend={messages => onSend(messages)}
        />
        </View>
        
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 5,
    }
});
export default Chat;
