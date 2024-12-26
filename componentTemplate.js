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

const Allmemos = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return <View style={styles.container}></View>;
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Allmemos);
export const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
    },
  });
