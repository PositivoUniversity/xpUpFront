import { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { getNews } from '../../api/news-api';
import { loadUsers } from '../../api/users-api';
import { AuthContext } from '../../contexts/auth';
import DefaultNewsCard from '../components/DefaultNewsCard';
import DefaultPage from "../components/DefaultPage";

export default function Dashboard({ route }) {
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState([]);
    const [news, setNews] = useState([]);
    const [likes, setLikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersData, newsData] = await Promise.all([
                    loadUsers(),
                    getNews(),
                ]);

                setUsers(usersData);
                setNews(newsData);

                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <DefaultPage>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Olá,  {user.name}</Text>
            <ScrollView>

                {isLoading
                    ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="purple" />
                            <Text style={styles.loadingText}>Carregando Notícias...</Text>
                        </View>
                    )
                    : news
                        ? (news.map((item) => {
                            const userData = users.find((userItem) => item.publishedBy === userItem.id);

                            return <DefaultNewsCard key={item.id} data={item} userName={userData ? userData.name : "Usuário Desconhecido"} />
                        }))
                        : (<Text>Não existe dado para carregar...</Text>)
                }
            </ScrollView>
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    loadingText: {
        color: 'white',
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
