import { View, Image } from 'react-native';

export default function DefaultLogo() {
    return (
        <View style={
            {
                width: '10%',
                height: 40,
            }
        }>
            <Image source={require('../../assets/img/logo.png')} style={
                {
                    width: '100%',
                    height: '100%',
                }
            } />
        </View>
    )
}
