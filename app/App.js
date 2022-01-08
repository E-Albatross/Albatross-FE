import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./pages/MainPage";
import DrawerPage from "./pages/DrawerPage";
import Profile_login from "./pages/Profile/Profile_login";
import Profile_logout from "./pages/Profile/Profile_logout";

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
        <Stack.Screen
          name="MAIN"
          component={MainPage}
          options={{ title: "메인화면" }}
        />
        <Stack.Screen
          name="CAPTURE"
          component={ExLiterature}
          options={{ title: "작품연습화면" }}
        />
        <Stack.Screen
          name="DRAWER"
          component={DrawerPage}
          options={{ title: "서랍화면" }}
        />
        <Stack.Screen
          name="PROFILE_LOGIN"
          component={Profile_login}
          options={{ title: "프로필화면" }}
        />
        <Stack.Screen
          name="PROFILE_LOGOUT"
          component={Profile_logout}
          options={{ title: "프로필화면" }}
        />
        <Stack.Screen
          name="LINE"
          component={ExLine}
          options={{ title: "줄연습화면" }}
        />
        <Stack.Screen
          name="WORD"
          component={ExWord}
          options={{ title: "자음모음연습화면" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
