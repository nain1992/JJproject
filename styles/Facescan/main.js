import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    passportpicturetextwrapper: {
      flexDirection: "row",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      marginVertical: getPercent(3, height),
      width: getPercent(90, width),
      height: getPercent(15, height),
      alignSelf: "center",
      backgroundColor: "#FEF7FF",
      padding: 10,
      borderRadius: 10,
    },

    labletext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#1D1B20",
      lineHeight: 25,
      letterSpacing: 0.5,
    },
    secondarytext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#49454F",
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    iconbody: {
      height: 30,
      width: 30,
      overflow: "hidden",
    },
    camerawrapper: {
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center",
    },
    camerabody: {
      height: getPercent(45, height),
      width: getPercent(30, height),
      borderRadius: 100,
      alignSelf: "center",
    },
    btnbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      backgroundColor: "#65558F",
      alignSelf: "center",
      borderRadius: 100,
    },
    previewImage: {
      height: getPercent(50, height),
      width: getPercent(90, width),
      borderRadius: 10,
      alignSelf: "center",
    },
    previewWrapper: {
      flex: 1,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      top: getPercent(40, height),
      alignSelf: "center",
    },
  });
