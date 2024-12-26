import {
  View,
  useWindowDimensions,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Onboarding/main";
import { useState } from "react";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../globalComponents/Header";
import Agreemodal from "./component/Agreemodal";

const Onboarding = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [ismodalvisible, setIsmodalvisible] = useState(false);

  const handleAgreement = () => {
    setIsmodalvisible(true);
  };

  const handleContinue = () => {
    setIsmodalvisible(false);
    props?.navigation?.navigate("Documentscan");
  };
  let carddata = [
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../assets/3.png"),
    },
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../assets/3.png"),
    },
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../assets/3.png"),
    },
    {
      title: "List Item",
      lable: "Supporting line text lorem ipsum dolor sit amet, consectetur.",
      icon: require("../../assets/3.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraHeight={Platform.OS === "ios" ? 80 : 120}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Header image={require("../../assets/2.png")} />
          <Text style={styles.headertext}>
            The verification process is very simple.
          </Text>
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

          <View style={styles.standardbtnwrapper}>
            <StandardButton onPress={handleAgreement} title={"I Agree"} />
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      {ismodalvisible ? (
        <Agreemodal
          onCancel={() => setIsmodalvisible(false)}
          onContinue={handleContinue}
        />
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Onboarding);
