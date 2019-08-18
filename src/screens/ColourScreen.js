import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColourScreen = () => {

    const [swatch, setSwatch] = useState([]);

    const makeSwatch = () => {
        const red = getRandom();
        const green = getRandom();
        const blue = getRandom();
        const rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
        console.log(rgb);
        console.log({swatch});
        setSwatch(rgb);
    }

    const getRandom = () => {
        return Math.floor(Math.random() * (255 - 0) + 0);
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
            keyExtractor={(swatch) => swatch}
            renderItem={({item}) => {
                <Text style={{ height: 50, width: 50, backgroundColor: {item} }}></Text>
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
});

export default ColourScreen;