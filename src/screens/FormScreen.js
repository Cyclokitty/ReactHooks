import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FormScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Screen</Text>
            <Text style={styles.inputTitle}>Your name is: </Text>
            <TextInput
                style={styles.input}
                onChangeText={ (newText) => setName(newText) }
                value={name}
                autoCapitalize='words'
                autoCorrect={false}
            />
            <Text style={styles.inputTitle}>{name}</Text>

            <Text style={styles.inputTitle}>Set Your Password: </Text>
            <TextInput
                style={styles.input}
                onChangeText={ (newText) => setPassword(newText) }
                value={password}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
            />
            { password.length < 5 ? <Text style={styles.inputTitle}>Password must be longer than 5 characters</Text> : null}
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