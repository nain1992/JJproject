import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../../middleware";

const Form = (props) => {
  let { title, customstyles, icon, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{title}</Text>
      <View style={[styles.inputbody, customstyles]}>
        <TextInput
          style={styles.input}
          {...props}
          placeholderTextColor={"#222"}
        />
        <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Form);
export const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      //   marginVertical: 10,
    },
    inputbody: {
      height: getPercent(6, height),
      width: getPercent(90, width),
      alignSelf: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "rgba(73, 69, 79, 0.28)",
      paddingHorizontal: 10,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#49454F",
      lineHeight: 35,
      paddingLeft: getPercent(5, width),
    },
    input: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#000000",
    },
  });
