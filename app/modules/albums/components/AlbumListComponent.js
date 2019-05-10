import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import { GlobalStyles } from "../../config/styles";
import { BarsLoader } from "../../common/BarsLoader";
const { width } = Dimensions.get("window");
export default class AlbumListComponent extends Component {
  renderItem = item => {
    console.log(item);

    return (
      <View style={{ margin: GlobalStyles.PADDING }}>
        <View
          style={[
            GlobalStyles.FLEX_ROW,

            {
              backgroundColor: GlobalStyles.COLOR_LIGHTEST
            }
          ]}
        >
          <Image
            style={{ height: 60, width: 70, marginRight: 10 }}
            resizeMode="center"
            source={{ uri: item.item.thumbnail_image }}
          />
          <View>
            <Text
              style={[
                {
                  padding: GlobalStyles.PADDING / 2,
                  fontSize: GlobalStyles.FONT_SIZE_LARGE
                }
              ]}
            >
              {item.item.title}
            </Text>
            <Text style={{ padding: GlobalStyles.PADDING / 2 }}>
              {item.item.artist}
            </Text>
          </View>
        </View>
        <Image
          style={{ height: 105, width: "100%" }}
          //resizeMode="center"
          source={{ uri: item.item.image }}
        />
      </View>
    );
  };
  render() {
    console.log(this.props.albumsList);

    return (
      <View style={styles.container}>
        {!this.props.loading ? (
          <FlatList
            //extraData={this.state}
            data={this.props.albumsList}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
        ) : (
          <BarsLoader />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
