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
import { styles as _styles } from "../../styles/Congrates/main";
import { useEffect, useState } from "react";
import Barheader from "../../globalComponents/Barheader";
import StandardButton from "../../globalComponents/StandardButton";

const Congrates = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <SafeAreaView style={styles.container}>
      <Barheader
        barwidth={"100%"}
        image={require("../../assets/3.png")}
        secondimage={require("../../assets/11.png")}
        thirdimage={require("../../assets/7.png")}
      />
      <Text style={styles.congratestext}>Congratulations</Text>
      <View style={styles.framebody}>
        <Image
          source={require("../../assets/8.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.passportpicturetextwrapper}>
        <Text style={styles.secondarytext}>
          All necessary documentation has been successfully uploaded. We are now
          verifying the documents provided. We will keep in contact with you via
          Email and Push notification as soon as the results are available.
          {"\n"}Thank you!
        </Text>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Continue"}
          onPress={() => props?.navigation?.navigate("Onboarding")}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Congrates);
