import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { loadUsers } from "../api/users-api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [userLogged, setUserLogged] = useState([]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const signIn = async (email, password) => {
        setIsEmailError(false);
        setIsPasswordEmpty(false);

        if (!validateEmail(email)) {
            setIsEmailError(true);
            Alert.alert('E-mail inválido');
            return;
        }

        if (password.trim() === '') {
            setIsPasswordEmpty(true);
            return;
        }

        const loadData = async () => {
            try {
                const userData = await loadUsers();
                setUserLogged(userData);
                const foundUser = userData.find((user) => user.email === email);
                if (foundUser) {
                    setUser(foundUser);
                    navigation.navigate("menu");
                } else {
                    Alert.alert('Email ou senha incorretos');
                }
            } catch (error) {
                Alert.alert('Erro ao buscar dados de usuário:');
            }
        };
        loadData();
    };

    return (
        <AuthContext.Provider value={{ signIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
