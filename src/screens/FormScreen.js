import React from 'react';
import { StyleSheet, Text, TexInput, View } from 'react-native';

const FormScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#264C00',
    },
    title: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 24,
    },
});

export default FormScreen;