import {
    SafeAreaView,
    TextInput,
    Text,
    View,
    Button
} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

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
                }><Text style={
                        {
                            backgroundColor: 'whitesmoke',
                            height: 50,
                            width: '80%',
                            borderRadius: 10,
                            padding: 10,
                            marginBottom: 15
                        }
                    }/>
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
                                marginBottom: 15
                            }
                        }
                        placeholder="Confirmar Senha"/>
                </View>

                <View style={
                    {
                        flexDirection: 'row',
                        display: 'flex'
                    }
                }>

                    <Text style={
                        {
                            color: 'whitesmoke',
                            fontWeight: 'bold',
                            fontSize: 15,
                            paddingLeft: 10
                        }
                    }>Cadastre-se</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}
