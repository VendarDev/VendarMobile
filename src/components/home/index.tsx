import React from "react";
import { Text, View } from "react-native";

function Home(navigation) {
    return (
        <View style={Styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const Styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
}


export default Home