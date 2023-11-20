import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import ConfirmLogout from '../components/ConfirmLogout';
import Admin from '../screens/Admin';
import Course from '../screens/Course';
import CreateEvents from '../screens/CreateEvents';
import CreateNews from '../screens/CreateNews';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    const { user } = useContext(AuthContext);

    const isAdmin = user.role == 1 ? true : false
    const isteacher = user.role == 2 ? true : false
    const isStudent = user.role == 3 ? true : false
    return (
        <Drawer.Navigator screenOptions={
            {
                title: '',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#1A1818',
                    elevation: 0
                },
                drawerStyle: {
                    backgroundColor: '#1A1818'
                },
                drawerActiveBackgroundColor: '#A101FE',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
                drawerItemStyle: {
                    marginVertical: 5
                }
            }
        }>

            <Drawer.Screen name="home"
                component={TabRoutes}
                options={
                    {
                        drawerIcon: (
                            { size, color }
                        ) => <Feather name="home"
                            size={size}
                            color={color} />,
                        drawerLabel: 'Dashboard'
                    }
                }
            />

            {(isAdmin || isteacher) && (
                <Drawer.Screen name="Criar Evento"
                    component={CreateEvents}
                    options={
                        {
                            drawerIcon: (
                                { size, color }
                            ) => <Feather name="calendar"
                                size={size}
                                color={color} />,
                            drawerLabel: 'Criar Evento',
                        }
                    }
                />
            )}

            {isAdmin && (
                <Drawer.Screen name="News"
                    component={CreateNews}
                    options={
                        {
                            drawerIcon: (
                                { size, color }
                            ) => <Feather name="calendar"
                                size={size}
                                color={color} />,
                            drawerLabel: 'Criar Notícia',
                        }
                    }
                />
            )}


            {isAdmin && <Drawer.Screen name="Admin"
                component={Admin}
                options={
                    {
                        drawerIcon: (
                            { size, color }
                        ) => <Feather name="edit"
                            size={size}
                            color={color} />,
                        drawerLabel: 'Editar Professor'
                    }
                }
            />
            }

            {isteacher && (
                <Drawer.Screen name="Course"
                    component={Course}
                    options={
                        {
                            drawerIcon: (
                                { size, color }
                            ) => <Feather name="edit"
                                size={size}
                                color={color} />,
                            drawerLabel: 'Editar Cursos'
                        }
                    }
                />
            )}

            <Drawer.Screen name="logout"
                component={ConfirmLogout}
                options={
                    {
                        drawerIcon: (
                            { size, color }
                        ) => <Feather name="log-out"
                            size={size}
                            color={color} />,
                        drawerLabel: 'Logout',
                    }
                }
            />
        </Drawer.Navigator>
    );
}
