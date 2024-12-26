import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Headerstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Header = (props) => {
  let { image } = props;
  let { width, height } = useWindowDimensions();
  let styles = Headerstyles({ width, height });

  return (
    <View style={styles.imagewrapper}>
      <View style={styles.lockimagecontainer}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);
