import {
  View,
  useWindowDimensions,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Documentscan/main";
import { useEffect, useState } from "react";
import Barheader from "../../globalComponents/Barheader";
import { Camera, CameraView } from "expo-camera";
import Continuemodal from "./component/Continuemodal";
import Confirmmodal from "./component/Confirmmodal";
import { getPercent } from "../../middleware";

const Documentscan = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const [isconfirmmodalvisible, setIsconfirmmodalvisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  const handleCapture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);
      console.log("Captured photo URI:", photo.uri);
      setIsmodalvisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Barheader
        barwidth={"35%"}
        image={require("../../assets/3.png")}
        secondimage={require("../../assets/9.png")}
        thirdimage={require("../../assets/10.png")}
      />
      <View style={styles.passportpicturetextwrapper}>
        <View style={{ width: "90%" }}>
          <Text style={styles.labletext}>Passport Picture</Text>
          <Text style={styles.secondarytext}>
            Take a picture of your passport. Make sure the information can be
            read.
          </Text>
        </View>
        <View style={styles.iconbody}>
          <Image
            source={require("../../assets/3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.camerawrapper}>
        <CameraView
          style={styles.camerabody}
          ref={(ref) => setCameraRef(ref)}
          //   type={Camera.Constants.Type.back}
        />
      </View>
      <TouchableOpacity
        style={styles.btnbody}
        onPress={handleCapture}
      ></TouchableOpacity>
      {capturedImage && (
        <View style={styles.previewWrapper}>
          <Image
            source={{ uri: capturedImage }}
            style={styles.previewImage}
            resizeMode="cover"
          />
        </View>
      )}
      {ismodalvisible ? (
        <Continuemodal
          onCancel={() => setIsmodalvisible(false)}
          onContinue={() => {
            setIsmodalvisible(false);
            setIsconfirmmodalvisible(true);
          }}
        />
      ) : null}
      {isconfirmmodalvisible ? (
        <Confirmmodal
          onContinue={() => {
            setIsconfirmmodalvisible(false);
            props?.navigation?.navigate("Facescan");
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Documentscan);
