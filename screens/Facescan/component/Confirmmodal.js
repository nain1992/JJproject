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

const Confirmmodal = (props) => {
  let { onCancel, onContinue } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Modal transparent={true} animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/6.png")}
            style={{ height: "70%", width: "70%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.btnwrapper}>
          <TouchableOpacity onPress={onContinue} style={styles.Continuebtnbody}>
            <Text style={styles.btntext}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Confirmmodal);
export const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(35, height),
      width: getPercent(100, width),
      position: "absolute",
      zIndex: 9999,
      backgroundColor: "#F7F2FA",
      borderRadius: 10,
      alignSelf: "center",
      bottom: 0,
      justifyContent: "space-evenly",
      padding: 10,
    },
    imagebody: {
      height: getPercent(14, height),
      width: getPercent(14, height),
      overflow: "hidden",
      alignSelf: "center",
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#65558F",
      justifyContent: "center",
      alignItems: "center",
    },
    btnwrapper: {
      alignItems: "center",
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
