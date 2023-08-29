import React from "react";
import {SafeAreaView, TextInput, Text, View} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

export default function Recovery({navigation}) {
    const [email, setEmail] = useState('');

    const handleRecovery = () => {
        alert('Instruções de Recuperação de Senha enviados para o Email fornecido.');
    }

    const goToLogin = () => {
        navigation.navigate('login');
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
                    <Text style={
                        {
                            color: 'whitesmoke',
                            fontWeight: 'bold',
                            fontSize: 30
                        }
                    }>Recuperação de Senha</Text>
                    <Text style={
                        {
                            color: 'whitesmoke',
                            fontWeight: 'bold',
                            fontSize: 10
                        }
                    }>Informe o Email da Conta</Text>

                    <TextInput value={email}
                        onChangeText={setEmail}
                        style={
                            {
                                backgroundColor: 'whitesmoke',
                                height: 50,
                                width: '80%',
                                borderRadius: 10,
                                padding: 10,
                                marginBottom: 10,
                                marginTop: 15
                            }
                        }
                        placeholder="Email"/>

                    <DefaultButton text="Recuperar Senha"
                        onPress={handleRecovery}
                        styleButton={
                            {
                                backgroundColor: '#A101FE',
                                height: 45,
                                width: '60%',
                                borderRadius: 10,
                                marginTop: 10,
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
                    <DefaultButton text="Já possui conta?"
                        onPress={goToLogin}
                        styleText={
                            {
                                color: '#fff',
                                marginTop: 10,
                                fontSize: 14
                            }
                        }/>
                </View>

                <View style={
                    {
                        flexDirection: 'row',
                        display: 'flex'
                    }
                }></View>


            </View>

        </SafeAreaView>

    )
}
