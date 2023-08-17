import { Image, View } from "react-native";

export default function Logo() {
    return (
        <View style={
            {
                width: '60%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Image source={require('../../assets/img/logo.png')} style={
                {
                    width: '100%',
                    height: '100%',
                }
            }/>
        </View>
    )
}