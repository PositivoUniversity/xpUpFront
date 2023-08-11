import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';

import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen 
                name="menu" 
                component={TabRoutes} 
                options={{
                    drawerIcon: ({ size, color}) => <Feather name="home" size={size} color={color} />,
                    drawerLabel: 'Dashboard'
                }}
            />
        </Drawer.Navigator>
    );
}