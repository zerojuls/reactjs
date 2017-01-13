import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "root": {
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "borderRadius": 5,
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "text": {
        "fontSize": "16pt",
        "fontWeight": "200"
    },
    "user": {
        "display": "flex",
        "alignItems": "center"
    },
    "avatar": {
        "width": 34,
        "height": 34,
        "borderRadius": "50%"
    },
    "displayName": {
        "fontWeight": "bold",
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5
    },
    "username": {
        "color": "#aaa"
    },
    "date": {
        "color": "#aaa",
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "fontSize": "8pt"
    },
    "buttons": {
        "display": "flex",
        "justifyContent": "flex-start",
        "color": "#aaa"
    },
    "icon": {
        "marginRight": 3
    }
});