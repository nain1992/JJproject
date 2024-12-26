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
import { styles as _styles } from "../../styles/Register/main";
import { useState } from "react";
import Form from "./components/Form";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Entypo from "@expo/vector-icons/Entypo";
import Header from "../../globalComponents/Header";

const Register = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [activebtn, setActivebtn] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [registeremail, setRegisteremail] = useState("");
  const [registerpassword, setRegisterpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isloginpasswordvisible, setIsloginpasswordvisible] = useState(true);
  const [issignuppasswordvisible, setIssignuppasswordvisible] = useState(true);
  const [isconfirmpasswordvisible, setIsconfirmpasswordvisible] =
    useState(true);

  const handleRegister = () => {
    props?.navigation?.navigate("Onboarding");
  };
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
          <Header image={require("../../assets/1.png")} />
          <View style={styles.btnswrapper}>
            <TouchableOpacity
              onPress={() => setActivebtn(1)}
              style={[
                styles.Loginbtnbody,
                {
                  backgroundColor: activebtn === 1 ? "#65558F" : "#fff",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color: activebtn === 1 ? "#fff" : "#222",
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActivebtn(2)}
              style={[
                styles.Signupbnbody,
                {
                  backgroundColor: activebtn === 2 ? "#65558F" : "#fff",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color: activebtn === 2 ? "#fff" : "#222",
                  },
                ]}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          {activebtn === 1 ? (
            <View style={styles.formwrapper}>
              <Form
                title={"Email"}
                placeholder="Enter Email Address"
                value={email}
                onChange={(val) => setEmail(val)}
              />
              <Form
                title={"Password"}
                placeholder="Enter Password"
                onPress={() =>
                  setIsloginpasswordvisible(!isloginpasswordvisible)
                }
                value={password}
                onChange={(val) => setPassword(val)}
                secureTextEntry={isloginpasswordvisible ? true : false}
                icon={
                  isloginpasswordvisible ? (
                    <Entypo name="eye-with-line" size={20} color="#222" />
                  ) : (
                    <Entypo name="eye" size={20} color="#222" />
                  )
                }
              />
            </View>
          ) : (
            <View style={styles.Signupformwrapper}>
              <Form
                title={"Username"}
                placeholder="Enter Your Name"
                value={name}
                onChange={(val) => setName(val)}
              />
              <Form
                title={"Email"}
                placeholder="Enter Your Email"
                value={registeremail}
                onChange={(val) => setRegisteremail(val)}
              />
              <Form
                title={"Password"}
                placeholder="Enter Password"
                value={registerpassword}
                onChange={(val) => setRegisterpassword(val)}
                onPress={() =>
                  setIssignuppasswordvisible(!issignuppasswordvisible)
                }
                secureTextEntry={issignuppasswordvisible ? true : false}
                icon={
                  issignuppasswordvisible ? (
                    <Entypo name="eye-with-line" size={20} color="#222" />
                  ) : (
                    <Entypo name="eye" size={20} color="#222" />
                  )
                }
              />
              <Form
                title={"Confirm Password"}
                placeholder="Enter Confirm Password"
                value={confirmpassword}
                onChange={(val) => setConfirmpassword(val)}
                onPress={() =>
                  setIsconfirmpasswordvisible(!isconfirmpasswordvisible)
                }
                secureTextEntry={isconfirmpasswordvisible ? true : false}
                icon={
                  isconfirmpasswordvisible ? (
                    <Entypo name="eye-with-line" size={20} color="#222" />
                  ) : (
                    <Entypo name="eye" size={20} color="#222" />
                  )
                }
              />
            </View>
          )}
          <View style={styles.standardbtnwrapper}>
            <StandardButton
              onPress={handleRegister}
              title={activebtn === 1 ? "Signin" : "Signup"}
            />
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Register);
