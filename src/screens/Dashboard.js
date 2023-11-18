import React, { useContext, useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, Alert } from 'react-native';
import DefaultEvent from "../components/DefaultEvent";
import { AuthContext } from '../../contexts/auth'

import { getEvent, deleteEvent } from '../../api/events-api';
import { createLike, deleteLike, getLikes, editLike } from '../../api/likes-api';
import { createCheckin, deleteCheckin, getCheckin } from '../../api/checkin-api';


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

  const checkExistingLike = async (userId, eventId) => {
    try {
      const likes = await getLikes(userId, eventId);
      console.log(likes, "likes")
      return likes;
    } catch (error) {
      console.log('Erro ao checar se usuário já curtiu o evento no Dashboard.js. ', error);
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

  const sendLikeData = async (liked, id, item) => {
    try {
      const existingLike = await checkExistingLike(user.id, id);

      if (!liked && !existingLike) {
        const urlParams = {
          like: true,
          likedByUserId: user.id,
          noticeId: null,
          eventId: id,
        };

        await createLike(urlParams);
      } else {
        console.log("Usuário já curtiu este evento.");
        // console.log(item, "item")
        await editLike(id, false);

      }
    } catch (error) {
      Alert.alert('Erro ao dar Like no Evento no Dashboard.js. ', error);
    }
  };
  
  const checkExistingCheckin = async (userId, eventId) => {
    try {
      const checkins = await getCheckin(userId, eventId);
      console.log(checkins, "checkins")
      return checkins;
    } catch (error) {
      console.log('Erro ao checar se usuário já curtiu o evento no Dashboard.js. ', error);
    }
  };
  

  const sendCheckinData = async (checked, id, item) => {
    try {
      console.log("id no sendCheckinData: " + id)
      const existingCheckin = await checkExistingCheckin(user.id, id);

      if (checked && existingCheckin) {
        const urlParams = {
          check: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          checkedBy: user.id,
          eventId: id,
        };

        await createCheckin(urlParams);
      } else {
        console.log("Usuário já curtiu este evento.");
        // console.log(item, "item")
        //await deleteCheckin(item.id);

      }
    } catch (error) {
      Alert.alert('Erro ao dar Like no Evento no Dashboard.js. ', error);
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