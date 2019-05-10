import React from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import { GlobalStyles } from "../config/styles";

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render = () => (
    <TextInput
      {...this.props}
      returnKeyType="search"
      autoCorrect={false}
      spellCheck={false}
      style={[styles.input, this.props.customStyles]}
      underlineColorAndroid="transparent"
      editable={this.props.editable}
      maxLength={100}
      onChangeText={input => this.props.onChangeText(input)}
      value={this.props.value}
      placeholder={this.props.placeholder}
      placeholderTextColor={GlobalStyles.COLOR_DARK}
      keyboardType={this.props.keyboardType || "default"}
      defaultValue={this.props.defaultValue ? this.props.defaultValue : ""}
      onSubmitEditing={this.props.searchSubmit}
      autoCapitalize="none"
    />
  );
}
export class SearchField extends React.Component {
  static defaultProps = {
    value: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={[
              styles.iconContainer,
              { paddingLeft: GlobalStyles.PADDING }
            ]}
            onPress={this.props.onSearchPress}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../../public/images/search_black_no_padding.png")}
            />
          </View>
          <InputField
            onChangeText={this.props.onChangeText}
            customStyles={{
              marginBottom: 0,
              paddingLeft: 0
              // fontWeight: "bold"
            }}
            placeholder={this.props.placeholder}
            value={this.props.value}
            searchSubmit={this.props.onSearchPress}
          />
          {this.props.value.length > 0 && this.props.onCrossPress ? (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={this.props.onCrossPress}
            >
              <Image
                style={{ height: 15, width: 15 }}
                source={require("../../../public/images/close_black.png")}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 12
  },
  input: {
    backgroundColor: "#e1e8ee",
    marginBottom: 2,
    borderRadius: 25,
    paddingLeft: GlobalStyles.PADDING,
    paddingRight: GlobalStyles.PADDING,
    height: 40,
    flex: 1
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#e1e8ee",
    borderRadius: 25
  },
  iconContainer: {
    padding: GlobalStyles.PADDING,
    paddingLeft: 0,
    paddingVertical: GlobalStyles.PADDING * 0.75,
    alignItems: "center"
  },
  icon: { width: 20, height: 20 }
};
