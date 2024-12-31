import {
  View,
  useWindowDimensions,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Facescan/main";
import { useEffect, useState } from "react";
import Barheader from "../../globalComponents/Barheader";
import { Camera, CameraView, CameraType } from "expo-camera";
import Continuemodal from "./component/Continuemodal";
import Confirmmodal from "./component/Confirmmodal";

const Facescan = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const [isconfirmmodalvisible, setIsconfirmmodalvisible] = useState(false);
  const [isPictureTaken, setIsPictureTaken] = useState(false);

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
        barwidth={"50%"}
        image={require("../../assets/3.png")}
        secondimage={require("../../assets/11.png")}
        thirdimage={require("../../assets/10.png")}
        showFirstCheckbox={true}
        showSecondCheckbox={isPictureTaken}
        showThirdCheckbox={false}
      />
      <View style={styles.passportpicturetextwrapper}>
        <View style={{ width: "80%" }}>
          <Text style={styles.labletext}>Take a Selfie</Text>
          <Text style={styles.secondarytext}>
            Please take a selfie of yourself where your face is clearly visible.
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
          type="front"
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
            setIsPictureTaken(true);
          }}
        />
      ) : null}
      {isconfirmmodalvisible ? (
        <Confirmmodal
          onContinue={() => {
            setIsconfirmmodalvisible(false);
            props?.navigation?.navigate("Entercode");
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Facescan);
