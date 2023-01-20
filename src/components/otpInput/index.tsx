/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
    Text,
    View,
    TextInput,

} from 'react-native';

import Metrics from './src/config/metrics';

export default function App() {

    const input_one = useRef()
    const input_two = useRef()
    const input_three = useRef()
    const input_four = useRef()
    const input_five = useRef()
    const input_six = useRef()

    return (
        <View style={Styles.container}>

            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                onChangeText={(text) => {
                    if (text.length > 0) {
                        input_two.current.focus()
                    }

                }}
                ref={input_one}
            />


            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                ref={input_two}

                onChangeText={(text) => {
                    if (text.length > 0) {
                        input_three.current.focus()
                    } else {
                        input_one.current.focus()
                    }

                }}

            />


            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                ref={input_three}

                onChangeText={(text) => {
                    if (text.length > 0) {
                        input_four.current.focus()
                    } else {
                        input_two.current.focus()
                    }
                }}
            />
            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                ref={input_four}
                onChangeText={(text) => {
                    if (text.length > 0) {
                        input_five.current.focus();
                    } else {
                        input_three.current.focus()
                    }
                }}
            />
            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                ref={input_five}
                onChangeText={(text) => {
                    if (text.length > 0) {
                        input_six.current.focus()
                    } else {
                        input_four.current.focus()
                    }
                }}
            />
            <TextInput
                style={Styles.input}
                maxLength={1}
                inputMode={"numeric"}
                ref={input_six}
                onChangeText={(text) => {
                    if (text.length > 0) {
                        // input_five.current.focus()
                    } else {
                        input_five.current.focus()
                    }
                }}
            />
        </View>
    )


}

const Styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "F8F9FB",
        flexDirection: "row",
    },
    input: {
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 52,
        borderRadius: 8,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: "#E3E5E5",
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        fontWeight: "bold"
    }

}
