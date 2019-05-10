"use strict";

import { SafeAreaView } from "react-navigation";
import { Platform } from "react-native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
