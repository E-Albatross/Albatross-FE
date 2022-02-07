import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./pages/MainPage";
import DrawerPage from "./pages/DrawerPage";
import Profile_login from "./pages/profilePage/Profile_login";
import Profile_logout from "./pages/profilePage/Profile_logout";
import Login from "./pages/profilePage/Login";
import SignIn from "./pages/profilePage/SignIn";

import CaptureSign from "./components/CaptureSign";

import FontPage from "./pages/profilePage/FontPage";
import FontsList from "./assets/fonts/FontsList";

import ExLine from "./pages/ExLine";
import ExWord from "./pages/ExWord";
import ExLiterature from "./pages/ExLiterature";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MAIN"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MAIN" component={MainPage} />
        <Stack.Screen name="CAPTURE" component={ExLiterature} />
        <Stack.Screen name="DRAWER" component={DrawerPage} />

        <Stack.Screen name="PROFILE_LOGIN" component={Profile_login} />
        <Stack.Screen name="PROFILE_LOGOUT" component={Profile_logout} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="SIGNIN" component={SignIn} />
        <Stack.Screen name="FONTPAGE" component={FontPage} />
        <Stack.Screen name="FONTSLIST" component={FontsList} />

        <Stack.Screen name="LINE" component={ExLine} />
        <Stack.Screen name="WORD" component={ExWord} />

        <Stack.Screen name="CAPTURESIGN" component={CaptureSign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
