import { SafeAreaView, Text } from "react-native"
import styles from "../styles"

export default function Dashboard(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dashboardTitle}>Dashboard</Text>
        </SafeAreaView>
    )
}