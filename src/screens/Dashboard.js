import React, { useContext } from 'react';
import { Text } from 'react-native';
import DefaultPage from "../components/DefaultPage";
import { AuthContext } from '../../contexts/auth'

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <DefaultPage>
            <Text style={{ color: 'white' }}>Olá {user.name}</Text>
        </DefaultPage>
    );
}
