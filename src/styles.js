import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1818',
        height: '100%',
    },
    containerLogin: {
        alignItems: 'center',
        marginTop: 300,
    },
    containerInput: {
        backgroundColor: '#383131',
        height: 150,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        backgroundColor: 'whitesmoke',
        height: 50,
        width: '80%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    inputPassword: {
        backgroundColor: 'whitesmoke',
        height: 50,
        width: '80%',
        borderRadius: 10,
        padding: 10,
    },
    remenberPasswordAndSignIn: {
        padding: 10,
        flexDirection: 'row',
    },
    remenberPassword: {
        color: 'whitesmoke',
        fontWeight: 'bold',
        fontSize: 15,
        paddingRight: 10,
    },
    signIn: {
        color: 'whitesmoke',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 10,
    },
    containerButton: {
        backgroundColor: '#A101FE',
        height: 40,
        width: '55%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    btn: {
        color: 'whitesmoke',
        fontWeight: 'bold',
        borderRadius: 10,
        padding: 10,
    },
    dashboardTitle: {
        color: 'whitesmoke',
        fontWeight: 'bold',
        fontSize: 30,
    },
    defaultCard:{
        backgroundColor: 'white',
        height: 160,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 40,    
        marginTop: 20,
    },
});

export default styles;