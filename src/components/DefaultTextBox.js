import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const DefaultTextBox = ({ label, value, onChangeText, placeholder, numberOfLines }) => {
  return (
    <View style={styles.container}>
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
  container: {
    marginTop: 20,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    left: 5,
    color: '#d5d5d5',
  },
  descriptionInput: {
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
