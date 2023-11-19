import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { getLikes } from '../../api/likes-api';
import { getNews } from '../../api/news-api';
import { loadUsers } from '../../api/users-api';
import DefaultPage from "../components/DefaultPage";
import NewsCard from '../components/NewsCard';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [news, setNews] = useState([]);
    const [likes, setLikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const [usersData, newsData, likesData] = await Promise.all([
              loadUsers(),
              getNews(),
              getLikes()
            ]);
              
            setUsers(usersData);
            setNews(newsData);
            setLikes(likesData);
    
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };
    
        fetchData();
    }, []);
    
    console.log("Carreguei!!!!!")
    return (
        <DefaultPage>
            <ScrollView>
                {isLoading
                    ?   (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="purple" />
                                <Text style={styles.loadingText}>Carregando Notícias...</Text>
                            </View>
                        )
                    :   news
                        ? (news.map((item) => {
                                const userData = users.find((userItem) => item.publishedBy === userItem.id);
                                const newsLikes = likes.filter((like) => like.NoticeId === item.id);
                            
                                return NewsCard(item, userData ? userData.name : "Usuário Desconhecido", newsLikes);
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