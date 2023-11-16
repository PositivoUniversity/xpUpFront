import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getEvent, deleteEvent } from '../../api/events-api';
import { loadUsers } from '../../api/users-api'


export default function DefaultEvent({ events, sendDeleteData, sendLikeData, sendCheckinData }) {  
  
  const [userData, setUserData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [matchedUserName, setMatchedUserName] = useState('');
  
  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const userDetails = await loadUsers();
        
        setUserData(userDetails);
      } catch (error) {
        console.error('Error ao carregar dados de usuário:', error);
      }
    };
    loadUserDetails();
  }, []);


  useEffect(() => {
    const loadEventsDetails = async () => {
      try {
        const eventsDetails = await getEvent(); 
        setEventsData(eventsDetails);
      } catch (error) {
        console.error('Error ao carregar dados de usuário:', error);
      }
    };
    loadEventsDetails();
  }, []);
  useEffect(() => {
  if (userData.length > 0 && eventsData.length > 0) {
    const matchedUserNames = eventsData.map(event => {
      const matchedUser = userData.find(user => user.id === event.usersId);
      console.log(matchedUser)
      return matchedUser ? matchedUser.name : 'No matching user found';
    });
    setMatchedUserName(matchedUserNames);
  }
}, [eventsData, userData]);

  
  return (
    <View style={styles.container}>
      {events.length > 0 ? (
        events.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <View style={styles.itemTitleContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => sendDeleteData(item.id)}>
                <Feather style={styles.featherDelete} name="delete" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            
            <View style={styles.itemUserContainer}>
            
              <TouchableOpacity>
              <Feather style={styles.featherPerson} name="user" />
              </TouchableOpacity>
              <Text style={styles.featherText}>{matchedUserName}</Text>
              <View style={styles.itemLikeCheckinContainer}>
              <Text style={styles.featherText}>50</Text>
              <TouchableOpacity onPress={() => sendLikeData(item.id)}>
                
              <Feather style={styles.featherHeart} name="heart" />
              </TouchableOpacity>
              <Text style={styles.featherText}>20</Text>
              <TouchableOpacity onPress={() => sendCheckinData(item.id)}>
              <Feather style={styles.featherCalendar} name="calendar" />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text>No events available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1818',
    padding: 10,
  },
  cardContainer: {
    backgroundColor: '#1A1818',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'white',
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    flex: 1,
  },
  itemSubtitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  featherCalendar: {
    color: 'blue',
    marginLeft: 'auto',
    fontSize: 20,
    paddingRight: 5,
  },
  featherHeart: {
    color: 'red',
    marginLeft: 'auto',
    fontSize: 20,
    paddingRight: 5,
  },
  TouchableOpacity:{
    color: 'black',
    
  },
  featherDelete: {
    color: 'black',
    marginLeft: 'auto',
    fontSize: 20,
  },
  itemUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  featherPerson: {
    color: 'black',
    marginRight: 10,
    fontSize: 20,
  },
  itemLikeCheckinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  featherText: {
    paddingLeft: 0,
    paddingRight: 5,
  },
});
