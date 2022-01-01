import React, { useRef, Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

  export default class MainPage extends Component { 
    render() { 
        return ( 
        <View>
            <Button onPress={() => this.goCaptureScreen()} title='Capture Screen'/> 
        </View> 
        ); 
    } 
    goCaptureScreen(){ 
        // CaptureScreen으로 화면 이동 
        this.props.navigation.navigate('CAPTURE'); 
    }
}