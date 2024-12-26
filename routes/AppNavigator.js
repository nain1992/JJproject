import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register/Register";
import Onboarding from "../screens/Onboarding/Onboarding";
import Documentscan from "../screens/Documentscan/Documentscan";
import Facescan from "../screens/Facescan/Facescan";
import Entercode from "../screens/Entercode/Entercode";
import Congrates from "../screens/Congrates/Congrates";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Register" component={Register} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Documentscan" component={Documentscan} />
      <Screen name="Facescan" component={Facescan} />
      <Screen name="Entercode" component={Entercode} />
      <Screen name="Congrates" component={Congrates} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
