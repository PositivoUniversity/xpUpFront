import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import { AuthContext } from '../../contexts/auth';
import { getEvents } from '../../api/events-api';
import { getNews } from '../../api/news-api';

export default function Dashboard({ route }) {
  const { user } = useContext(AuthContext);

  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadEvents();
    loadNews();
    handleEventCreation(route.params?.newEvent);
  }, [route.params?.newEvent]);

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

  const handleEventCreation = (newEvent) => {
    if (newEvent) {
      setEvents((prevEvents) => [newEvent, ...prevEvents]);
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white' }}>Eventos</Text>
        <FlatList
          data={events}
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