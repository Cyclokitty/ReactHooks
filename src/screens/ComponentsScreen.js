import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = <Text>Laura</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.subText}>My name is {name}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 45
    },
    subText: {
        fontSize: 20,
        color: '#ff20ff',
        fontWeight: '100'
    }
});

export default ComponentsScreen;