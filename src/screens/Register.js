import {SafeAreaView, TextInput, Text, View} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

export default function Register({navigation}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleRegister = () => {
        if (password === passwordConfirm && password != '') {
            alert('Cadastro realizado com sucesso.');
            navigation.navigate('home');
        } else {
            alert('Senhas não são identicas.');
        }
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
                    }>Cadastro</Text>

                    <TextInput value={firstName}
                        onChangeText={setFirstName}
                        style={
                            {
                                backgroundColor: 'whitesmoke',
                                height: 50,
                                width: '80%',
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 225,
                                marginBottom: 15
                            }
                        }
                        placeholder="Nome"/>

                    <TextInput value={lastName}
                        onChangeText={setLastName}
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
                        placeholder="Sobrenome"/>
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
                    <TextInput value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        style={
                            {
                                backgroundColor: 'whitesmoke',
                                height: 50,
                                width: '80%',
                                borderRadius: 10,
                                padding: 10,
                                marginTop: 15
                            }
                        }
                        placeholder="Confirmar Senha"/>
                    <DefaultButton text="Concluir Cadastro"
                        onPress={handleRegister}
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
