import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { deleteNews } from '../../api/news-api';

export default function NewsCard(data) {
  const handleDelete = () => {
    console.log(data.id, typeof data.id)
    deleteNews(data.id)
  }
  return (
    <View style={styles.container} key={data.id}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
        <Feather
          style={styles.trashIcon}
          name="trash-2"
          size={30}
          onPress={handleDelete}
        />
      </View>

      <Text style={styles.subtitle}>{data.subtitle}</Text>

      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.footer}>
        <View style={styles.user}>
          <Feather
            style={styles.userIcon}
            name="user"
            size={30}
          />
          <Text style={styles.userName}>Helton</Text>
        </View>
        <View style={styles.actions}>
          <Feather
            style={styles.heartIcon}
            name="heart"
            size={30}
          />
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
  }
});