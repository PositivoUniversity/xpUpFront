import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet } from 'react-native';
import DefaultButton from './DefaultButton';

export const DefaultModal = ({ isVisible, onClose, sendData, children }) => {
    if (!isVisible) {
        return null;
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {children}
                    <View style={styles.lineButton}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={onClose}>
                            <DefaultButton
                                text="Fechar"
                                onPress={onClose}
                                styleButton={styles.btnLogin}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={sendData}>
                            <DefaultButton
                                text="Enviar"
                                onPress={sendData}
                                styleButton={styles.btnLogin}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    btnLogin: {
        backgroundColor: '#A101FE',
        height: 60,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineButton: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 20,
    },
    buttonContainer: {
        width: '48%',
    },
});

export default DefaultModal;