import { TouchableOpacity, Text } from 'react-native';

export default function DefaultButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={
            {
                backgroundColor: '#A101FE',
                height: 45,
                width: '60%',
                borderRadius: 10,
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <Text style={
                {
                    color: '#fff',
                    fontSize: 18,
                }
            }>{text}</Text>
        </TouchableOpacity>
    );
}