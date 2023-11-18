import { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { getLikes } from '../../api/likes-api';
import { getNews } from '../../api/news-api';
import { loadUsers } from '../../api/users-api';
import DefaultPage from "../components/DefaultPage";
import NewsCard from '../components/NewsCard';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUsers();
                console.log("Usuarios: ", userData)
                console.log("--------------------------------")
                setUsers(userData);
            } catch (error) {
                console.error('Erro ao buscar dados de usuário:', error);
            }
        };
        loadData();
    }, []);

    const [news, setNews] = useState([]);
    useEffect(() => {
        const loadNewsData = async () => {
            try {
                const newData = await getNews();
                console.log("Noticias: ", newData)
                console.log("--------------------------------")
                setNews(newData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        loadNewsData();
    }, []);

    const [likes, setLikes] = useState([]);
    useEffect(() => {
        const loadLikesData = async () => {
            try {
                const likesData = await getLikes();
                console.log("Likes: ", likesData)
                console.log("--------------------------------")
                setLikes(likesData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        loadLikesData();
    }, []);
    console.log("Carreguei!!!!!")
    return (
        <DefaultPage>
            <ScrollView>
                {news
                    ? (
                        news.map((item) => {
                            const userData = users.find((user) => user.id === item.publishedBy)
                            const newsLikes = likes.filter((like) => like.NoticeId === item.id)
                            return NewsCard(item, userData.name, newsLikes)
                        })
                    )
                    : (<Text>Não existe dado para carregar...</Text>)
                }
            </ScrollView>
        </DefaultPage>
    );
}
