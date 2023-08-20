import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function InputDefault({
    value,
    onChangeText,
    style,
    placeholder,
    secureTextEntry
}) {
    const [error, setError] = useState('');

    const handleTextChange = (newText) => {
        onChangeText(newText);
        component

        if (newText.trim() === '') {
            setError('O campo não pode ser vazio.');
        } else {
            setError('');
        }
    };

    return (
        <>
            <TextInput value={value}
                onChangeText={handleTextChange}
                style={style}
                placeholder={placeholder}/> {
            error !== '' && <Text style={
                styles.errorText
            }>
                {error}</Text>
        } </>
    );
}
