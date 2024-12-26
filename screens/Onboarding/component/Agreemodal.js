import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Modal,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../../middleware";

const Agreemodal = (props) => {
  let { onCancel, onContinue } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let carddata = [
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../../assets/3.png"),
    },
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../../assets/3.png"),
    },
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../../assets/3.png"),
    },
  ];

  return (
    <Modal transparent={true} animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <View style={styles.titlewrapper}>
          <View style={styles.iconbody1}>
            <Image
              source={require("../../../assets/3.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.labletext}>
            Do you have all the necessary documents available?
          </Text>
        </View>
        {carddata?.map((item, index) => {
          return (
            <View key={index} style={styles.cardbody}>
              <View style={styles.innerbody}>
                <Text style={styles.title}>{item?.title}</Text>
                <View style={styles.iconbody}>
                  <Image
                    source={item?.icon}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <Text style={styles.destext}>{item?.lable}</Text>
            </View>
          );
        })}
        <View style={styles.btnwrapper}>
          <TouchableOpacity onPress={onContinue} style={styles.Continuebtnbody}>
            <Text style={styles.btntext}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel} style={styles.Continuebtnbody}>
            <Text style={styles.btntext}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Agreemodal);
export const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(70, height),
      position: "absolute",
      backgroundColor: "#F7F2FA",
      borderRadius: 10,
      alignSelf: "center",
      bottom: 0,
      justifyContent: "space-evenly",
      padding: 10,
    },
    titlewrapper: {
      flexDirection: "row",
    },
    iconbody1: {
      height: 30,
      width: 30,
      overflow: "hidden",
      marginRight: 5,
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
    labletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#000000",
      lineHeight: 20,
      textAlign: "center",
    },
    btnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    Continuebtnbody: {
      height: getPercent(6, height),
      width: getPercent(45, width),
      borderRadius: 100,
      backgroundColor: "#65558F",
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: "#fff",
    },
  });
