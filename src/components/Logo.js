import { Image, View, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '90%',
        height: '90%'
    }
});