import { SafeAreaView, TextInput, Text } from "react-native";
import styles from "../styles";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email === 'adm' && password === 'adm'){
            alert('Login realizado com sucesso!');
            navigation.navigate('Dashboard');
        }else{
            alert('Email ou senha incorretos!');
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.containerLogin}>
                <SafeAreaView style={styles.containerInput}>
                    <TextInput value={email} onChangeText={setEmail} style={styles.inputEmail} placeholder="Email" />
                    <TextInput value={password} onChangeText={setPassword} style={styles.inputPassword} placeholder="Senha" secureTextEntry={true}/>
                </SafeAreaView >

                <SafeAreaView style={styles.remenberPasswordAndSignIn}>
                    <Text style={styles.remenberPassword}>Esqueceu a senha?</Text>
                    <Text style={styles.signIn}>Cadastre-se</Text>
                </SafeAreaView>

                    <SafeAreaView style={styles.containerButton}>
                        <Text style={styles.btn} onPress={handleLogin}>Entrar</Text>
                    </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}