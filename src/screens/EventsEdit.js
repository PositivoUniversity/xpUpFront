import {Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultPage from "../components/DefaultPage";
import DefaultInput from "../components/DefaultInput";

export default function Events({navigation}) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [usersId, setUsersId] = useState('');

    const goToHome = () => {
        navigation.navigate('menu');
    }

    const handleEvents = () => {
        if (!title || !subtitle || !description) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        goToHome();
    };


    return (
        <DefaultPage>
            <View style={
                styles.container
            }>
                <Logo/>

                <View style={
                    styles.containerInput
                }>
                    <Text style={
                        styles.title
                    }>Edição de Eventos</Text>

                    <DefaultInput label="Titulo"
                        value={title}
                        onChangeText={setTitle}/>

                    <DefaultInput label="Subtitulo"
                        value={subtitle}
                        onChangeText={setSubtitle}/>

                    <DefaultInput label="Descricao"
                        value={description}
                        onChangeText={setDescription}/>

                    <DefaultButton text="Concluir Edição"
                        onPress={handleEvents}
                        styleButton={
                            styles.btn
                        }
                        styleText={
                            styles.btnText
                        }/>
                </View>
            </View>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30
    },
    containerInput: {
        height: 200,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140
    },
    title: {
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#A101FE',
        height: 45,
        width: '60%',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18
    },
    haveAccount: {
        color: '#FCA311',
        marginTop: 10,
        fontSize: 14
    }
})
