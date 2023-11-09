import DefaultPage from "../components/DefaultPage";
import { StyleSheet } from "react-native";
import DefaultDataTable from "../components/DefaultDataTable";
import { loadUsers } from "../../api/users-api";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Admin() {


    const customActions = () => {
        return <Text style={styles.styleText} onClick={() => console.log(`Clicou`)}>aqui</Text>;
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUsers();
                setData(userData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        loadData();
    }, []);
    const collums = ['Nome', 'Email', 'Regra',];
    const cellData = {
        Nome: 'email',
        Email: 'email',
        Regra: 'nat',
    };
    return (
        <DefaultPage>
            {data.results && data.results.length > 0 ? (
                <DefaultDataTable actions={customActions} textAction={'Ações'} cellData={cellData} columnNames={collums} data={data.results} textStyle={styles.styleText} />
            ) : (
                <Text>Carregando dados...</Text>

            )}
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    styleText: {
        color: 'white',
    },
})
