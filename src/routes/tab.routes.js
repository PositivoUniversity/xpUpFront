import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";
import Groups from "../screens/Groups";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: "#1A1818",
        borderTopColor: "transparent",
    },
    tabBarItemStyle: {
        borderRadius: 15,
    },
    tabBarActiveBackgroundColor: "#A101FE",
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "#fff",
};

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: "Dashboard",
                }}
            />
            <Tab.Screen
                name="groups"
                component={Groups}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="plus" size={size} color={color} />
                    ),
                    tabBarLabel: "Groups",
                }}
            />
        </Tab.Navigator>
    );
}
