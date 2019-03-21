/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Alert } from "react-native";
import { SelectableText } from "./SelectableText.js";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SelectableText
          selectable={true}
          menuItems={["Foo", "Bar"]}
          onSelection={console.log}
          style={styles.welcome}
          highlightColor={[178, 236, 255]}
        >
          Welcome to React Native!
        </SelectableText>
        <SelectableText
          selectable={true}
          menuItems={["Astro", "Coders"]}
          onSelection={console.log}
          style={styles.instructions}
          highlightColor={[178, 236, 255]}
        >
          To get started, edit App.js
        </SelectableText>
        <SelectableText
          selectable={true}
          menuItems={["Crave", "Star", "Damage"]}
          onSelection={console.log}
          style={styles.instructions}
          highlightColor={[178, 236, 255]}
        >
          {instructions}
        </SelectableText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
