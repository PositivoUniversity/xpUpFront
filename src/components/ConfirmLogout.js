import { View, StyleSheet, Text } from "react-native";
import DefaultPage from "./DefaultPage";
import DefaultButton from "./DefaultButton";

export default function ConfirmLogout({navigation}){
    const handleLogout = () => {
        navigation.navigate('login')
    }

    const goToDashboard = () => {
        navigation.navigate('home')
    }

    return(
        <DefaultPage>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tem certeza que deseja sair?</Text>

                <View style={styles.containerButtons}>
                    <DefaultButton text="Sim" onPress={handleLogout} 
                        styleButton={styles.btn} 
                        styleText={styles.textButton}
                        />
                    <DefaultButton text="Não" onPress={goToDashboard} 
                    styleButton={styles.btn} 
                        styleText={styles.textButton}
                    />
                </View>
            </View>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    containerText: {
        backgroundColor: '#E5E5E5',
        height: 160,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 250,
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerButtons: {
        flexDirection: 'row',
        marginTop: 20,
    },
    btn:{
        backgroundColor: '#A101FE', 
        height: 60, 
        width: 90, 
        borderRadius: 10, 
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    textButton: {
        color: '#FFFFFF', 
        fontSize: 20
    }
})