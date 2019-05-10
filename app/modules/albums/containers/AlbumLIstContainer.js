import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { getAlbumsData } from "../actions";
import { bindActionCreators } from "redux";
import { store } from "../../../store";
class AlbumListContainer extends Component {
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
  componentDidMount = () => {
    this.props.getAlbumsData((err, res) => {
      alert(res);
      console.log("res", res);
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    albums: store.albums
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAlbumsData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumListContainer);

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
      color: "#F5FCFF"
    },
    { fontSize: 16 }
  ])
});
