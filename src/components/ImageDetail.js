import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
    return (
        <View style={{ padding: 10 }}>
            <Image 
            source={props.imageSource}
            style={styles.imageStyle}
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.textScore}>Image Score: {props.imageScore}</Text>
        </View>                     
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textScore: {
        fontSize: 18
    }
});

export default ImageDetail;