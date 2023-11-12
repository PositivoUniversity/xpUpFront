import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import Logo from '../components/Logo';
import DefaultButton from '../components/DefaultButton';
import DefaultTextBox from '../components/DefaultTextBox';
import DefaultInput from '../components/DefaultInput';
import { createEvent } from '../../api/events-api';

export default function Events({ navigation }) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');

    const goToHome = () => {
        navigation.navigate('menu');
    };

    
    const sendEvent = () => {
        console.log('SendEvent:', 'Title:', title, 'Subtitle:',subtitle, 'Description:',description)
        sendEventData();
    };


    const sendEventData = async () => {
        
        
        console.log('SendEventData Pré Json: -----', 'Title:', title, 'Subtitle:',subtitle, 'Description:',description)
        try {
            const urlParams = {
                title: title,
                subtitle: subtitle,
                description: description,
                usersId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            console.log('SendEventData Pós Json: -----', 'Title:', title, 'Subtitle:', subtitle, 'Description:', description, 'UserID:', urlParams.usersId, 'Data de Criacao:', urlParams.createdAt, 'Data de Update:', urlParams.updatedAt)
            console.log(urlParams)
            await createEvent(urlParams);
        } catch (error) {
            console.error('Error creating event in Events.js:', error);
            throw error;
        }
    };

    return (
        <DefaultPage>
            <View style={styles.container}>
                <Logo />

                <View style={styles.containerInput}>
                    <Text style={styles.title}>Criação de Eventos</Text>

                    <DefaultInput
                        label="Titulo"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <DefaultInput
                        label="Subtitulo"
                        value={subtitle}
                        onChangeText={setSubtitle}
                    />

                    <DefaultInput
                        label="Descricao"
                        value={description}
                        onChangeText={setDescription}
                    />

                    <DefaultButton
                        text="Concluir Criação"
                        onPress={sendEvent}
                        styleButton={styles.btn}
                        styleText={styles.btnText}
                    />
                </View>
            </View>
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30,
    },
    containerInput: {
        height: 200,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140,
    },
    title: {
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#A101FE',
        height: 45,
        width: '60%',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    haveAccount: {
        color: '#FCA311',
        marginTop: 10,
        fontSize: 14,
    },
});
