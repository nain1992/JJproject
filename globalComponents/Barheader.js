import { Image, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { Barheaderstyles } from "../styles/Global/main";
import AntDesign from "@expo/vector-icons/AntDesign";

const Barheader = (props) => {
  let {
    image,
    secondimage,
    thirdimage,
    barwidth,
    icon,
    showCheckbox,
    showFirstCheckbox,
    showSecondCheckbox,
    showThirdCheckbox,
  } = props;
  let { width, height } = useWindowDimensions();
  let styles = Barheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.iconwrapper}>
        {/* First Icon */}
        <View style={styles.iconbody}>
          <Image
            source={image}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
          {showFirstCheckbox && (
            <View style={{ position: "absolute", right: -5, top: 0 }}>
              <AntDesign name="checkcircle" size={12} color="green" />
            </View>
          )}
        </View>

        {/* Second Icon */}
        <View style={styles.iconbody}>
          <Image
            source={secondimage}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
          {showSecondCheckbox && (
            <View style={{ position: "absolute", right: -5, top: 0 }}>
              <AntDesign name="checkcircle" size={12} color="green" />
            </View>
          )}
        </View>

        {/* Third Icon */}
        <View style={styles.iconbody}>
          <Image
            source={thirdimage}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
          {showThirdCheckbox && (
            <View style={{ position: "absolute", right: -5, top: 0 }}>
              <AntDesign name="checkcircle" size={12} color="green" />
            </View>
          )}
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
