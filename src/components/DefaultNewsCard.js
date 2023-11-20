import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteNews } from "../../api/news-api";
import { AuthContext } from "../../contexts/auth";


export default function DefaultNewsCard({ data, userName }) {
    const { user } = useContext(AuthContext);

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        likes ? setLikes(likes - 1) : setLikes(likes + 1);
        liked ? setLiked(false) : setLiked(true);
    }

    const handleDelete = async (id) => {
        try {
            await deleteNews(id);
        } catch (error) {
            console.error('Erro ao deletar notícia no Dashboard.js. ', error);
        }
      };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{data.title}</Text>
                {(user.id === data.publishedBy || user.role === 1) && 
                    (
                        <TouchableOpacity onPress={() => handleDelete(data.id)}>
                            <Feather style={styles.featherDelete} name="trash" />
                        </TouchableOpacity>
                    )
                }
                
            </View>
            <Text style={styles.itemSubtitle}>{data.subtitle}</Text>
            <Text style={styles.itemDescription}>{data.description}</Text>

            <View style={styles.itemUserContainer}>

                <TouchableOpacity>
                    <Feather style={styles.featherPerson} name="user" />
                </TouchableOpacity>
                <Text style={styles.featherText}>{userName}</Text>
                <View style={styles.itemLikeCheckinContainer}>


                    <Text style={styles.featherText}>{data.likes + likes}</Text>
                    <TouchableOpacity onPress={() => handleLike(data)}>
                        <Icon name={liked ? 'heart' : 'heart-outline'} color={liked ? '#900' : 'red'} style={styles.featherHeart} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
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
        marginHorizontal: 15,
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
        marginLeft: 'auto',
        fontSize: 20,
        paddingRight: 5,
    },
    TouchableOpacity: {
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
