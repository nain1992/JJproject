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
    imagewrapper: {
      justifyContent: "center",
      alignItems: "center",
      height: getPercent(40, height),
      width: getPercent(100, width),
    },
    lockimagecontainer: {
      height: getPercent(25, height),
      width: getPercent(25, height),
      overflow: "hidden",
    },
    btnswrapper: {
      flexDirection: "row",
      padding: 5,
      shadowColor: "#000",
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#fff",
      borderRadius: 100,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    Loginbtnbody: {
      height: getPercent(6.5, height),
      width: "50%",
      borderRadius: 100,
      backgroundColor: "#65558F",
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#fff",
      lineHeight: 25,
    },
    Signupbnbody: {
      height: getPercent(6.5, height),
      width: "50%",
      borderRadius: 100,
      backgroundColor: "#65558F",
      justifyContent: "center",
      alignItems: "center",
    },
    formwrapper: {
      height: getPercent(30, height),
      justifyContent: "center",
    },
    Signupformwrapper: {
      height: getPercent(45, height),
      justifyContent: "center",
    },
    standardbtnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
  });
