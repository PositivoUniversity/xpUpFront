import { default as React, default as React, useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { loadNews } from '../../api/news-api';
import { AuthContext } from '../../contexts/auth';
import DefaultPage from "../components/DefaultPage";
import NewsCard from '../components/NewsCard';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadNewsData = async () => {
            try {
                const newData = await loadNews();
                setData(newData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        loadNewsData();
    }, []); 

    return (
        <DefaultPage>
            {data
                ? (data.map((item) => NewsCard(item)))
                : (<Text>Não existe dado para carregar...</Text>)}
        </DefaultPage>
    );
}
