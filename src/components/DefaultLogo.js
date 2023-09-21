import { View, Image, StyleSheet } from 'react-native';

export default function DefaultLogo() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '10%',
        height: 40
    },
    logo: {
        width: '100%',
        height: '100%'
    }
});