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

const ExLine = () => {
  const ref = useRef();

  const handleOK = (signature) => { handleOK(signature); };
  const handleClear = () => { ref.current.clearSignature(); };
  const handleUndo = () => { ref.current.undo(); };
  const handleRedo = () => { ref.current.redo(); };
  const handleDraw = () => { ref.current.draw(); };
  const handleErase = () => { ref.current.erase(); };

  const style = `.m-signature-pad { border: none; 
    margin-left: 10px; margin-right: 20px;
    height: 800px;} 
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
      <View style={{ marginTop: 10, height: 1000, width : 1000}}>
        <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      </View>
      </ViewShot>
    </View>
    
  );
};

export default ExLine;

const styles = StyleSheet.create({
  container: {
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
      height: "7%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#80AE92"
    },
    headerSubRow: {
      width:"35%",
      marginRight:20,
      height: "7%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#80AE92"
    },
  row: {
    marginTop: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center",
  },
});

