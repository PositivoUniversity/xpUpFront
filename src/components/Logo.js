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
                    width: '90%',
                    height: '90%',
                }
            } />
        </View>
    )
}
