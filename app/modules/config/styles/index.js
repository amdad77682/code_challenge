import Dimensions from "Dimensions";

const x = Dimensions.get("window").width,
  y = Dimensions.get("window").height;
const ratioX = x <= 320 ? 0.75 : x < 1024 ? 0.875 : 1.25;

const base_unit = 16,
  unit = base_unit * ratioX;
const em = value => {
  return unit * value;
};
export const GlobalStyles = {
  FLEX_1: { flex: 1 },
  FLEX_ROW: { flexDirection: "row" },
  FLEX_COL: { flexDirection: "column" },
  J_CENTER: { justifyContent: "center" },
  J_START: { justifyContent: "flex-start" },
  J_END: { justifyContent: "flex-end" },
  J_SPACE_BETWEEN: { justifyContent: "space-between" },
  J_SPACE_AROUND: { justifyContent: "space-around" },
  A_CENTER: { alignItems: "center" },
  A_START: { alignItems: "flex-start" },
  A_END: { alignItems: "flex-end" },
  SECONDARY_TEXT_COLOR: { color: "#757575" },
  PRIMARY_TEXT_COLOR: { color: "#212121" },
  COLOR_DIVIDER: "#BDBDBD",
  PADDING: em(1), // 12
  COLOR_LIGHT: "#f0f0f0",
  COLOR_LIGHTER: "#f5f5f5",
  COLOR_LIGHTEST: "#ffffff",
  COLOR_GRAY: "#777",
  COLOR_DARK: "#37474F",
  COLOR_DARKER: "#263238",
  COLOR_DARKEST: "#212121",
  COLOR_PRIMARY: "#C0001D",
  COLOR_SECONDARY: "#00a651",
  COLOR_TERTIARY: "#4285F4",
  COLOR_QUATERNARY: "#e67e22",
  FONT_SIZE_LARGEST: em(1.8), // 21
  FONT_SIZE_LARGER: em(1.6), // 18
  FONT_SIZE_LARGE: em(1.3), // 15
  FONT_SIZE: em(1), // 12
  FONT_SIZE_SMALL: em(0.9), // 10.5
  FONT_SIZE_SMALLER: em(0.8), // 9
  FONT_SIZE_SMALLEST: em(0.6)
};
