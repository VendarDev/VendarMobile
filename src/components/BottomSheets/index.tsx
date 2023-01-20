import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Example() {
    const refRBSheet = useRef();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F8F9FB"
            }}
        >
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000",
                        width: 200,
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,

                    }
                }}
            >

            </RBSheet>
        </View>
    );
}