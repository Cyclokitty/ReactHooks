import React, { useReducer } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_increase': 
            return { ...state, counter:  state.counter + action.payload };
        case 'change_decrease':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter Reducer</Text>
            <TouchableOpacity 
                style={styles.counterBtn}
                onPress={() => dispatch({ type: 'change_increase', payload: COUNTER_INCREMENT })}
                >
                <Text style={styles.counterBtnText}>Increase</Text>
            </TouchableOpacity>
            
            <Text style={styles.counterTitle}>Current Count:</Text>
            <Text style={styles.counterText}>{state.counter}</Text>

            <TouchableOpacity 
                style={styles.counterBtn}
                onPress={() => dispatch({ type: 'change_decrease', payload: COUNTER_INCREMENT })}
                >
                <Text style={styles.counterBtnText}>Decrease</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26004C',
        padding: 10,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 5,
    },
    counterTitle: {
        color: '#fff',
        fontSize: 20,
    },
    counterText: {
        color: '#fff',
        fontSize: 30,
    },
    counterBtn: {
        backgroundColor: '#264c00',
        padding: 10,
        margin: 10,
        alignSelf: 'stretch',
    },
    counterBtnText: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
    },
});

export default CounterReducer;