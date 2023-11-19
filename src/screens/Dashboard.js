import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import { AuthContext } from '../../contexts/auth';
import { getNews } from '../../api/news-api';

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        try {
            const response = await getNews();
            setNews(response);
        } catch (error) {
            console.error('Erro ao carregar notícias:', error);
        }
    };

    return (
        <DefaultPage>
            <Text style={{ color: 'white' }}>Olá {user.name}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Notícias</Text>
                <FlatList
                    data={news}
                    renderItem={({ item }) => (
                        <Text style={{ color: 'white' }}>
                            {[item.title, item.subtitle, item.description, item.likes, item.checkins]}
                        </Text>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </DefaultPage>
    );
}
