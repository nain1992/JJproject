import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Barheaderstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Barheader = (props) => {
  let { image, secondimage, thirdimage, barwidth } = props;
  let { width, height } = useWindowDimensions();
  let styles = Barheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.iconwrapper}>
        <View style={styles.iconbody}>
          <Image
            source={image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.iconbody}>
          <Image
            source={secondimage}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.iconbody}>
          <Image
            source={thirdimage}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.barbody}>
        <View
          style={[
            styles.progressbar,
            {
              width: barwidth,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Barheader);
