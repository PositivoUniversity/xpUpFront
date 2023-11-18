import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getEvent, deleteEvent } from '../../api/events-api';
import { loadUsers } from '../../api/users-api'



export default function DefaultEvent({ events, sendLikeData, sendCheckinData, sendLikeDelete }) {  
  
  const [userData, setUserData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  //const [likesData, setLikesData] = useState([]);
  const [matchedUserName, setMatchedUserName] = useState('');
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [checkin, setCheckin] = useState(0);
  const [checked, setChecked] = useState(false);
  
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

  // useEffect(() => {
  //   const loadLikesDetails = async () => {
  //     try {
  //       const likesDetails = await getLikes();
  //       setLikesData(likesDetails);
  //     } catch (error) {
  //       console.error('Error ao carregar dados de usuário:', error);
  //     }
  //   };
  //   loadLikesDetails();
  // }, []);
//   const handleLike = () => {
//     setLikes(likes + 1);
//   sendLikeData(likes)
// }


  const handleLike = (item) => {
    if (liked == true)
    {
      setLikes(likes - 1);
      setLiked(false);
      sendLikeData(liked, item.id, item);
    }
    else
    {
      setLikes(likes + 1);
      setLiked(true);
      sendLikeData(liked, item.id, item);
    }
  };

  const handleCheckin = (item) => {
    if (checked == true) {
      setCheckin(checkin - 1);
      setChecked(false);
    } else {
      setCheckin(checkin + 1);
      setChecked(true);
    }
    sendCheckinData(checked, item.id, item);
  };
  
  return (
    <View style={styles.container}>
      {events.length > 0 ? (
        events.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <View style={styles.itemTitleContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => sendDeleteData(item.id)}>
                <Feather style={styles.featherDelete} name="trash" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            
            <View style={styles.itemUserContainer}>
            
              <TouchableOpacity>
              <Feather style={styles.featherPerson} name="user" />
              </TouchableOpacity>
              <Text style={styles.featherText}>{item.userPost}</Text>
              <View style={styles.itemLikeCheckinContainer}>


              <Text style={styles.featherText}>{item.likes + likes}</Text>
              <TouchableOpacity onPress={() => handleLike(item)}>
              <Feather name={liked ? 'heart' : 'heart'} style={styles.featherHeart} />
              
              
              </TouchableOpacity>
              <Text style={styles.featherText}>{checkin}</Text>
              <TouchableOpacity onPress={() => handleCheckin()}>
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
