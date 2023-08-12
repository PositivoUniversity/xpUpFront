import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";
import Groups from "../screens/Groups";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="dashboard" 
                component={Dashboard} 
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" size={size} color={color} />,
                    tabBarLabel: "Dashboard "
                }}
            />

            <Tab.Screen 
                name="groups" 
                component={Groups}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="plus" size={size} color={color} />,
                    tabBarLabel: "Groups"
                }} 
            />
        </Tab.Navigator>
    );
    }