import { SafeAreaView, StyleSheet } from 'react-native';

export default function DefaultPage({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1818',
        height: '100%'
    }
})