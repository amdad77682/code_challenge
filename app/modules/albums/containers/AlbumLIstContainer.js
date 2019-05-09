/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class AlbumListContainer extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params = {} } = navigation.state;
    var headerLeft = null;

    var headerRight = null;
    return {
      title: "Albums",
      headerStyle: styles.navHeaderStyle,
      headerTitleStyle: styles.navHeaderTitleStyle,
      headerLeft: headerLeft,
      headerRight: headerRight
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
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
  },
  navHeaderStyle: {
    backgroundColor: "#333333"
  },
  navHeaderTitleStyle: StyleSheet.flatten([
    {
      color: "black"
    },
    { fontSize: 16 }
  ])
});
