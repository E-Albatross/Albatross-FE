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
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 135}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 200}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 265}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 330}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 395}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 460}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 525}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 590}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 655}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 720}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 785}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 850}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 915}}/>
        <View style={{width: '100%', height: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-420, top: 980}}/>
        {/* 세로줄 */}
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-355, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-290, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-225, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-160, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-95, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left:-30, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 35, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 100, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 165, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 230, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 295, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 360, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 425, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 490, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 555, top: 70}}/>
        <View style={{height: 1000, width: 1, backgroundColor: '#C4C4C4', position: "absolute", left: 620, top: 70}}/>
        {/* 자음 */}
        <Text style={{position: "absolute", left:-415, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄱ </Text>
        <Text style={{position: "absolute", left:-415, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄴ </Text>
        <Text style={{position: "absolute", left:-415, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄷ </Text>
        <Text style={{position: "absolute", left:-415, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㄹ </Text>
        <Text style={{position: "absolute", left:-415, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅁ </Text>
        <Text style={{position: "absolute", left:-415, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅂ </Text>
        <Text style={{position: "absolute", left:-415, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅅ </Text>
        <Text style={{position: "absolute", left:-415, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅇ </Text>
        <Text style={{position: "absolute", left:-415, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅈ </Text>
        <Text style={{position: "absolute", left:-415, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅊ </Text>
        <Text style={{position: "absolute", left:-415, top: 680, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅋ </Text>
        <Text style={{position: "absolute", left:-415, top: 745, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅌ </Text>
        <Text style={{position: "absolute", left:-415, top: 810, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅍ </Text>
        <Text style={{position: "absolute", left:-415, top: 875, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅎ </Text>

        <Text style={{position: "absolute", left:-351, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㄱ </Text>
        <Text style={{position: "absolute", left:-351, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄴ </Text>
        <Text style={{position: "absolute", left:-351, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄷ </Text>
        <Text style={{position: "absolute", left:-351, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㄹ </Text>
        <Text style={{position: "absolute", left:-351, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅁ </Text>
        <Text style={{position: "absolute", left:-351, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅂ </Text>
        <Text style={{position: "absolute", left:-351, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅅ </Text>
        <Text style={{position: "absolute", left:-351, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅇ </Text>
        <Text style={{position: "absolute", left:-351, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅈ </Text>
        <Text style={{position: "absolute", left:-351, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅊ </Text>
        <Text style={{position: "absolute", left:-351, top: 680, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅋ </Text>
        <Text style={{position: "absolute", left:-351, top: 745, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅌ </Text>
        <Text style={{position: "absolute", left:-351, top: 810, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅍ </Text>
        <Text style={{position: "absolute", left:-351, top: 875, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3}}> ㅎ </Text>
        {/* 모음 */}
        <Text style={{position: "absolute", left:40, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅏ </Text>
        <Text style={{position: "absolute", left:40, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅑ </Text>
        <Text style={{position: "absolute", left:40, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅓ </Text>
        <Text style={{position: "absolute", left:40, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅕ </Text>
        <Text style={{position: "absolute", left:40, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅗ </Text>
        <Text style={{position: "absolute", left:40, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅛ </Text>
        <Text style={{position: "absolute", left:40, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅜ </Text>
        <Text style={{position: "absolute", left:40, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅠ </Text>
        <Text style={{position: "absolute", left:40, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅡ </Text>
        <Text style={{position: "absolute", left:40, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold'}}> ㅣ </Text>

        <Text style={{position: "absolute", left:105, top: 30, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅏ </Text>
        <Text style={{position: "absolute", left:105, top: 95, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅑ </Text>
        <Text style={{position: "absolute", left:105, top: 160, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅓ </Text>
        <Text style={{position: "absolute", left:105, top: 225, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅕ </Text>
        <Text style={{position: "absolute", left:105, top: 290, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅗ </Text>
        <Text style={{position: "absolute", left:105, top: 355, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅛ </Text>
        <Text style={{position: "absolute", left:105, top: 420, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅜ </Text>
        <Text style={{position: "absolute", left:105, top: 485, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅠ </Text>
        <Text style={{position: "absolute", left:105, top: 550, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅡ </Text>
        <Text style={{position: "absolute", left:105, top: 615, fontSize: 40, textAlign:"center", paddingTop: 50, fontWeight: 'bold', opacity: 0.3 }}> ㅣ </Text>
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

