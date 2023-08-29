import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Recovery from "../screens/Recovery";
import DrawerRoutes from "./drawer.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={
                {headerShown: false}
        }>
            <Stack.Screen name="login"
                component={Login}/>
            <Stack.Screen name="home"
                component={DrawerRoutes}/>
            <Stack.Screen name="register"
                component={Register}/>
            <Stack.Screen name="recovery"
                component={Recovery}/>
        </Stack.Navigator>
    );
}
