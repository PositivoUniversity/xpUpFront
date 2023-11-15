import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import DefaultPage from "../components/DefaultPage";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false); 
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
      const handleLogin = () => {
        setIsEmailError(false);
        setIsPasswordEmpty(false);
    
        if (!validateEmail(email)) {
          setIsEmailError(true);
          setEmailErrorMessage('E-mail inválido');
          return;
        }
    
        if (password.trim() === '') {
          setIsPasswordEmpty(true);
          return;
        }
    
        navigation.navigate('menu');
      };    

    const goToRegister = () => {
        navigation.navigate('register');
    }

    const goToRecovery = () => {
        navigation.navigate('recovery');
    }

    return (
        <DefaultPage>
            <View style={styles.container}>
                <Logo/>

                <Text style={styles.nameApp}> XP UP </Text>

                <View style={styles.containerFormLogin}>
                    <DefaultInput label="Email" 
                        value={email}
                        onChangeText={setEmail}
                    />

                    <DefaultInput label="Senha" 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.rememberPassword}>
                    <DefaultButton text="Esqueceu a senha?"
                        onPress={goToRecovery}
                        styleText={styles.btnRecoveryPassword}
                    />
                </View>

                <DefaultButton text="Entrar"
                    onPress={handleLogin}
                    styleButton={styles.btnLogin}
                    styleText={styles.btnLoginText}
                />
            </View>

            <View style={styles.containerSignIn}>
                <Text style={styles.textSignIn}> Não possui conta? </Text>
            
                <DefaultButton text=" Cadastre-se"
                            onPress={goToRegister}
                            styleButton={styles.btnSignIn}
                            styleText={styles.btnTextSignIn}
                />
            </View>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    nameApp: {
        color: '#FCA311',
        fontSize: 60,
        height: 70,
        fontWeight: 'bold',
        marginBottom: 20
    },
    containerFormLogin: {
        height: 90,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    rememberPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '78%',
        marginTop: 30
    },
    containerSignIn:{
        flexDirection: 'column',
        padding: 46,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    textSignIn: {
        color: '#d5d5d5',
        fontSize: 14
    },
    btnRecoveryPassword: {
        color: '#FCA311',
        fontSize: 14
    },
    btnLogin: {
        backgroundColor: '#A101FE',
        height: 60,
        width: '80%',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLoginText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    btnSignIn: {
        backgroundColor: '#1A1818',
        height: 60,
        width: '30%'
    },
    btnTextSignIn: {
        color: '#FCA311',
        fontSize: 14
    }
});
