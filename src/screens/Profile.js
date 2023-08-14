import { Text, SafeAreaView } from "react-native";
import styles from "../styles";
import Card from "../components/Card";

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <Card />
        </SafeAreaView>
    );
}