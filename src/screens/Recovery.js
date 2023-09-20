import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultPage from "../components/DefaultPage";
import DefaultInput from "../components/DefaultInput";

export default function Recovery({navigation}) {
    const [email, setEmail] = useState('');

    const handleRecovery = () => {
        alert('Instruções de Recuperação de Senha enviados para o Email fornecido.');
    }

    const goToLogin = () => {
        navigation.navigate('login');
    }

    return (
        <DefaultPage>
            <View style={styles.container}>
                <Logo/>
                <View style={styles.containerInput}>
                    <Text style={styles.title}>Recuperação de Senha</Text>
                    <Text style={styles.subtitle}>Informe o Email da Conta</Text>

                    <DefaultInput label="Email" />

                    <DefaultButton text="Recuperar Senha"
                        onPress={handleRecovery}
                        styleButton={styles.btn}
                        styleText={styles.btnText}/>
                    <DefaultButton text="Já possui conta?"
                        onPress={goToLogin}
                        styleText={styles.haveAccount}/>
                </View>
            </View>

        </DefaultPage>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 120
    },
    containerInput: {
        height: 150,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    title: {
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitle: {
        color: '#FCA311',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#A101FE',
        height: 45,
        width: '60%',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
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