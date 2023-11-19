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

  useEffect(() => {
    loadEvents();
  }, [route.params?.newEvent]);

  const sendDeleteData = async (item) => {
    try {
      await deleteEvent(item);
    } catch (error) {
      console.error('Erro ao deletar Evento no Dashboard.js. ', error);
    } finally {
      loadEvents();
    }
  };

  const loadEvents = async () => {
    try {
      const response = await getEvents();
      const updatedEvents = route.params?.newEvent
        ? [...response, route.params.newEvent].filter(
          (event, index, self) =>
            index === self.findIndex((e) => e.id === event.id)
        )
        : response;
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
    }
  };

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
            <ActivityIndicator size="large" color="purple" />
            <Text style={styles.loadingText}>Carregando Eventos...</Text>
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
