import React from "react";
import { Text, View } from "react-native";



import Home from "./components/home";
import Buttons from "./components/buttons";

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function Navigator() {

    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Buttons" component={Buttons} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>


}

export default Navigator