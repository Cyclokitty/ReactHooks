import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 3;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colourToChange: 'red || 'green' || 'blue', amoount: 3 || -3 }
    switch(action.colourToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 
            ? state
            : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state
            : { ...state, blue: state.blue + action.amount };
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
                onIncrease={() => dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT })} 
                colour='red' 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT })}
                colour='green' 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT })}  
                onDecrease={() => dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT })}
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