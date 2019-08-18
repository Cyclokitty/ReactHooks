import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColourScreen = () => {

    const [swatch, setSwatch] = useState([]);

    const makeSwatch = () => {
        const red = getRandom();
        const green = getRandom();
        const blue = getRandom();
        const hexCode = rgbToHex(red, green, blue);
        const rgb = {rgbName: 'rgb(' + red + ', ' + green + ', ' + blue + ')', hexName: hexCode};
        setSwatch([...swatch, rgb]);
    }

    const getRandom = () => {
        return Math.floor(Math.random() * 256);
    }

    const colourToHex = (colour) => {
        let hex = colour.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return '#' + colourToHex(r) + colourToHex(g) + colourToHex(b);
    }

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Colour Screen</Text>
            <Button
                title="Generate Colour"
                onPress={() => makeSwatch()}
            />
            <FlatList
            data={swatch}
            keyExtractor={(item) => item.rgbName}
            renderItem={({ item }) => {
                return (
                <View style={styles.swatchContainer}>
                    <View style={{ height: 150, width: 150, backgroundColor: item.rgbName }}></View>
                    <View style={styles.swatchTextGroup}>                 
                        <Text style={styles.swatchText}>RGB: {item.rgbName}</Text>
                        <Text style={styles.swatchText}>Hex: {item.hexName}</Text>
                    </View>  
                </View>
                )
                }}
            
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FFD7',
        padding: 10,
    },
    title: {
        color: '#333',
        fontSize: 30,
        fontWeight: 'bold'
    }, 
    swatchContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 10,
        padding: 5,
    },
    swatchTextGroup: {
        flex: 1,
        flexDirection: 'column',
    },
    swatchText: {
        fontSize: 18,
    }   
});

export default ColourScreen;