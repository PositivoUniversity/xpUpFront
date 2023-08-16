import { SafeAreaView, TextInput, Text, View } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email === 'adm' && password === 'adm'){
            alert('Login realizado com sucesso!');
            navigation.navigate('home');
        }else{
            alert('Email ou senha incorretos!');
        }
    }
    return(
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
                        } placeholder="Senha" secureTextEntry={true}/>
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

                        <View style={
                            {
                                backgroundColor: '#A101FE',
                                height: 40,
                                width: '55%',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10,
                            }
                        }>

                            <Text style={
                                {
                                    color: 'whitesmoke',
                                    fontWeight: 'bold',
                                    borderRadius: 10,
                                    padding: 10,
                                }
                            } onPress={handleLogin}>Entrar</Text>
                        </View>
                </View>
        </SafeAreaView>
    )
}