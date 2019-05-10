import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { getAlbumsData } from "../actions";
import { bindActionCreators } from "redux";
import { store } from "../../../store";
import AlbumListComponent from "../components/AlbumListComponent";

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
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }
  componentDidMount = () => {
    this.setState({ loading: true });
    this.props.getAlbumsData((err, res) => {
      if (res) {
        this.setState({ loading: false });
      }
    });
  };
  render() {
    return (
      <AlbumListComponent
        albumsList={this.props.albumsList}
        loading={this.state.loading}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    albumsList: store.albums.albumsList
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
