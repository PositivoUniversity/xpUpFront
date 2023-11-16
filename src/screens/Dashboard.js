import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import DefaultEvent from "../components/DefaultEvent";
import { getEvent, deleteEvent } from '../../api/events-api';


export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        
        const eventData = await getEvent();
        console.log(eventData);
        setEvents(eventData);
      } catch (error) {
        console.error('Erro ao buscar dados de Evento:', error);
      }
    };
    loadData();
  }, []);
  const sendLikeData = async (item) => {
    try {
      //await likeEvent();
      console.log("Like enviado para evento de id: " + item)
    } catch (error) {
      console.error('Erro ao dar Like no Evento no Dashboard.js. ', id, error);
    }
  };
  const sendCheckinData = async (item) => {
    try {
      //await checkinEvent();
      console.log("Checkin enviado para evento de id: " + item)
    } catch (error) {
      console.error('Erro ao dar Checkin no Evento no Dashboard.js. ', id, error);
    }
  };
  // const sendUserName = async (item) => {
  //   try {
  //     //await checkinEvent();
  //     console.log("Checkin enviado para evento de id: " + item.userId)
  //   } catch (error) {
  //     console.error('Erro ao dar Checkin no Evento no Dashboard.js. ', id, error);
  //   }
  // };
  const sendDeleteData = async (item) => {
    console.log(item)
    try {
      await deleteEvent(item);

      console.log('Evento deletado com sucesso no Dashboard.js.');
    } catch (error) {
      console.error('Erro ao deletar Evento no Dashboard.js. ', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
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
