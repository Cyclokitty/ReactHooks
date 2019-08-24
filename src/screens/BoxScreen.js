import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container1}>
                <View style={styles.viewBox1}></View>
                <View style={styles.viewBox2}></View>
            </View>
            <View style={styles.container2}>
                <View style={styles.viewBox3}></View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#474747',
        flex: 1,
    },
    container1: {
        borderWidth: 2,
        borderColor: 'yellow',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    container2: {
        borderWidth: 2,
        borderColor: 'yellow',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
    },
    viewBox1: {
        borderWidth: 1,
        borderColor: '#1D3A33',
        height: 75,
        width: 75,
        backgroundColor: '#a31a19',
    },
    viewBox2: {
        borderWidth: 1,
        borderColor: '#1D3A33',
        height: 75,
        width: 75,
        backgroundColor: '#19a31a',
    },
    viewBox3: {
        borderWidth: 1,
        borderColor: '#1D3A33',
        height: 75,
        width: 75,
        backgroundColor: '#1a19a3',
    },
});

export default BoxScreen;