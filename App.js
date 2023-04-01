import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/Main";
import DrawerPage from "./pages/drawer";
import DetailScore from "./pages/drawer/DetailScore";
import Profile from "./pages/profile/Profile";
import Login from "./pages/profile/Login";

import LinePrac from "./pages/practice/LinePrac";
import WordPrac from "./pages/practice/WordPrac";
import LiterPrac from "./pages/practice/LiterPrac";
import SubLiter from "./pages/practice/LiterCanvas";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MAIN"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MAIN" component={Main} />
        <Stack.Screen name="LITER" component={LiterPrac} />
        <Stack.Screen name="DRAWER" component={DrawerPage} />
        <Stack.Screen name="DETAILSCORE" component={DetailScore} />
        <Stack.Screen name="SUBLITER" component={SubLiter} />

        <Stack.Screen name="PROFILE" component={Profile} />
        <Stack.Screen name="LOGIN" component={Login} />

        <Stack.Screen name="LINE" component={LinePrac} />
        <Stack.Screen name="WORD" component={WordPrac} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
