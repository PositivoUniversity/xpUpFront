import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, FAB } from 'react-native-paper';
import DefaultPage from '../components/DefaultPage';
import DefaultDataTable from '../components/DefaultDataTable';
import { createUser, deleteUser, editUser, loadUsers } from '../../api/users-api';
import DefaultModal from '../components/DefaultModal';
import DefaultInput from '../components/DefaultInput';
import { Picker } from '@react-native-picker/picker';
import { loadCourses } from '../../api/courses-api';

export default function Admin() {
    const [isFABOpen, setFABOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordTip, setPasswordTip] = useState('');
    const [password, setPassword] = useState('');
    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [data, setData] = useState([]);
    const [dataEditUser, setDataEditUser] = useState([]);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);


    const [formState, setFormState] = useState({
        name: name,
        email: email,
        passwordTip: passwordTip,
        createdAt: new Date(),
        updatedAt: new Date(),
        password: password,
        role: 2,
        course: selectedCourse,

    });

    const handleChange = (field, value) => {
        setFormState(prevState => {
            const newState = { ...prevState, [field]: value };
            return newState;
        });
    };
    const sendUser = () => {
        setModalVisible((value) => !value);
        sendUserData();
        loadUsers();
        clearInput();
    }
    const clearInput = () => {
        setName('');
        setEmail('');
        setPasswordTip('');
        setPassword('');
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
        } finally {
            clearInput();
            loadUsers();
        }
    };
    const handleCreateUser = () => {
        setModalVisible((value) => !value);
    }
    const handleEditUser = (selectedUser) => {
        setDataEditUser(selectedUser);
        setModalVisibleEdit(true);
        if (selectedUser) {
            setFormState(selectedUser);
        }
    }
    const removeUser = async (selectedUser) => {
        try {
            await deleteUser(selectedUser.id);

        } catch (error) {
            console.error('Erro ao remover usuário:', error);
        } finally {
            clearInput();
            loadUsers();
        }
    }

    const sendEditUser = async () => {
        try {
            const urlParams = {
                id: formState.id,
                name: formState.name,
                email: formState.email,
                password: formState.password,
                passwordTip: formState.passwordTip,
                role: 2,
                course: formState.course,
            };
            await editUser(urlParams, formState.id);
            setModalVisibleEdit(false);
            setIsPasswordChanged(false);
            await loadUsers();
        } catch (error) {
            console.error('Erro ao editar usuário:', error);
        } finally {
            clearInput();
            loadUsers();
        }
    }
    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await loadUsers();
                const filteredData = userData.filter((item) => item.role === 2);
                setData(filteredData);
            } catch (error) {
                console.error('Erro ao buscar dados de usuário:', error);
            }
        };
        loadData();
    }, [data]);

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
                        onpressDelete={(user) => removeUser(user)}
                        onpressEdit={(user) => handleEditUser(user)}
                    />
                    <DefaultModal isVisible={modalVisible}
                        onClose={() => { setModalVisible(!modalVisible); }}
                        sendData={sendUser}>
                        
                        <Text>Cadastrar um Professor</Text>
                        <DefaultInput label="Nome"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                        <DefaultInput label="Email"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <DefaultInput label="Dica de Senha"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={passwordTip}
                            onChangeText={setPasswordTip}
                        />
                        <DefaultInput label="Senha"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
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
                    <DefaultModal isVisible={modalVisibleEdit} onClose={() => { setModalVisibleEdit(!modalVisibleEdit); }} sendData={sendEditUser}>
                        <Text>{`Editar o Professor: ${name}`}</Text>
                        <DefaultInput label="Nome"
                            hasStile={true}
                            hasStileColor={'black'}
                            stylesLabel={styles.input}
                            value={formState.name}
                            onChangeText={value => handleChange('name', value)}
                        />
                        <DefaultInput label="Email"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={formState.email}
                            onChangeText={value => handleChange('email', value)}
                        />
                        <DefaultInput label="Dica de Senha"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={formState.passwordTip}
                            onChangeText={value => handleChange('passwordTip', value)}
                        />
                        <DefaultInput label="Nova Senha"
                            hasStileColor={'black'}
                            hasStile={true}
                            stylesLabel={styles.input}
                            value={isPasswordChanged ? formState.password : ''}
                            onChangeText={(value) => {
                                handleChange('password', value);
                                setIsPasswordChanged(true);
                            }}
                        />
                        <View style={styles.pickerContainer}>
                            <Text>Curso</Text>
                            <Picker
                                selectedValue={formState.course}
                                onValueChange={value => handleChange('course', value)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Selecione um curso" value={formState.course} />
                                {course.map((courseItem) => (
                                    <Picker.Item key={courseItem.id} label={courseItem.name} value={courseItem.id} />
                                ))}
                            </Picker>
                        </View>
                    </DefaultModal>
                </View>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="purple" />
                    <Text style={styles.loadingText}>Carregando Professores...</Text>
                </View>
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
        color: 'black',
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
    loadingText: {
        color: 'white',
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#d5d5d5',
        borderWidth: 2,
        color: 'black',
        paddingLeft: 5,
        textAlign: 'center',
        marginBottom: 10,
    }
});
