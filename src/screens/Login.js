import { SafeAreaView, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

export default function Login({ navigation }) {
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
    return (
        <SafeAreaView style={
            {
                backgroundColor: '#1A1818',
                height: '100%',
            }
        }>
            <View style={
                {
                    alignItems: 'center',
                    marginTop: 120,
                }
            }>
                <Logo />
                <View style={
                    {
                        height: 150,
                        width: '80%',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                    }
                }>
                    <TextInput value={email} onChangeText={setEmail} style={
                        {
                            backgroundColor: 'whitesmoke',
                            height: 50,
                            width: '80%',
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 15,
                        }
                    } placeholder="Email" />

                    <TextInput value={password} onChangeText={setPassword} style={
                        {
                            backgroundColor: 'whitesmoke',
                            height: 50,
                            width: '80%',
                            borderRadius: 10,
                            padding: 10,
                        }
                    } placeholder="Senha" secureTextEntry={true} />
                </View >

                <View style={
                    {
                        flexDirection: 'row',
                        display: 'flex',
                    }
                }>
                    <Text style={
                        {
                            color: 'whitesmoke',
                            fontWeight: 'bold',
                            fontSize: 15,
                            justifyContent: 'space-between',
                        }
                    }>Esqueceu a senha?</Text>

                    <Text style={
                        {
                            color: 'whitesmoke',
                            fontWeight: 'bold',
                            fontSize: 15,
                            paddingLeft: 10,
                        }
                    }>Cadastre-se</Text>
                </View>

                <DefaultButton 
                    text="Entrar" 
                    onPress={handleLogin} 
                    styleButton={
                        {
                            backgroundColor: '#A101FE',
                            height: 45,
                            width: '60%',
                            borderRadius: 10,
                            marginTop: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                    styleText={
                        {
                            color: '#fff',
                            fontSize: 18,
                        }
                    }
                    />
            </View>
        </SafeAreaView>
    )
}
