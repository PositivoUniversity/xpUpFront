import React from "react";
import {
    SafeAreaView,
    TextInput,
    View,
} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'adm' && password === 'adm') {
            alert('Login realizado com sucesso!');
            navigation.navigate('home');
        } else {
            alert('Email ou senha incorretos!');
        }
    }

    const goToRegister = () => {
        navigation.navigate('register');
    }

    const goToForgotPassword = () => { // TODO:    INMPLEMENTAR DEPOIS A LOGICA PARA ESTA TELA
        alert('Ainda não temos essa tela');
    }

    return (
        <SafeAreaView style={
            {
                backgroundColor: '#1A1818',
                height: '100%'
            }
        }>
            <View style={
                {
                    alignItems: 'center',
                    marginTop: 120
                }
            }>
                <Logo/>
                <View style={
                    {
                        height: 150,
                        width: '80%',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20
                    }
                }>
                    <TextInput value={email}
                        onChangeText={setEmail}
                        style={
                            {
                                backgroundColor: 'whitesmoke',
                                height: 50,
                                width: '80%',
                                borderRadius: 10,
                                padding: 10,
                                marginBottom: 15
                            }
                        }
                        placeholder="Email"/>

                    <TextInput value={password}
                        onChangeText={setPassword}
                        style={
                            {
                                backgroundColor: 'whitesmoke',
                                height: 50,
                                width: '80%',
                                borderRadius: 10,
                                padding: 10
                            }
                        }
                        placeholder="Senha"
                        secureTextEntry={true}/>
                </View>

                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '60%',
                        marginTop: 20
                    }
                }>
                    <DefaultButton text="Cadastre-se"
                        onPress={goToRegister}
                        styleText={
                            {
                                color: '#fff',
                                fontSize: 14
                            }
                        }/>
                    <DefaultButton text="Esqueceu a senha?"
                        onPress={goToForgotPassword}
                        styleText={
                            {
                                color: '#fff',
                                fontSize: 14
                            }
                        }/>
                </View>

                <DefaultButton text="Entrar"
                    onPress={handleLogin}
                    styleButton={
                        {
                            backgroundColor: '#A101FE',
                            height: 45,
                            width: '60%',
                            borderRadius: 10,
                            marginTop: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }
                    styleText={
                        {
                            color: '#fff',
                            fontSize: 18
                        }
                    }/>
            </View>
        </SafeAreaView>
    )
}
