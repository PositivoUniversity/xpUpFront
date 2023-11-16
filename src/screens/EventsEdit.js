import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import DefaultButton from '../components/DefaultButton';
import DefaultTextBox from '../components/DefaultTextBox';
import DefaultInput from '../components/DefaultInput';
import { createEvent } from '../../api/events-api';

export default function Events({navigation}) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [usersId, setUsersId] = useState('');
    const [dataEditUser, setDataEditUser] = useState([]);

    const goToHome = () => {
        navigation.navigate('menu');
    }

    const handleEvents = () => {
        if (!title || !subtitle || !description) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        goToHome();
    };
    const handleEditEvent = (selectedEvent) => {
        setDataEditEvent(selectedEvent);
        setModalVisibleEdit(true);
        if (selectedEvent) {
            setFormState(selectedEvent);
        }
    }

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
                  text="Concluir Edição"
                  
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
        resizeMode: 'contain'
    },
    containerLogo: {
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
