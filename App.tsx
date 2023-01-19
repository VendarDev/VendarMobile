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
  TouchableOpacity
} from 'react-native';

import Metrics from './src/config/metrics';

export default function App() {

  return (
    <View style={Styles.container}>
      <Text>Hello</Text>
      <TouchableOpacity style={Styles.disabledBtn} activeOpacity={0.9}>
        <Text style={Styles.BtnText}>Continue</Text>
      </TouchableOpacity>
      <View style={{ margin: 10 }}></View>
      <TouchableOpacity style={Styles.activeBtn} activeOpacity={0.7}>
        <Text style={Styles.BtnText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ margin: 10 }}></View>
      <TouchableOpacity style={Styles.outlineButton} activeOpacity={0.5}>
        <Text style={Styles.OutlineBtnText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ margin: 10 }}></View>
      <TouchableOpacity style={Styles.inactiveButton} activeOpacity={0.9}>
        <Text style={Styles.OutlineBtnText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ margin: 10 }}></View>

      <TouchableOpacity style={Styles.whiteButton} activeOpacity={0.9}>
        <Text style={Styles.OutlineBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  )


}

const Styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  disabledBtn: {
    backgroundColor: "#8DB8BF",
    // height: Metrics.Height7per,
    // width: Metrics.width80per,
    height: 52,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  activeBtn: {
    backgroundColor: "#01525F",
    // height: Metrics.Height7per,
    // width: Metrics.width80per,
    height: 52,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  outlineButton: {
    borderWidth: 2,
    borderColor: "#01525F",
    // height: Metrics.Height7per,
    // width: Metrics.width80per,
    height: 52,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  inactiveButton: {
    backgroundColor: "#E4EEEF",
    // height: Metrics.Height7per,
    // width: Metrics.width80per,
    height: 52,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  whiteButton: {
    backgroundColor: "#FFFFFF",
    // height: Metrics.Height7per,
    // width: Metrics.width80per,
    height: 52,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  BtnText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  OutlineBtnText: {
    color: "#01525F",
    fontWeight: "bold"
  }
}
