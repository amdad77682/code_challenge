import React from "react";
import { View, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../config/styles";

export class BarsLoader extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return false;
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator
          color={this.props.loaderColor || GlobalStyles.COLOR_GRAY}
          size="small"
        />
      </View>
    );
  }
}
