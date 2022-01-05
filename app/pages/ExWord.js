import React, {useState, Component, useRef} from 'react';
import { StyleSheet, View, Button, Text,
  SafeAreaView, PermissionsAndroid, Platform,
  Image, TouchableOpacity} from "react-native";
import SignatureScreen from "react-native-signature-canvas";

//스크린샷
import ViewShot, { captureScreen } from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

//이미지 파일들
import home from '../assets/home.png';
import pen from '../assets/pen.png';
import erase from '../assets/erase.png';
import arrow from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';

const ExWord = () => {
  const ref = useRef();

  const handleOK = (signature) => { handleOK(signature); };
  const handleClear = () => { ref.current.clearSignature(); };
  const handleUndo = () => { ref.current.undo(); };
  const handleRedo = () => { ref.current.redo(); };
  const handleDraw = () => { ref.current.draw(); };
  const handleErase = () => { ref.current.erase(); };

  const style = `.m-signature-pad { border: none; margin-top: 0px; margin-left: 0px; height: 1300px;}
  .m-signature-pad--body {border: none;}
  .m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
      {/* 헤더부분 */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MAIN')} style={styles.iconbutton}> 
          <Image style={{marginLeft: 20}}source={home}/>
        </TouchableOpacity>
        <View style={styles.headerSubRow}>
          <TouchableOpacity onPress={handleDraw} style={styles.iconbutton}>
            <Image source={pen}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleErase} style={styles.iconbutton}>
            <Image source={erase}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUndo} style={styles.iconbutton}>
            <Image source={arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRedo} style={styles.iconbutton}>
            <Image source={arrow2}/>
          </TouchableOpacity>
        </View>
      </View>
      {/* 캔버스보드 부분 */}
      <View style={{ height: 1300, width : 1000, position: 'absolute', left: -430, top: 70}}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      </View>
        
        {/* 가로줄 */}
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 135}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 200}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 265}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 330}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 395}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 460}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 525}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 590}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 655}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 720}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 785}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 850}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 915}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 980}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1045}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1110}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1165}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1230}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1295}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:0, top: 1360}}/>
        {/* 세로줄 */}
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:65, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:130, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:195, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:260, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:325, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:390, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:455, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:520, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:585, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:650, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:715, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:780, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:845, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:910, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:975, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:1030, top: 70}}/>
        {/* 자음 */}
        <Text style={{position: "absolute", left:0, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄱ </Text>
        <Text style={{position: "absolute", left:0, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄴ </Text>
        <Text style={{position: "absolute", left:0, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄷ </Text>
        <Text style={{position: "absolute", left:0, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄹ </Text>
        <Text style={{position: "absolute", left:0, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅁ </Text>
        <Text style={{position: "absolute", left:0, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅂ </Text>
        <Text style={{position: "absolute", left:0, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅅ </Text>
        <Text style={{position: "absolute", left:0, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅇ </Text>
        <Text style={{position: "absolute", left:0, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅈ </Text>
        <Text style={{position: "absolute", left:0, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅊ </Text>
        <Text style={{position: "absolute", left:0, top: 680, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅋ </Text>
        <Text style={{position: "absolute", left:0, top: 745, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅌ </Text>
        <Text style={{position: "absolute", left:0, top: 810, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅍ </Text>
        <Text style={{position: "absolute", left:0, top: 875, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅎ </Text>

        <Text style={{position: "absolute", left:65, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㄱ </Text>
        <Text style={{position: "absolute", left:65, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄴ </Text>
        <Text style={{position: "absolute", left:65, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄷ </Text>
        <Text style={{position: "absolute", left:65, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄹ </Text>
        <Text style={{position: "absolute", left:65, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅁ </Text>
        <Text style={{position: "absolute", left:65, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅂ </Text>
        <Text style={{position: "absolute", left:65, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅅ </Text>
        <Text style={{position: "absolute", left:65, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅇ </Text>
        <Text style={{position: "absolute", left:65, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅈ </Text>
        <Text style={{position: "absolute", left:65, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅊ </Text>
        <Text style={{position: "absolute", left:65, top: 680, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅋ </Text>
        <Text style={{position: "absolute", left:65, top: 745, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅌ </Text>
        <Text style={{position: "absolute", left:65, top: 810, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅍ </Text>
        <Text style={{position: "absolute", left:65, top: 875, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅎ </Text>
        {/* 모음 */}
        <Text style={{position: "absolute", left:392, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅏ </Text>
        <Text style={{position: "absolute", left:392, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅑ </Text>
        <Text style={{position: "absolute", left:392, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅓ </Text>
        <Text style={{position: "absolute", left:392, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅕ </Text>
        <Text style={{position: "absolute", left:392, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅗ </Text>
        <Text style={{position: "absolute", left:392, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅛ </Text>
        <Text style={{position: "absolute", left:392, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅜ </Text>
        <Text style={{position: "absolute", left:392, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅠ </Text>
        <Text style={{position: "absolute", left:392, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅡ </Text>
        <Text style={{position: "absolute", left:392, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅣ </Text>

        <Text style={{position: "absolute", left:455, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅏ </Text>
        <Text style={{position: "absolute", left:455, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅑ </Text>
        <Text style={{position: "absolute", left:455, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅓ </Text>
        <Text style={{position: "absolute", left:455, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅕ </Text>
        <Text style={{position: "absolute", left:455, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅗ </Text>
        <Text style={{position: "absolute", left:455, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅛ </Text>
        <Text style={{position: "absolute", left:455, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅜ </Text>
        <Text style={{position: "absolute", left:455, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅠ </Text>
        <Text style={{position: "absolute", left:455, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅡ </Text>
        <Text style={{position: "absolute", left:455, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅣ </Text>
     
    </View>
    
  );
};

export default ExWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor: '#F9F9F9',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
    // 컴포넌트를 양쪽에 배치하는 컴포넌트
    headerRow: {
      width:"100%",
      height: 70,
      position: "absolute",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#80AE92"
    },
    headerSubRow: {
      width:"35%",
      marginRight:20,
      height: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#80AE92"
    },
});

