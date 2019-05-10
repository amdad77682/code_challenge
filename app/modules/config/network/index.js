import axios from "axios";

import { NetInfo, AsyncStorage, Platform, NativeModules } from "react-native";
import Snackbar from "react-native-snackbar";

var instance = axios.create({});

const alertMessage = (message, buttonText = "", callback = () => {}) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    action: {
      title: buttonText,
      color: "green",
      onPress: callback
    }
  });
};
instance.interceptors.request.use(
  function(config) {
    if (Platform.OS == "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (!isConnected) {
          alertMessage("No internet connection", "RETRY");
        }
      });
    }
    // else {
    //   NativeModules.Network.isConnectedToNetwork("one", (err, r) => {
    //     if (r.isConnected == false) {
    //       alertMessage("No internet connection", "RETRY");
    //     }
    //   });
    // }
    return config;
  },
  function(error) {
    this.alertMessage("Something went wrong");
    return Promise.reject(error);
  }
);

export default instance;
