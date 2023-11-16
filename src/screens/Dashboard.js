import React, { useContext } from 'react';
import { Text } from 'react-native';
import DefaultPage from "../components/DefaultPage";
import { AuthContext } from '../../contexts/auth'
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import DefaultEvent from "../components/DefaultEvent";
import { getEvent, deleteEvent } from '../../api/events-api';
import { loadUsers } from '../../api/users-api'


export default function Dashboard() {
    const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const loadDataUsers = async () => {
        try {

            //const userId = { id: 5 };
            const userData = await loadUsers();
            
            const filteredData = userData.filter((user) => user.id === data.id);
            setData(filteredData);
        } catch (error) {
            //console.error('Erro ao buscar dados de usuário:', error);
        }
    };
    loadDataUsers();
  }, [data]);
  useEffect(() => {
    const loadDataEvents = async () => {
      try {
        //const userData = await loadUsers();
        const eventData = await getEvent();
        //const filteredUser = userData.find((user) => user.id === events.userId);
        //const filteredEvent = eventData.filter((event) => event.event.userId === filteredUser.id);
        setEvents(eventData);
        //console.log(events);
      } catch (error) {
        //console.error('Erro ao buscar dados de Evento:', error);
      }
    };
    loadDataEvents();
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
        <DefaultPage>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> */}
        </DefaultPage>
    );
}

const styles = StyleSheet.create({});
