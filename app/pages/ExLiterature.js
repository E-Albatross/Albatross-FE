import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text,
  PermissionsAndroid, Platform,
  Image, TouchableOpacity, Modal
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

//캔버스
import { Canvas, DrawingTool } from '@benjeau/react-native-draw';

//스크린샷
import ViewShot from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";

//이미지 파일들
import home from "../assets/home.png";
import pen from "../assets/pen.png";
import erase from "../assets/erase.png";
import arrow from "../assets/arrow.png";
import confirm from "../assets/confirm.png";

//컴포넌트
import Name from "../components/ExLiterature/Liter_name";

//ㄴㅡ끼ㅁ표 모모달
import markIcon from "../assets/markIcon.png";
import markList from "../components/ExLiterature/markList";

import * as Font from "expo-font";

const ExLiteratureNew = ({ navigation, route}) => {
  // category: "new",
  // id: s.id,
  const category = route.params.category;
  const id = route.params.id;
  const text = route.params.text;

  const [userSize,setSize] = useState(25); // 초기값을 폰트사이즈 25로 설정

  // 폰트 정보 가져오기
  useEffect(async () => {
    await Font.loadAsync({
        'SF_HambakSnow': require('../assets/fonts/SF_HambakSnow.ttf'),
        'ImcreSoojin_Regular': require('../assets/fonts/ImcreSoojin_Regular.ttf'),
        'NotoSansKR-Regular': require('../assets/fonts/NotoSansKR-Regular.ttf'),

        'CWDangamAsac-Bold': require('../assets/fonts/CWDangamAsac-Bold.ttf'),
        'HSYuji-Regular': require('../assets/fonts/HSYuji-Regular.ttf'),
        'SBAggroB': require('../assets/fonts/SBAggroB.ttf'),

        'SUIT-Regular': require('../assets/fonts/SUIT-Regular.ttf'),
        'KyoboHandwriting2019': require('../assets/fonts/KyoboHandwriting2019.ttf'),
        'EliceDigitalBaeum': require('../assets/fonts/EliceDigitalBaeum.ttf'),

        'CookieRun-Regular': require('../assets/fonts/CookieRun-Regular.ttf'),
        'Cafe24Ssurroundair': require('../assets/fonts/Cafe24Ssurroundair.ttf'),
        'YUniverse-L': require('../assets/fonts/YUniverse-L.ttf'),

        'BMJUA': require('../assets/fonts/YUniverse-L.ttf'),
    });
}, []);


  useEffect(() => {
    AsyncStorage.getItem('userSize').then((size)=>{
      if(size!=null){
        setSize(Number(size));
      } else setSize(25);
    })
  },[]);

  const [fontPath,setPath] = useState("SF_HambakSnow"); // 초기 폰트 설정

  //폰트 경로 가져옴
  useEffect(() => {
    AsyncStorage.getItem('fontPath').then((font)=>{
      if(font!=null){
        setPath(font);
      }
    })
  },[]);

  // id를 first, second, third


  // finish되지 않은 상태로 초기설정
  const [finish, setFinish] = useState(false);

  //모달창
  const [modalVisible, setModalVisible] = useState(false);
  const [markModal, setMarkModal] = useState(false);
  const [markModalText, setMarkModalText] = useState("빈칸");

  //draw
  const canvasRef = useRef();
  const [tool, setTool] = useState(DrawingTool.Brush);
  const handleUndo = () => { canvasRef.current?.undo(); };
  const handleToggleEraser = () => {
    setTool((prev) =>
      prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush
    );
  };

  //스크린샷 캡쳐 위한 코드
  const captureRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef.current.capture();
    console.log("👂👂 Image saved to", uri);
    return uri;
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  const onSave = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      toast("갤러리 접근 권한이 없어요");
      return;
    }
    setFinish(true);

    const uri = await getPhotoUri();
    const result = await CameraRoll.save(uri);
    console.log("🐤result", result);
  };

  return (
    <View style={styles.container}>
      {/* 헤더부분 */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MAIN")}
          style={styles.iconbutton}
        >
          <Image style={{ marginLeft: 20 }} source={home} />
        </TouchableOpacity>
        
          { finish === false ?
            (<>
            <View style={styles.headerSubRow}>
               <TouchableOpacity onPress={handleToggleEraser} style={styles.iconbutton}>
                 { tool === DrawingTool.Brush ? 
                 <Image source={erase} /> : <Image source={pen}/>}
              </TouchableOpacity>
              <TouchableOpacity onPress={handleUndo} style={styles.iconbutton}>
                <Image source={arrow} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSave} style={styles.iconbutton}>
                <Image source={confirm} />
              </TouchableOpacity> 
              </View>
            </> 
            ): (
            <>
            <View style={styles.headerSubRow}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ height: 60 }}>
                <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginLeft: 100}} > 다운로드 </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate("MAIN")}
              style={{ height: 60 }}>
              <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginRight: 20}} > 확인 </Text>
            </TouchableOpacity>
            </View>
          </>)
        }
        
      </View>

      {/* 모달창 */}
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderRow}> 
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginLeft: 10}} > 취소 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginRight: 10}} > 저장 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalPage}></View>
        </View>
      </Modal>

      <Modal animationType='slide' transparent={true} visible={markModal}>
              <View style={styles.markModalContainer}>
                <View style={styles.markModalText}> 
                  <Text style={{ fontSize: 22, letterSpacing: 2, textAlign: "center", marginTop:"13%"}} > {markModalText} </Text> 
                </View>
                  <TouchableOpacity onPress={() => setMarkModal(false)} style={{marginBottom: 1, width: "100%", height: "25%", backgroundColor: "#80AE92"}}>
                      <Text style={{ fontSize: 22, letterSpacing: 2, textAlign: "center", marginLeft: 10, color:"white", fontWeight:"bold", paddingTop: "1%", }} > 확인 </Text>
                  </TouchableOpacity>
              </View>
            </Modal>
      {/* 모달창 코드 끝 */}

      <Name name={id} />
      
      {/* 캔버스보드 부분 */}
      <ViewShot ref={captureRef} options={{ format: "jpg", quality: 0.9 }}>
        <View style={{ marginTop: 10, marginLeft: 900, height: 1000, width: 900, justifyContent: "center",  alignItems: "center", }} >
          <Text style={{ fontSize: userSize, letterSpacing: 2, position: "absolute", left: "-41.5%", top: 0, lineHeight: 150, width: "85%", fontFamily: fontPath}}> {text} </Text> 
          <Text style={{ fontSize: userSize, letterSpacing: 2, position: "absolute", left: "-41.5%", top: 0, lineHeight: 150, width: "85%", fontFamily: fontPath, color:"#C4C4C4",top:50}}> {text} </Text> 
          <Canvas
            ref={canvasRef}
            height={900}
            width={900}
            color="black"
            tool={tool}
            eraserSize={5}
            style={{ backgroundColor: 'transparent', width: "85%", position: "absolute", left: "-42%" }}
          />

            {/* 가로줄 */}
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "5%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "10%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "15%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "20%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "25%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "30%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "35%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "40%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "45%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "50%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "55%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "60%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "65%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "70%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "75%", }} />
            <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "80%", }} />

            {/* 세로줄 */}
            <View style={{ height: "75%", width: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "5%"}} />
            <View style={{ height: "75%", width: 1, backgroundColor: "#000000", position: "absolute", left: "43%", top: "5%" }} />

            {markList.mark.map((s)=>(
            <TouchableOpacity key={s.id} style={styles.iconbutton}
            onPress={() => {setMarkModal(true); setMarkModalText(s.text)}}>
                <Image style={{ resizeMode:"contain", height: 30, width:30, position: "absolute", left:s.xPos, top:s.yPos}} source={markIcon} />
            </TouchableOpacity>
            ))}
          </View>
        </ViewShot>
    </View>
  );
};

export default ExLiteratureNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F9F9",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // 컴포넌트를 양쪽에 배치하는 컴포넌트
  headerRow: {
    width: "100%",
    height: 70,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
  titleRow: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    width: "100%",
    height: 70,
    position: "absolute",
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerSubRow: {
    width: "25%",
    marginRight: 50,
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
  modalContainer: {
    width: "80%",
    height: "80%",
    top: "11%",
    left: "10%",
    borderWidth: 0.3,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  modalHeaderRow: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  markModalContainer: {
    width: "60%",
    height: "15%",
    top: "42.5%",
    left: "20%",
    borderWidth: 0.5,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  markModalText: {
    width: "100%",
    height: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
});
