import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import DefaultButton from '../components/DefaultButton';
import DefaultTextBox from '../components/DefaultTextBox';
import DefaultInput from '../components/DefaultInput';
import { createEvent } from '../../api/events-api';
import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react';

export default function Events({ navigation }) {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');

    const goToHome = async () => {
        navigation.navigate('dashboard');
    };
    const sendEvent = () => {
        sendEventData();
    };
    const getUserId = () => {
      getUserId();
    };
    const sendEventData = async () => {
        try {
            const urlParams = {
                title: title,
                subtitle: subtitle,
                description: description,
                usersId: user.id,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            await createEvent(urlParams);
            await goToHome();
        } catch (error) {
            console.error('Error creating event in Events.js:', error);
            throw error;
        }
    };
    return (
        <DefaultPage>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <View style={styles.container}>
              <View style={styles.containerLogo}>
                <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
              </View>
    
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
    
                <DefaultTextBox
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
          </KeyboardAvoidingView>
        </DefaultPage>
      );
    
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        flex: 1
    },
    logo: {
        width: 50,
        height: 50,
        paddingTop: 0,
        resizeMode: 'contain'
    },
    containerLogo: {
      paddingTop: 0,
        marginBottom: 0,
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
        fontSize: 20,
        marginBottom: 0,
    },
    btn: {
        backgroundColor: '#A101FE',
        height: 45,
        width: '60%',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 50,
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