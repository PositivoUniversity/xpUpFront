import React, { useContext, useState, useEffect } from 'react';

import DefaultEvent from "../components/DefaultEvent";
import { AuthContext } from '../../contexts/auth'
import { StyleSheet, ScrollView, Text } from 'react-native';
import { getEvent, deleteEvent } from '../../api/events-api';
import { createLike, deleteLike, getLikes } from '../../api/likes-api';


export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  


  useEffect(() => {
    const loadEventsDetails = async () => {
      try {
        const loadedEvents = await getEvent();
        setEvents(loadedEvents);
      } catch (error) {
        console.error('Error ao carregar dados de eventos:', error);
      }
    };
    loadEventsDetails();
  }, []);

  

  const sendLikeData = async (liked, id, eventObj) => {
    if (liked) {
      try {
        const urlParams = {
          like: liked,
          likedByUserId: user.id,
          noticeId: null,
          eventId: id,
        };
        console.log("Like registrado com sucesso.");
        // await createLike(urlParams);
      } catch (error) {
        console.error('Erro ao dar Like no Evento no Dashboard.js. ', liked, id, error);
      }
    } else {
      try {
        const likes = await getLikes();
  
        // Encontra o like com base no eventObj
        const foundLike = likes.find((item) => item.eventId === id);
        console.log('Found Like:', foundLike);
  
        if (foundLike) {
          console.log('Like encontrado:', foundLike);
          if (foundLike.likedByUserId === user.id) {
            // Restante do código...
          } else {
            console.log('Não foi encontrado um like correspondente para deletar.');
          }
        } else {
          console.log('Nenhum like encontrado para o evento fornecido.');
        }
      } catch (error) {
        console.error('Erro ao dar Like no Evento no Dashboard.js.', error);
      }
    }
  };
  
  
  

  const sendCheckinData = async (events) => {
    try {
      //await checkinEvent();
      console.log("Checkin enviado para evento de id: " + events)
    } catch (error) {
      console.error('Erro ao dar Checkin no Evento no Dashboard.js. ', events, error);
    }
  };
  const sendDeleteData = async (item) => {
    try {
      await deleteEvent(item);

      console.log('Evento deletado com sucesso no Dashboard.js.');
    } catch (error) {
      console.error('Erro ao deletar Evento no Dashboard.js. ', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text>Olá, {user.name}</Text>
      {events.length > 0 ? (
        events.map((item) => (
          <DefaultEvent
            key={item.id}
            events={[item]}
            sendDeleteData={sendDeleteData}
            sendLikeData={sendLikeData}
            sendCheckinData={sendCheckinData}
          />
        ))
      ) : (
        <Text>No events available.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#1A1818',
    padding: 10,
  },
    itemContainer: {
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
      itemId: {
        fontSize: 5,
        color: 'white'
      },
      itemTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      },
      itemSubtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      itemDescription: {
        color: 'gray',
        fontSize: 10,
        fontWeight: 'bold',
      },
      itemText: {
        padding: 10,
        paddingBottom: 0,
      },
      featherCalendar: {
        color: 'blue',
      },
      featherHeart: {
        color: 'red',
      },
      featherDelete: {
        color: 'white',
      }
  });