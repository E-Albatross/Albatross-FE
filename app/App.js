import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/MainPage';
import CaptureTest from './pages/CaptureTest';

const Stack = createStackNavigator(); 
  function App() { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="MAIN"> 
        <Stack.Screen name="MAIN" component={MainPage} options={{ title: '메인화면' }}/> 
        <Stack.Screen name="CAPTURE" component={CaptureTest} options={{ title: '캡쳐화면' }}/> 
        </Stack.Navigator> 
      </NavigationContainer> 
    ); 
  } 
export default App;