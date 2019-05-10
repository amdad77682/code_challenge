import { StyleSheet, Platform } from "react-native";

export const SHADOW = StyleSheet.create({
  elevation_1: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0
      },
      android: {
        elevation: 1
      }
    })
  },
  elevation_2: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41
      },
      android: {
        elevation: 2
      }
    })
  },
  elevation_3: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
      },
      android: {
        elevation: 3
      }
    })
  },
  elevation_4: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
      },
      android: {
        elevation: 4
      }
    })
  },
  elevation_6: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65
      },
      android: {
        elevation: 6
      }
    })
  },
  elevation_8: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65
      },
      android: {
        elevation: 8
      }
    })
  },
  elevation_12: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49
      },
      android: {
        elevation: 12
      }
    })
  },
  elevation_16: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32
      },
      android: {
        elevation: 16
      }
    })
  },
  elevation_24: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0
      },
      android: {
        elevation: 24
      }
    })
  }
});
