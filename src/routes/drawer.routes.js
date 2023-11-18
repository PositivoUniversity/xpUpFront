import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import ConfirmLogout from '../components/ConfirmLogout';
import Admin from '../screens/Admin';
import Events from '../screens/Events';
import Course from '../screens/Course';
import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    const { user } = useContext(AuthContext);

    const isAdmin = user.role == 1 ? true : false
    const isteacher = user.role == 2 ? true : false
    const isstudent = user.role == 3 ? true : false
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
                component={Dashboard}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="home"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Dashboard'
                }} />
            <Drawer.Screen name="profile"
                component={Profile}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="user"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Profile'
                }} />
            <Drawer.Screen name="Criar Evento"
                component={Events}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="calendar"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Criar Evento',
                }} />
            <Drawer.Screen name="Admin"
                component={Admin}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="edit"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Editar usuário'
                }} />
            <Drawer.Screen name="Course"
                component={Course}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="edit"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Editar Cursos'
                }} />
            <Drawer.Screen name="settings"
                component={Settings}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="settings"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Settings'
                }} />
            <Drawer.Screen name="logout"
                component={ConfirmLogout}
                options={{
                    drawerIcon: (
                        { size, color }
                    ) => <Feather name="log-out"
                        size={size}
                        color={color} />,
                    drawerLabel: 'Logout',
                }} />

        </Drawer.Navigator>
    );
}
