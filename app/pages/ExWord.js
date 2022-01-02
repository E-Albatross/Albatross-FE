import React, {useState, Component, useRef} from 'react';
import { StyleSheet, View, Button, Text,
  SafeAreaView, PermissionsAndroid, Platform,
  Image, TouchableOpacity } from "react-native";
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

  //스크린샷 캡쳐 위한 코드
  const captureRef = useRef();

   const getPhotoUri = async (): Promise<string> => {
     const uri = await captureRef.current.capture();
     console.log('👂👂 Image saved to', uri);
     return uri;
   };

   const hasAndroidPermission = async () => {
     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

     const hasPermission = await PermissionsAndroid.check(permission);
     if (hasPermission) {
       return true;
     }

     const status = await PermissionsAndroid.request(permission);
     return status === 'granted';
   };

   const onSave = async () => {
     if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
       toast('갤러리 접근 권한이 없어요');
       return;
     } 
     const uri = await getPhotoUri();
     const result = await CameraRoll.save(uri);
     console.log('🐤result', result);
 };


  return (
    <View style={styles.container}>
      {/* 헤더부분 */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MAIN')} style={styles.iconbutton}> 
          <Image style={{marginLeft: 10}}source={home}/>
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
      <ViewShot ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
        <View style={{ height: 1300, width : 1000, position: 'absolute', left:-420, top: 70}}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        {/* 가로줄 */}
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 120}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 170}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 220}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 270}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 320}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 370}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 420}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 470}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 520}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 570}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 620}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 670}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 720}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 770}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 820}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 870}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 920}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 970}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 1020}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 1070}}/>
        {/* 세로줄 */}
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-370, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-320, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-270, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-220, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-170, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-120, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-70, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-20, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 30, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 80, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 130, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 180, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 230, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 280, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 330, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 380, top: 70}}/>
      </ViewShot>
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

