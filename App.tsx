/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  VirtualizedList
} from 'react-native';

const arrowLeft = require("./src/icons/chevron-left.png")
const arrowDown = require("./src/icons/arrowDown.png")
const searchIcon = require("./src/icons/search.png")

const list = [
  {
    id: 1,
    title: "Warri",
  },
  {
    id: 2,
    title: "Aba",
  },
  {
    id: 3,
    title: "Port Harcourt",
  },
  {
    id: 4,
    title: "Nembe",
  },
  {
    id: 5,
    title: "warri",
  },
  {
    id: 6,
    title: "Lagos",
  },
  {
    id: 7,
    title: "Kogi",
  },
  {
    id: 8,
    title: "warri",
  },
  {
    id: 9,
    title: "Lagos",
  },
  {
    id: 10,
    title: "Kogi",
  },
]

type ItemData = {
  id: string;
  title: string;
};

const getItem = (data, index) => {
  return data[index]
}

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{title}</Text>
  </View>
);


const ListHeader = ({ Pressed }) => {
  return (
    <View style={{ marginTop: 50, marginBottom: 10, alignSelf: "stretch" }}>
      <TouchableOpacity onPress={() => {
        Pressed()
      }}
        style={{ left: 10, marginBottom: 10 }}
      >
        <Image source={arrowLeft} />
      </TouchableOpacity>

      <View style={Styles.headerCoat}>
        <View style={{ flexDirection: "row", margin: 0 }}>
          <Image source={searchIcon} style={{ zIndex: 1, left: 30, alignSelf: "center", height: 20, width: 20, margin: 0 }} />
          <TextInput style={Styles.input}
            placeholder={"Search State"}
          />
        </View>

      </View>

    </View>
  )
}

export default function App() {
  const [showList, setList] = useState(false)
  Pressed = () => {
    setList(false)
  }

  return (
    <View style={Styles.container}>
      {
        showList ?
          <VirtualizedList
            data={list}
            initialNumToRender={4}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            getItemCount={list => list.length}
            getItem={getItem}
            ListHeaderComponent={<ListHeader Pressed={Pressed} />}
          />
          :

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              setList(true);
            }}
            activeOpacity={0.8} >
            <View style={Styles.coat} >
              <Text style={Styles.selectText}>Select State</Text>
            </View>
            <Image source={arrowDown} style={Styles.selectIcon} />

          </TouchableOpacity>
      }



    </View>
  )


}

const Styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FB",

  },
  coat: {
    backgroundColor: "#FFFFFF",
    width: 327,
    height: 52,
    borderRadius: 8,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: "#E3E5E5",
    alignItems: "flex-start",
    justifyContent: "center",
    // alignSelf: "center"
  },
  selectText: {
    justifySelf: "flex-start",
    fontSize: 16,
    color: "#D1D1D1",
  },
  selectIcon: {
    zIndex: 1,
    right: 30
  },
  item: {
    height: 45,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E3E5E5",
    // alignSelf: "stretch",
    width: 330,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    color: "#6D6D6D",
    fontSize: 16,
    alignSelf: "flex-start"
  },
  headerCoat: {
    // width: 328,
  },
  input: {
    backgroundColor: "#FFFFFF",
    width: 327,
    // alignSelf: "stretch",
    height: 52,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#E3E5E5",
    paddingLeft: 40,
    paddingRight: 10
  },

}
