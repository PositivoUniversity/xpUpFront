import React from "react";
import {SafeAreaView, View, Text} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //TODO: IMPLEMENTAR LOGICA DE LOGIN
    const handleLogin = () => {
        //if (email === 'adm' && password === 'adm') {
            navigation.navigate('home');
        //} else {
        //    alert('Email ou senha incorretos!');
        //}
    }

    const goToRegister = () => {
        navigation.navigate('register');
    }

    const goToRecovery = () => { // TODO:    INMPLEMENTAR DEPOIS A LOGICA PARA ESTA TELA
        navigation.navigate('recovery');
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
                    marginTop: 50
                }
            }>
                <Logo/>

                <Text style={
                    {
                        color: '#FCA311',
                        fontSize: 60,
                        height: 70,
                        fontWeight: 'bold',
                        marginBottom: 20
                    }
                }>
                    XP UP
                </Text>

                <View style={
                    {
                        height: 90,
                        width: '80%',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40
                    }
                }>
                    
                    <DefaultInput label="Email"
                        //TODO: LOGICA PRA LOGAR
                    />

                    <DefaultInput label="Senha" 
                        //TODO: LOGICA PRA LOGAR
                    />
                </View>

                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '78%',
                        marginTop: 30
                    }
                }>
                    <DefaultButton text="Esqueceu a senha?"
                        onPress={goToRecovery}
                        styleText={
                            {
                                color: '#FCA311',
                                fontSize: 14
                            }
                        }/>
                </View>

                <DefaultButton text="Entrar"
                    onPress={handleLogin}
                    styleButton={
                        {
                            backgroundColor: '#A101FE',
                            height: 60,
                            width: '80%',
                            borderRadius: 10,
                            marginTop: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }
                    styleText={
                        {
                            color: '#fff',
                            fontSize: 22,
                            fontWeight: 'bold'
                        }
                    }/>
            </View>

            <View style={
                {
                    flexDirection: 'column',
                    padding: 46,
                    marginTop: 10,
                    justifyContent: 'space-between',
                }
            }>
            <Text style={
                    {
                        color: '#d5d5d5',
                        fontSize: 14
                    }
                }> Não possui conta? </Text>
        
            <DefaultButton text=" Cadastre-se"
                        onPress={goToRegister}
                        styleButton={
                            {
                                backgroundColor: '#1A1818',
                                height: 60,
                                width: '30%',
                            }
                        }
                        styleText={
                            {
                                color: '#FCA311',
                                fontSize: 14
                            }
                        }/>
            </View>
        </SafeAreaView>
    )
}
