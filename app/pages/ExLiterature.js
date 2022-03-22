import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text,
  Image, TouchableOpacity, Modal
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

//캔버스
import { Canvas, DrawingTool } from '@benjeau/react-native-draw';

//스크린샷
import ViewShot from "react-native-view-shot";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library'
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

//이미지 파일들
import home from "../assets/home.png";
import pen from "../assets/pen.png";
import erase from "../assets/erase.png";
import arrow from "../assets/arrow.png";
import confirm from "../assets/confirm.png";

//컴포넌트
import Name from "../components/ExLiterature/Liter_name";
import Score from "../components/ExLiterature/Score";
import SubLiter from "./SubLiter";

//느낌표 모달
import markIcon from "../assets/markIcon.png";
import markList from "../components/ExLiterature/markList";

import * as Font from "expo-font";

import Swiper from 'react-native-swiper';

const ExLiteratureNew = ({navigation, route}) => {
  // category: "new",
  // id: s.id,
  // const category = route.params.category;
  const id = route.params.id;
  const text = route.params.text;

  const [userSize,setSize] = useState(25); // 초기값을 폰트사이즈 25로 설정
  const [isReady, setReady]= useState(false);
  const [score, setScore] = useState(80);

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
    setReady(true);
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
  
  // 갤러리 허가
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

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
  const galleryRef = useRef();
  const [photoUri, setUri] = useState(null); // 서버에 넘겨줄 스크린샷
  const [galleryUri, setGallery] = useState(null); // 내 서랍 & 유저 갤러리에 저장할 사진

  const getPhotoUri = async () => { // 스크린샷 두개 세팅
     try{
      const server = await captureRef.current.capture();
      const gallery = await galleryRef.current.capture();
      setUri(server);
      setGallery(gallery);
      console.log("서버에 저장할 uri : ", photoUri);
      console.log("갤러리에 저장할 uri : ", galleryUri);

     } catch(err){
      console.log("uri를 가져오는데 실패함!");
     }
  };

  // 갤러리 권한 주기
  MediaLibrary.requestPermissionsAsync();

  const onCheck = async () => { // 검사버튼 눌렀을 때
    try{
      await getPhotoUri();
      setFinish(true);
    
     } catch(err){
       console.log("검사에 실패함!");
     }
  };

  const onSave = async () => { // 저장 버튼 눌렀을 때
    try{
      MediaLibrary.getPermissionsAsync().then((data) => {
        if (data.status === 'granted') {
          MediaLibrary.saveToLibraryAsync(galleryUri);
          console.log("갤러리 저장에 성공함!");
        }
      });
    
     } catch(err){
       console.log("갤러리에 저장하는데에 실패함!");
     }
  };

  return (
    <Swiper showsButtons loop={false}>
      <SubLiter navigation={navigation} text={text} id={id}/> 
      <SubLiter navigation={navigation} text={text} id={id}/> 
      <SubLiter navigation={navigation} text={text} id={id}/> 
    </Swiper>
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
    backgroundColor: "#F9F9F9",
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
    top: "35%",
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
