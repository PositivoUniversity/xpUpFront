import {Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultPage from "../components/DefaultPage";
import DefaultInput from "../components/DefaultInput";

export default function Register({navigation}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleRegister = () => {
        if (!firstName || !lastName || !email || !password || !passwordConfirm) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== passwordConfirm) {
            alert('As senhas não correspondem.');
            return;
        }

        navigation.navigate('menu');
    };


    const goToLogin = () => {
        navigation.navigate('login');
    }

    return (
        <DefaultPage>
            <View style={styles.container}>
                <Logo/>

                <View style={styles.containerInput}>
                    <Text style={styles.title}>Cadastro</Text>

                    <DefaultInput label="Nome"
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    <DefaultInput label="Sobrenome"
                        value={lastName}
                        onChangeText={setLastName}
                    />

                    <DefaultInput label="Email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <DefaultInput label="Senha" 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                    <DefaultInput label="Confirmar Senha" 
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        secureTextEntry={true}
                    />
                    
                    <DefaultButton text="Concluir Cadastro"
                        onPress={handleRegister}
                        styleButton={styles.btn}
                        styleText={styles.btnText}
                    />

                    <DefaultButton text="Já possui conta?"
                        onPress={goToLogin}
                        styleText={styles.haveAccount}
                    />
                </View>
            </View>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30
    },
    containerInput: {
        height: 200,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140
    },
    title: {
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#A101FE',
        height: 45,
        width: '60%',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18
    },
    haveAccount: {
        color: '#FCA311',
        marginTop: 10,
        fontSize: 14
    }
})