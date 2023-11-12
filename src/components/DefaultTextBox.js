import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const DefaultTextBox = ({ label, value, onChangeText, placeholder, numberOfLines }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline
        numberOfLines={numberOfLines || 4}
        style={styles.descriptionInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    color: 'white',
  },
  descriptionInput: {
        width: 300,
        height: 100,
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

export default DefaultTextBox;
