import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import DefaultPage from '../components/DefaultPage';
import { AuthContext } from '../../contexts/auth';
import { deleteEvent, getEvents } from '../../api/events-api';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultEvent from '../components/DefaultEvent';

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