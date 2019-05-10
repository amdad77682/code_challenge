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
      loading: false,
      query: "",
      albums: []
    };
  }
  componentDidMount = () => {
    this.setState({ loading: true });
    this.props.getAlbumsData((err, res) => {
      if (res) {
        this.setState({ albums: res, loading: false });
      }
    });
  };

  setQuery = query => {
    this.setState({
      query: query,
      albums: this.props.albumsList.filter(item => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    });
  };
  onSearch = () => {
    this.setState({
      albums: this.props.albumsList.filter(item => {
        return (
          item.title.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1
        );
      })
    });
  };
  reset = () => {
    this.setState({ query: "", albums: this.props.albumsList });
  };

  render() {
    return (
      <AlbumListComponent
        albumsList={this.state.albums}
        loading={this.state.loading}
        query={this.state.query}
        setQuery={this.setQuery}
        onSearch={this.onSearch}
        reset={this.reset}
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
    backgroundColor: "#F5FCFF"
  },
  navHeaderTitleStyle: StyleSheet.flatten([
    {
      color: "#333333"
    },
    { fontSize: 16 }
  ])
});
