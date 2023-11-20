import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import { AuthContext } from '../../contexts/auth';
import { deleteEvent, getEvents } from '../../api/events-api';
import DefaultEvent from '../components/DefaultEvent';
import { ActivityIndicator } from 'react-native-paper';

export default function Events({ route }) {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEventsData = async () => {
      try {
        const response = await getEvents();
        const updatedEvents = route.params?.newEvent
          ? [route.params.newEvent, ...response].filter(
            (event, index, self) => index === self.findIndex((e) => e.id === event.id)
          )
          : response;

        setEvents(updatedEvents);
      } catch (error) {
        console.error('Erro ao carregar eventos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEventsData();
  }, [route.params?.newEvent]);

  const sendDeleteData = async (item) => {
    try {
      await deleteEvent(item);
      loadEvents(); 
    } catch (error) {
      console.error('Erro ao deletar Evento no Dashboard.js. ', error);
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

  if (isLoading) {
    return (
      <DefaultPage>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="purple" />
          <Text style={styles.loadingText}>Carregando Eventos...</Text>
        </View>
      </DefaultPage>
    );
  }

  return (
    <DefaultPage>
      <ScrollView key={route.params?.newEvent ? 'withNewEvent' : 'withoutNewEvent'}>
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
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Não há eventos disponíveis.</Text>
          </View>
        )}
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
});
