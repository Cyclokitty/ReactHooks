import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 3;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'change_red || 'change_green' || 'change_blue', payload: 3 || -3 }
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload };
        default: 
            return state;
    }    
}

const ColourReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reducer Screen</Text>
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOUR_INCREMENT })} 
                colour='red' 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOUR_INCREMENT })}
                colour='green' 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOUR_INCREMENT })}
                colour='blue' 
            />
            <View style={{ height: 150, width: 150, alignSelf: 'center', backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, borderColor: '#fff', borderWidth: 1 }}/>
            <Text style={styles.rgbText}>rgb({state.red}, {state.green}, {state.blue})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#00004c',
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

export default ColourReducer;