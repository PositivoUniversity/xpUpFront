import { TouchableOpacity, Text } from 'react-native';

export default function DefaultButton({ text, onPress, styleButton, styleText }) {
    return (
        <TouchableOpacity onPress={onPress} style={ styleButton }>
            <Text style={ styleText }>{text}</Text>
        </TouchableOpacity>
    );
}