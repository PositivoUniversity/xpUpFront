import DefaultPage from "../components/DefaultPage";
import DefaultCard from "../components/DefaultCard";
import { StyleSheet } from "react-native";

export default function Profile() {
    return (
        <DefaultPage>
            <DefaultCard 
                styleCard={styles.container}
            />
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5d5d5',
        height: 180,
        width: '80%',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
    }
})