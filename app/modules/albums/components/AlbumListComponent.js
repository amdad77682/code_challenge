import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { GlobalStyles } from "../../config/styles";
import { BarsLoader } from "../../common/BarsLoader";
import { SHADOW } from "../../config/styles/shadow";
import { SearchField } from "../../common/SearchField";
import { EmptyListView } from "../../common/EmptyListView";
const { width } = Dimensions.get("window");
export default class AlbumListComponent extends Component {
  renderItem = item => {
    console.log(item);

    return (
      <View
        style={[
          SHADOW.elevation_8,
          {
            marginLeft: GlobalStyles.PADDING,
            marginRight: GlobalStyles.PADDING,
            marginTop: 10
          }
        ]}
      >
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
          resizeMode="stretch"
          source={{ uri: item.item.image }}
        />
      </View>
    );
  };
  render() {
    console.log(this.props.albumsList);

    return (
      <View style={styles.container}>
        <SearchField
          customStyles={{
            flex: 1,
            marginBottom: 0,
            shadowRadius: 0,
            shadowOpacity: 0,
            height: 42
          }}
          onChangeText={this.props.setQuery}
          placeholder={"Search for album"}
          onSearchPress={this.props.onSearch}
          onCrossPress={this.props.reset}
          value={this.props.query}
          returnKeyType="done"
        />

        {!this.props.loading ? (
          <ScrollView>
            <FlatList
              //extraData={this.state}
              data={this.props.albumsList}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderItem}
              contentContainerStyle={[
                { flexGrow: 1, marginBottom: 20 },
                this.props.albumsList.length
                  ? null
                  : { justifyContent: "center" }
              ]}
              ListEmptyComponent={<EmptyListView message="No album found" />}
            />
          </ScrollView>
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
