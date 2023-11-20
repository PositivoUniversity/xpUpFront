import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNews } from '../../api/news-api';
import { AuthContext } from '../../contexts/auth';
import DefaultButton from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import DefaultPage from '../components/DefaultPage';
import DefaultTextBox from '../components/DefaultTextBox';
import Logo from '../components/Logo';

export default function CreateNews({ navigation }) {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const clearData = () => {
    setTitle('');
    setSubtitle('');
    setDescription('');
  }

  const goToHome = async () => {
    navigation.navigate('home');
  };

  const register = async () => {
    try {
      const urlParams = {
            title: title,
            subtitle: subtitle,
            description: description,
            publishedBy: user.id,
            createdAt: new Date(),
            updatedAt: new Date()
        };
      await createNews(urlParams);
      clearData();
      await goToHome();

    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
  };

    return (
      <DefaultPage>
        <View style={styles.container}>
          <Logo />

          <View style={styles.containerInput}>
            <Text style={styles.title}>Cadastro Notícia</Text>

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
              text="Cadastrar"
              onPress={register}
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
    color: '#FCA311',
    fontWeight: 'bold',
    fontSize: 35,
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