import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const onIncrease = (col) => {       
        switch(col) {
            case 'red':
                if (red + 1 > 255) {
                    return;
                } else {
                    return setRed(red + 1);
                }               
            case 'green':
                    if (green + 1 > 255) {
                        return;
                    } else {
                        return setGreen(green + 1);
                    }
            case 'blue':
                    if (blue + 1 > 255) {
                        return;
                    } else {
                        return setBlue(blue + 1);
                    }
            default: 
                console.log(`uh, oh problem with ${col} increase function`);
        }
    }; 

    const onDecrease = (col) => {
        
        switch(col) {
            case 'red':
                if (red - 1 < 0) {
                    return;
                } else {
                    return setRed(red - 1);
                }               
            case 'green':
                    if (green - 1 < 0) {
                        return;
                    } else {
                        return setGreen(green - 1);
                    }
            case 'blue':
                    if (blue - 1 < 0) {
                        return;
                    } else {
                        return setBlue(blue - 1);
                    }
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
            <View style={{ height: 150, width: 150, alignSelf: 'center', backgroundColor: `rgb(${red}, ${green}, ${blue})`, borderColor: '#fff', borderWidth: 1 }}/>
            <Text style={styles.rgbText}>rgb({red}, {green}, {blue})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#333',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    rgbText: {
        color: '#fff',
        fontSize: 14,
        alignSelf: 'center',
    }
});

export default SquareScreen;