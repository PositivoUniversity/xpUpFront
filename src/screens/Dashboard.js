import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import { AuthContext } from '../../contexts/auth';
import { deleteEvent, getEvents } from '../../api/events-api';
import { getNews } from '../../api/news-api';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultEvent from '../components/DefaultEvent';

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    const [events, setEvents] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadEvents();
        loadNews();
    }, []);

    const sendDeleteData = async (item) => {
        try {
            await deleteEvent(item);

        } catch (error) {
            console.error('Erro ao deletar Evento no Dashboard.js. ', error);
        } finally {
            loadNews();
            loadEvents();
        }
    };

    const loadEvents = async () => {
        try {
            const response = await getEvents();
            setEvents(response);
        } catch (error) {
            console.error('Erro ao carregar eventos:', error);
        }
    };

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

            <ScrollView>
                {events.length > 0 ? (
                    events.map((item) => (
                        <DefaultEvent
                            sendDeleteData={sendDeleteData}
                            sendLikeData={() => true}
                            sendCheckinData={() => true}
                            key={item.id}
                            events={[item]}
                        />
                    ))
                ) : (
                    <Text>No events available.</Text>
                )}
            </ScrollView>
        </DefaultPage>
    );
}
