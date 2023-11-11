import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import DefaultPage from '../components/DefaultPage';
import DefaultDataTable from '../components/DefaultDataTable';
import { createUser, loadUsers } from '../../api/users-api';
import DefaultModal from '../components/DefaultModal';
import DefaultInput from '../components/DefaultInput';
import { Picker } from '@react-native-picker/picker';
import { loadCourses } from '../../api/courses-api';

export default function Admin() {
    const [data, setData] = useState([]);
    const [isFABOpen, setFABOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [passwordTip, setPasswordTip] = useState([]);
    const [password, setPassword] = useState([]);
    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    const sendUser = () => {
        setModalVisible((value) => !value);
        sendUserData();
        clearInputs();
    }

    const sendUserData = async () => {
        try {
            const urlParams = {
                name: name,
                email: email,
                passwordTip: passwordTip,
                createdAt: new Date(),
                updatedAt: new Date(),
                password: password,
                role: 2,
                course: selectedCourse,

            };
            await createUser(urlParams);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    };
    const handleCreateUser = () => {
        setModalVisible((value) => !value);
    }
    const handleEditUser = (selectedUser) => {
        setModalVisibleEdit((value) => !value);
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setPasswordTip(selectedUser.passwordTip);
            setPassword(selectedUser.password);
            setSelectedCourse(selectedUser.course);
        }
    }
    const clearInputs = () => {
        setName('');
        setEmail('');
        setPasswordTip('');
        setPassword('');
        setSelectedCourse('');
    }
    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUsers();
                setData(userData);
            } catch (error) {
                console.error('Erro ao buscar dados de usuário:', error);
            }
        };
        loadData();
    }, []);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                const course = await loadCourses();
                setCourse(course);
            } catch (error) {
                console.error('Erro ao buscar cursos', error);
            }
        };
        loadCourse();
    }, []);

    const collums = ['Nome', 'Email', 'Regra'];
    const cellData = {
        Nome: 'name',
        Email: 'email',
        Regra: 'role',
    };

    return (
        <DefaultPage>
            {data && data.length > 0 ? (
                <View>
                    <DefaultDataTable
                        isHeader={false}
                        cellData={cellData}
                        columnNames={collums}
                        textDelete={' '}
                        textedit={' '}
                        data={data}
                        textStyle={styles.styleText}
                        onpressDelete={() => console.log('Deletar Usuário Pressionado')}
                        onpressEdit={(user) => handleEditUser(user)}
                    />
                    <DefaultModal isVisible={modalVisible} onClose={() => { setModalVisible(!modalVisible); clearInputs(); }} sendData={sendUser}>
                        <Text>Cadastrar um Professor</Text>
                        <DefaultInput label="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                        <DefaultInput label="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <DefaultInput label="Dica de Senha"
                            value={passwordTip}
                            onChangeText={setPasswordTip}
                        />
                        <DefaultInput label="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={styles.pickerContainer}>
                            <Text>Curso</Text>
                            <Picker
                                selectedValue={selectedCourse}
                                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Selecione um curso" value="" />
                                {course.map((courseItem) => (
                                    <Picker.Item key={courseItem.id} label={courseItem.name} value={courseItem.id} />
                                ))}
                            </Picker>
                        </View>
                    </DefaultModal>
                    <DefaultModal isVisible={modalVisibleEdit} onClose={() => { setModalVisibleEdit(!modalVisibleEdit); clearInputs(); }} sendData={handleEditUser}>
                        <Text>Editar o Professor </Text>
                        <DefaultInput label="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                        <DefaultInput label="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <DefaultInput label="Dica de Senha"
                            value={passwordTip}
                            onChangeText={setPasswordTip}
                        />
                        <DefaultInput label="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={styles.pickerContainer}>
                            <Text>Curso</Text>
                            <Picker
                                selectedValue={selectedCourse}
                                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Selecione um curso" value="" />
                                {course.map((courseItem) => (
                                    <Picker.Item key={courseItem.id} label={courseItem.name} value={courseItem.id} />
                                ))}
                            </Picker>
                        </View>
                    </DefaultModal>
                </View>
            ) : (
                <Text>Nenhum usuário</Text>
            )}
            <FAB.Group
                open={isFABOpen}
                icon={data && data.length > 0 ? 'plus' : 'account'}
                actions={[
                    { icon: 'plus', label: 'Criar Novo Usuário', onPress: () => handleCreateUser(), labelStyle: { color: 'white' } },
                ]}
                onStateChange={({ open }) => setFABOpen(open)}
                theme={{ colors: { background: 'transparent' } }}
            />
        </DefaultPage>
    );
}

const styles = StyleSheet.create({
    styleText: {
        color: 'white',
    },
    pickerContainer: {
        marginTop: 10,
    },
    picker: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
    },
});
