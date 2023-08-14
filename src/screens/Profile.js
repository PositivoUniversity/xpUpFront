import { SafeAreaView } from "react-native";
import styles from "../styles";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileCard />
        </SafeAreaView>
    );
}