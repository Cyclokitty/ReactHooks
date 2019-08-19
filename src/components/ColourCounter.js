import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => onIncrease()}>
                <Text style={styles.btnText}>More: {colour}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => onDecrease()}>
                <Text style={styles.btnText}>Less: {colour}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5
    },
    btnText: {
        color: '#f630b7',
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

export default ColourCounter;