import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
import { AuthProvider } from '../../contexts/auth';



export default function Routes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StackRoutes />
            </AuthProvider>
        </NavigationContainer>
    );
}
