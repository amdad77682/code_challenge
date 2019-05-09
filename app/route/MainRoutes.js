import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AlbumListContainer from "../modules/albums/containers/AlbumLIstContainer";
const albumsStack = createStackNavigator({
  albums: {
    screen: AlbumListContainer
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      albums: {
        screen: albumsStack
      }
    },
    {
      initialRouteName: "albums"
    }
  )
);
