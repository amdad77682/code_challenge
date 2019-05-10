import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../config/styles";

const messageForRecord = "Please add new record.",
  messageForSearch = "No results matching your search were found.",
  messageForInternet = " Please check your connection and try again.";

export class EmptyListView extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { message, type } = this.props;
    return (
      <View
        animation="fadeInDown"
        delay={200}
        useNativeDriver={true}
        style={[styles.container]}
      >
        <Image
          styles={styles.icon}
          source={require("../../../public/images/no_record.png")}
        />
        <View style={styles.textContainer}>
          <Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            useNativeDriver={true}
            //style={[FONTSIZE.text_13, FONT.semibold, STYLES.secondaryTextColor]}
          >
            {type === "record"
              ? messageForRecord
              : type === "search"
              ? messageForSearch
              : type === "connection"
              ? messageForInternet
              : message}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: { width: 80, height: 80 },
  textContainer: {
    marginTop: 12,
    marginBottom: 12
  },
  text: {
    textAlign: "center",
    color: GlobalStyles.COLOR_DARKER
  }
});
