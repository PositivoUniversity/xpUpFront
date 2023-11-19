import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../contexts/auth';


export default function DefaultNewsCard({ data, userName, likes }) {
    const { user } = useContext(AuthContext);

    const [isLiked, setIsLiked] = useState(false);

    const handleDelete = () => {
        console.log(data.id, typeof data.id)
        deleteNews(data.id)
    }
    const makeLike = async () => {
        try {
            const urlParams = {
                "like": true,
                "likedByUserId": user.id,
                "noticeId": data.id,
                "eventId": null
            };
            await createLike(urlParams);
        } catch (error) {
            console.error('Erro ao tentar dar like:', error);
        }
        setIsLiked(true);
    }
    const dismakeLike = async () => {
        setIsLiked(false);
    }

    return (
        <View style={styles.container} key={data.id}>
            <View style={styles.header}>
                <Text style={styles.title}>{data.title}</Text>
                <Icon2 name="trash-alt" size={26} style={styles.trashIcon} onPress={handleDelete} />
            </View>

            <Text style={styles.subtitle}>{data.subtitle}</Text>

            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.footer}>
                <View style={styles.user}>
                    <Icon2 name="user-alt" size={26} color="#000" />
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <View style={styles.likes}>
                    {isLiked
                        ? <Icon name="heart" size={30} color="#900" onPress={dismakeLike} />
                        : <Icon name="heart-outline" size={30} color="#000" onPress={makeLike} />
                    }
                    <Text style={styles.subtitle}>{likes.lenght || 0}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5d5d5',
        minHeight: 100,
        width: '80%',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#000',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        width: '80%',
        fontWeight: 'bold',
        color: '#000',
    },
    trashIcon: {
        position: 'absolute',
        top: 3,
        right: 0,
    },
    subtitle: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'semibold',
        color: '#1A1818',
    },
    description: {
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#1A1818',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 20,
        color: '#3781C6',
        marginLeft: 5,
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
