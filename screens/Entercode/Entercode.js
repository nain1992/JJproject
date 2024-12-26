import {
  View,
  useWindowDimensions,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Entercode/main";
import { useEffect, useState } from "react";
import Barheader from "../../globalComponents/Barheader";
import Continuemodal from "./component/Continuemodal";
import Codefield from "./component/Codefield";
import StandardButton from "../../globalComponents/StandardButton";

const Entercode = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [ismodalvisible, setIsmodalvisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Barheader
        barwidth={"100%"}
        image={require("../../assets/3.png")}
        secondimage={require("../../assets/11.png")}
        thirdimage={require("../../assets/7.png")}
      />
      <View style={styles.passportpicturetextwrapper}>
        <View style={{ width: "80%" }}>
          <Text style={styles.labletext}>Provide your share code</Text>
          <Text style={styles.secondarytext}>
            Provide your 9 digits share code. Please remember that the share
            code must not be expired.
          </Text>
        </View>
        <View style={styles.iconbody}>
          <Image
            source={require("../../assets/7.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Codefield />
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Continue"}
          onPress={() => setIsmodalvisible(true)}
        />
      </View>
      {ismodalvisible ? (
        <Continuemodal
          onCancel={() => setIsmodalvisible(false)}
          onContinue={() => {
            setIsmodalvisible(false);
            props?.navigation?.navigate("Congrates");
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Entercode);
