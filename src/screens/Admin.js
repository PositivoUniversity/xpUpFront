import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import DefaultPage from '../components/DefaultPage';
import DefaultDataTable from '../components/DefaultDataTable';
import { loadUsers } from '../../api/users-api';

export default function Admin() {
    const [data, setData] = useState([]);
    const [isFABOpen, setFABOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUsers();
                setData(userData);
            } catch (error) {
                console.error('Erro ao buscar dados de usuário:', error);
            }
        };
        loadData();
    }, []);

    const collums = ['Nome', 'Email', 'Regra'];
    const cellData = {
        Nome: 'name',
        Email: 'email',
        Regra: 'role',
    };

    return (
        <DefaultPage>
            {data && data.length > 0 ? (
                <DefaultDataTable
                    actions={() => null}
                    textAction={'Ações'}
                    cellData={cellData}
                    columnNames={collums}
                    data={data}
                    textStyle={styles.styleText}
                />
            ) : (
                <Text>Nenhum usuário</Text>
            )}
            <FAB.Group
                open={isFABOpen}
                icon={data && data.length > 0 ? 'account' : 'plus'}
                actions={[
                    { icon: 'pencil', label: 'Editar Usuário', onPress: () => console.log('Editar Usuário Pressionado'), labelStyle: { color: 'white' } },
                    { icon: 'plus', label: 'Criar Novo Usuário', onPress: () => console.log('Criar Novo Usuário Pressionado'), labelStyle: { color: 'white' } },
                    { icon: 'eye', label: 'Ver Todos os Usuários', onPress: () => console.log('Ver Todos os Usuários Pressionado'), labelStyle: { color: 'white' } },
                ]}
                onStateChange={({ open }) => setFABOpen(open)}
                theme={{ colors: { background: 'transparent' } }}
            />
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    styleText: {
        color: 'white',
    },
});
