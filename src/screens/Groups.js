import { Text, SafeAreaView } from "react-native";

export default function News() {
    return (
        <SafeAreaView style={
            {
                backgroundColor: '#1A1818',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <Text style={
                {
                    color: 'whitesmoke',
                    fontWeight: 'bold',
                    fontSize: 30,
                }
            }>Groups</Text>
        </SafeAreaView>
    );
}
