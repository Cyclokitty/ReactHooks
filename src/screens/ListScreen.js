import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Sam', age: 36 },
        { name: 'Jill', age: 28 },
        { name: 'Jess', age: 42  },
        { name: 'Gus', age: 46 },
        { name: 'Morrie', age: 57 },
        { name: 'Rod', age: 24 },
        { name: 'Luna', age: 65 },
        { name: 'Marc', age: 32 },
        { name: 'Tim', age: 51 },
        { name: 'Eva', age: 45 },
        { name: 'Sally', age: 39  },
        { name: 'Hank', age: 27 },
    ];
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Friends</Text>
            <FlatList 
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({ item }) =>  {
                    return <Text style={styles.textStyle}> {item.name} - Age {item.age} </Text>
                }}
            />
        </View>

    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    textStyle: {
        marginVertical: 30,
        fontSize: 16, 
    },
    title: {
        fontSize: 24,
        color: '#ea0179',
        alignSelf: 'center',
    }
})

export default ListScreen;