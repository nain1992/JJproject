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
    headertext: {
      fontFamily: "Medium",
      fontSize: rf(20),
      color: "#000000",
      lineHeight: 25,
      textAlign: "center",
      paddingHorizontal: getPercent(5, width),
      marginBottom: 10,
    },
    standardbtnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },

    cardbody: {
      minHeight: getPercent(11, height),
      width: getPercent(90, width),
      alignSelf: "center",
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: "#FEF7FF",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      padding: 10,
    },
    innerbody: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#1D1B20",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    destext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#49454F",
      lineHeight: 20,
    },
  });
