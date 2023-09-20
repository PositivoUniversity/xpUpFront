import { Text, StyleSheet } from "react-native"
import DefaultPage from "../components/DefaultPage"

export default function Settings() {
    return (
        <DefaultPage>
            <Text style={styles.text}>Settings</Text>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 290,
        marginLeft: 150,
        marginRight: 150,
    }
})