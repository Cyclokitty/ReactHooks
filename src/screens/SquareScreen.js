import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const onIncrease = (col) => {
        switch(col) {
            case 'red':
                return setRed(red + 1);
            case 'green':
                return setGreen(green + 1);
            case 'blue':
                return setBlue(blue + 1);
            default: 
                console.log(`uh, oh problem with ${col} increase function`);
        }
    }; 

    const onDecrease = (col) => {
        switch(col) {
            case 'red':
                return setRed(red - 1);
            case 'green':
                return setGreen(green - 1);
            case 'blue':
                return setBlue(blue - 1);
            default: 
                console.log(`uh, oh problem with ${col} decrease function`);
        }
    }; 
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Square Screen</Text>
            <ColourCounter 
                onIncrease={() => onIncrease('red')}  
                onDecrease={() => onDecrease('red')} 
                colour='red' 
            />
            <ColourCounter 
                onIncrease={() => onIncrease('green')}  
                onDecrease={() => onDecrease('green')}
                colour='green' 
            />
            <ColourCounter 
                onIncrease={() => onIncrease('blue')}  
                onDecrease={() => onDecrease('blue')}
                colour='blue' 
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch',
        backgroundColor: '#333',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});

export default SquareScreen;