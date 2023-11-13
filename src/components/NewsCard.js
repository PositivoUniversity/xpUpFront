import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";

export default function NewsCard(data) {
    return (
      <View style={styles.container} key={data.id}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
          <Feather
            style={styles.trash}
            name="trash-2"
            size={24}
          />
        </View>

        <Text style={styles.subtitle}>{data.subtitle}</Text>

        <Text style={styles.description}>{data.description}</Text>
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
    paddingHorizontal: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#1A1818'
  },
  description: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#1A1818'
  }
});