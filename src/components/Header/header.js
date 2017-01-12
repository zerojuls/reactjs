import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "root": {
        "display": "flex",
        "backgroundColor": "#2d84cc",
        "alignItems": "center",
        "justifyContent": "space-between",
        "color": "#fff",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "logo": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#fff",
        "fontSize": "14pt"
    }
});