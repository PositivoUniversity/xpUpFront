import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DefaultPage from "../components/DefaultPage";
import { FlatList } from "react-native-gesture-handler";
import DefaultTextBox from '../components/DefaultTextBox';
import { getEvent, getEventId } from '../../api/events-api';


export default function Dashboard() {
    const [data, setData] = useState([]);

    const customActions = () => {
        return <Text style={styles.styleText} onClick={() => console.log(`Clicou`)}>aqui</Text>;
    };
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const eventData = await getEvent();
                setData(eventData);
                console.log(eventData);
            } catch (error) {
                console.error('Erro ao buscar dados de Evento:', error);
            }
        };
        loadData();
    }, []);
    const deleteEvent = async () => {console.log("Evento deletado com sucesso.")}
    const getEventId = async () => {console.log("Id pego")}

    
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
    <Text style={styles.itemId}>{item.id}</Text>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    <Text style={styles.itemDescription}>{item.description}</Text>
    <Text style={styles.itemText}>
      <Feather style={[styles.featherHeart]} name="heart" />
      <Feather style={[styles.featherCalendar]} name="calendar" />
      <Feather style={[styles.featherDelete]} name="delete" />
    </Text>
    
  </View>
      );
      

    return (
        <DefaultPage>
          {data && data.length > 0 ? (
            <>
              <FlatList style={styles.FlatList}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </>
          ) : (
            <Text>Carregando dados...</Text>
          )}
        </DefaultPage>
      );
}

const styles = StyleSheet.create({
    FlatList: {
    },
    itemContainer: {
        padding: 20,
        borderBottomWidth: 1,
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
  
  
