import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      backgroundColor: "#65558F",
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#fff",
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
  StyleSheet.create({
    imagewrapper: {
      justifyContent: "flex-end",
      alignItems: "center",
      height: getPercent(30, height),
      width: getPercent(100, width),
      marginBottom: getPercent(2, height),
    },
    lockimagecontainer: {
      height: getPercent(22, height),
      width: getPercent(22, height),
      overflow: "hidden",
    },
  });

export const Barheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(20, height),
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
      paddingTop: 20,
    },
    iconwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
    },
    iconbody: {
      height: getPercent(6, height),
      width: getPercent(5, height),
      // overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    barbody: {
      width: "100%",
      height: 5,
      backgroundColor: "#E8DEF8",
      borderRadius: 10,
    },
    progressbar: {
      height: 5,
      width: "30%",
      borderRadius: 100,
      backgroundColor: "#65558F",
    },
  });
