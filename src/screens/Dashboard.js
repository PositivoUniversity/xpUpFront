import { useEffect, useState } from 'react';
import { Text } from 'react-native';
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
    console.log("Carreguei!!!!!")
    return (
        <DefaultPage>
            {news
                ? (
                    news.map((item) => {
                        const userData = users.find((user) => user.id === item.publishedBy)
                        
                        return NewsCard(item, userData.name)
                    })
                )
                : (<Text>Não existe dado para carregar...</Text>)}
        </DefaultPage>
    );
}
