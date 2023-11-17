import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";
import DefaultPage from "../components/DefaultPage";
import DefaultInput from "../components/DefaultInput";
import { registerUsers } from "../../api/register-api";
import RNPickerSelect from 'react-native-picker-select';
import { loadCourses } from "../../api/courses-api";
import { loadRolesUsers } from "../../api/roles-api";

export default function Register({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordTip, setPasswordTip] = useState('');
    const [roles, setRoles] = useState([]);
    const [role, setRole] = useState(null);
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(null);

    const handleChangeCourse = (value) => {
        setCourse(value);
    };

    const goToHome = async () => {
        navigation.navigate('menu');
    }

    const setUserRole = async () => {
        const adminUpDomainRegex = /@xp\.up\.edu\.br$/; // Admins
        const upDomainRegex = /@up\.edu\.br$/; // Teachers
        const gmailDomainRegex = /@gmail\.com$/; // Students
        const outlookDomainRegex = /@outlook\.com$/; // Students
    
        let selectedRole = null;
    
        if (email.match(adminUpDomainRegex)) {
            roles.forEach((role) => {
                if (role.name === 'Admin') {
                    setRole(role.id);
                    selectedRole = role.id;
                }
            });
        } else if (email.match(upDomainRegex)) {
            roles.forEach((role) => {
                if (role.name === 'Teacher') {
                    setRole(role.id);
                    selectedRole = role.id;
                }
            });
        } else if (email.match(gmailDomainRegex)) {
            roles.forEach((role) => {
                if (role.name === 'User') {
                    setRole(role.id);
                    selectedRole = role.id;
                }
            });
        } else if (email.match(outlookDomainRegex)) {
            roles.forEach((role) => {
                if (role.name === 'User') {
                    setRole(role.id);
                    selectedRole = role.id;
                }
            });
        } else {
            console.log("No email matched");
        }
    
        return selectedRole;
    };
    
    const sendUserData = async () => {
        try {
            const selectedRole = await setUserRole();
            
            const urlParams = {
                name: name,
                email: email,
                password: password,
                passwordTip: passwordTip,
                createdAt: new Date(),
                updatedAt: new Date(),
                role: selectedRole,
                course: course,
            };

            await registerUsers(urlParams);
            await goToHome();
        } catch (error) {
            console.error('Error creating user in Register.js:', error);
            throw error;
        }
    };    

    const sendRegister = () => {
        if (!name || !email || !password || !passwordConfirm) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== passwordConfirm) {
            alert('As senhas não correspondem.');
            return;
        }

        sendUserData();
    }

    const goToLogin = () => {
        navigation.navigate('login');
    }

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const loadedCourses = await loadCourses();
                setCourses(loadedCourses);
            } catch (error) {
                console.error('Error loading courses in Register.js:', error);
                throw error;
            }
        };

        fetchCourses();
    }, []);    

    useEffect(() => {
        const loadedRoles = async () => {
            try {
                const data = await loadRolesUsers();
                setRoles(data);
                setUserRole();
            } catch (error) {
                console.error('Error loading roles in Register.js:', error);
                throw error;
            }
        };
    
        loadedRoles();
    }, []);

    return (
        <DefaultPage>
            <View style={styles.container}>
                <Logo />

                <View style={styles.containerInput}>
                    <Text style={styles.title}>Cadastro</Text>

                    <DefaultInput label="Nome"
                        value={name}
                        onChangeText={setName}
                    />

                    <DefaultInput label="Email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <DefaultInput label="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                    <DefaultInput label="Confirmar Senha"
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        secureTextEntry={true}
                    />

                    <DefaultInput label="Dica de Senha"
                        value={passwordTip}
                        onChangeText={setPasswordTip}
                    />

                    <View style={styles.selectCourse}>
                        <RNPickerSelect
                            placeholder={{ label: 'Selecione o curso', value: null }}
                            onValueChange={(value) => handleChangeCourse(value)}
                            items={courses.map((course) => ({
                                label: course.name,
                                value: course.id,
                            }))}
                            value={course}
                        />
                    </View>

                    <DefaultButton text="Concluir Cadastro"
                        onPress={sendRegister}
                        styleButton={styles.btn}
                        styleText={styles.btnText}
                    />

                    <DefaultButton text="Já possui conta?"
                        onPress={goToLogin}
                        styleText={styles.haveAccount}
                    />
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
    },
    selectCourse: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        color: '#000',
        fontSize: 18,
        paddingLeft: 10
    }
})