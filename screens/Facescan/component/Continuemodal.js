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

const Continuemodal = (props) => {
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
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/5.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textbody}>Do you want to re-take the selfie?</Text>
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
export default connect(mapStateToProps, {})(Continuemodal);
export const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(35, height),
      position: "absolute",
      zIndex: 9999,
      backgroundColor: "#F7F2FA",
      width: getPercent(100, width),
      borderRadius: 10,
      alignSelf: "center",
      bottom: 0,
      justifyContent: "space-evenly",
      padding: 10,
    },
    imagebody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      alignSelf: "center",
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
    textbody: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#0000000",
      textAlign: "center",
      lineHeight: 25,
      paddingHorizontal: 10,
    },
  });
