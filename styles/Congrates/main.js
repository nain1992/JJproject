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
    congratestext: {
      fontFamily: "Bold",
      fontSize: rf(25),
      color: "#000000",
      textAlign: "center",
      marginTop: 20,
    },
    framebody: {
      height: getPercent(35, height),
      width: getPercent(100, width),
      alignSelf: "center",
    },
    passportpicturetextwrapper: {
      flexDirection: "row",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      marginVertical: getPercent(3, height),
      width: getPercent(90, width),
      minHeight: getPercent(15, height),
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
    btnwrapper: {
      height: getPercent(10, height),
      justifyContent: "center",
      alignItems: "center",
    },
  });