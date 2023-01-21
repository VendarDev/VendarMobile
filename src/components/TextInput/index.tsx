/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Text,
    View,
    TextInput,

} from 'react-native';

import Metrics from './src/config/metrics';

export default function App() {

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                placeholder="vendar@gmail.com"
            />
        </View>
    )


}

const Styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "F8F9FB"
    },
    input: {
        backgroundColor: "#FFFFFF",
        width: 327,
        height: 52,
        borderRadius: 8,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: "#E3E5E5"
    }

}
