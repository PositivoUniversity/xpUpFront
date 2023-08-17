import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';
import TabRoutes from './tab.routes';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={
            {
                title: '',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#1A1818',
                    elevation: 0,
                },
                drawerStyle: {
                    backgroundColor: '#1A1818'
                },
                drawerActiveBackgroundColor: '#A101FE',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
                drawerItemStyle: {
                    marginVertical: 5,
                },
            }
            }>

            <Drawer.Screen 
                name="menu" 
                component={TabRoutes} 
                options={
                    {
                        drawerIcon: ({ size, color}) => <Feather name="home" size={size} color={color} />,
                        drawerLabel: 'Dashboard'
                    }
                }
            />

            <Drawer.Screen
                name="profile"
                component={Profile}
                options={
                    {
                        drawerIcon: ({ size, color}) => <Feather name="user" size={size} color={color} />,
                        drawerLabel: 'Profile'
                    }
                }
            />

            <Drawer.Screen
                name="settings"
                component={Settings}
                options={
                    {
                        drawerIcon: ({ size, color}) => <Feather name="settings" size={size} color={color} />,
                        drawerLabel: 'Settings'
                    }
            }
            />
        </Drawer.Navigator>
    );
}
