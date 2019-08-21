import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hi There!</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Components')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Components Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('List')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to List Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Image')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Image Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Counter')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Counter Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Colour')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Colour Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Square')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Square Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ColourReducer')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Reducer Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CounterReducer')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Go to Counter Reducer Demo</Text>
                </TouchableOpacity>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#EA7201',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#0179EA',
        padding: 5,
        margin: 5
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        alignSelf: 'center'
    }
});

export default HomeScreen;