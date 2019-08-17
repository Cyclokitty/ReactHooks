import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter Screen</Text>
            <Button 
            title='Increase'
            onPress={() => {setCounter(counter + 1);}}
            />
            <Button 
            title='Decrease'
            onPress={() => {setCounter(counter - 1);}}
            />           
            <Text>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
        padding: 10,
    },
    title: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 24,
    }
});

export default CounterScreen;