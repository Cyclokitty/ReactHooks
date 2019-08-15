import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Feed Freddie the Cat!!
                </Text>
                <Text style={styles.subTitle}>
                    LOTS!! NOW!!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EA7201',
    },
    title: {
        color: '#0179EA',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#0179EA',
        fontSize: 24,
        fontWeight: 'bold'
    }
})