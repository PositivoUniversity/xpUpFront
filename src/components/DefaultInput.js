import React, { useState } from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';

export default function DefaultInput({ label, value, onChangeText }) {
    const [isFocused, setIsFocused] = useState(false);
    const animatedPlaceholderY = new Animated.Value(isFocused ? -20 : 0);

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(animatedPlaceholderY, {
            toValue: -20,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        Animated.timing(animatedPlaceholderY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View style={styles.container}>
            <Animated.Text
                style={{
                    position: 'absolute',
                    left: 5,
                    top: animatedPlaceholderY,
                    fontSize: isFocused ? 14 : 16,
                    color: isFocused ? '#a101fe' : '#d5d5d5',
                }}
            >
                {label}
            </Animated.Text>
            <TextInput
                placeholderTextColor="#d5d5d5"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChangeText={onChangeText}
                selectionColor="#d5d5d5"
                secureTextEntry={label === 'Senha' || label === 'Confirmar Senha'}
                style={styles.input}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#d5d5d5',
        borderWidth: 2,
        color: '#d5d5d5',
        paddingLeft: 5,
        textAlign: 'center',
        marginBottom: 10,
    },
});
