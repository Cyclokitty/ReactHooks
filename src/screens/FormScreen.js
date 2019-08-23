import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FormScreen = () => {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Screen</Text>
            <Text style={styles.inputTitle}>Your name is: {name}</Text>
            <TextInput
                style={styles.input}
                onChangeText={ ({name}) => setName(name) }
                value={name}
            />
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#264C00',
    },
    title: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 24,
    },
    inputTitle: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        margin: 15,
        backgroundColor: '#fff',
        color: '#333', 
        borderColor: '#333',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    
});

export default FormScreen;