import { SafeAreaView } from "react-native";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
    return (
        <SafeAreaView style={
            {
                backgroundColor: '#1A1818',
                height: '100%',
                alignItems: 'center',
            }
        }>
            <ProfileCard />
        </SafeAreaView>
    );
}
