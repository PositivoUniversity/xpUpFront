import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import Events from '../screens/Events';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                name="News"
                component={Dashboard}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ color, size }) => <Feather name="mail" color={color} size={size} />,
                    tabBarLabel: 'News',
                }}
            />
            <Tab.Screen
                name="Events"
                component={Events}
                options={{
                    tabBarLabel: 'Events',
                    tabBarIcon: ({ color, size }) => <Feather name="calendar" color={color} size={size} />,
                    tabBarLabel: 'Events',
                }}
            />
        </Tab.Navigator>
    );
}