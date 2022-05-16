import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text,
  Image, TouchableOpacity, Modal, Dimensions
} from "react-native";
   
import axios from 'axios';
import { USER_SERVER } from '../config';

import AsyncStorage from '@react-native-async-storage/async-storage';

//캔버스
import { Canvas, DrawingTool } from '@benjeau/react-native-draw';

//스크린샷
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library'

//이미지 파일들
import home from "../assets/home.png";
import pen from "../assets/pen.png";
import erase from "../assets/erase.png";
import arrow from "../assets/arrow.png";
import confirm from "../assets/confirm.png";

import Score from "../components/ExLiterature/Score";

//느낌표 모달
import markIcon from "../assets/markIcon.png";
import markList from "../components/ExLiterature/markList";

import * as Font from "expo-font";

const SubLiter= ({navigation, id, setTitle, text}) => {
  const [userSize,setSize] = useState(25); // 초기값을 폰트사이즈 25로 설정
  const [isReady, setReady]= useState(false);
  const [score, setScore] = useState(95);

  // 폰트 정보 가져오기
  useEffect(async () => {
    await Font.loadAsync({
      'NanumGaRamYeonGgoc': require('../assets/fonts/NanumGaRamYeonGgoc.ttf'),
      'NanumGoDigANiGoGoDing': require('../assets/fonts/NanumGoDigANiGoGoDing.ttf'),
      'NanumGomSinCe': require('../assets/fonts/NanumGomSinCe.ttf'),
      'NanumGyuRiEuiIrGi': require('../assets/fonts/NanumGyuRiEuiIrGi.ttf'),
      'NanumGeumEunBoHwa': require('../assets/fonts/NanumGeumEunBoHwa.ttf'),
      'NanumGiBbeumBarkEum': require('../assets/fonts/NanumGiBbeumBarkEum.ttf'),
      'NanumGimYuICe': require('../assets/fonts/NanumGimYuICe.ttf'),
      'NanumNaNeunIGyeoNaenDa': require('../assets/fonts/NanumNaNeunIGyeoNaenDa.ttf'),
      'NanumDaHaengCe': require('../assets/fonts/NanumDaHaengCe.ttf'),
      'NanumDongHwaDdoBag': require('../assets/fonts/NanumDongHwaDdoBag.ttf'),
      'NanumDdarEGeEomMaGa': require('../assets/fonts/NanumDdarEGeEomMaGa.ttf'),
      'NanumMasIssNeunCe': require('../assets/fonts/NanumMasIssNeunCe.ttf'),
      'NanumMongDor': require('../assets/fonts/NanumMongDor.ttf'),
      'NanumMuGungHwa': require('../assets/fonts/NanumMuGungHwa.ttf'),
      'NanumMiNiSonGeurSsi': require('../assets/fonts/NanumMiNiSonGeurSsi.ttf'),
      'NanumYaGeunHaNeunGimJuIm': require('../assets/fonts/NanumYaGeunHaNeunGimJuIm.ttf'),
      'NanumJangMiCe': require('../assets/fonts/NanumJangMiCe.ttf'),
      'NanumHaengBogHanDoBi': require('../assets/fonts/NanumHaengBogHanDoBi.ttf'),
      'NanumHimNaeRaNeunMarBoDan': require('../assets/fonts/NanumHimNaeRaNeunMarBoDan.ttf'),
      'Pak_Yong_jun': require('../assets/fonts/Pak_Yong_jun.ttf'),
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

  const [fontPath,setPath] = useState("NanumJangMiCe"); // 초기 폰트 설정

  //폰트 경로 가져옴
  useEffect(() => {
    AsyncStorage.getItem('fontPath').then((font)=>{
      if(font!=null){
        setPath(font);
      }
    })
  },[]);

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
  const drawerRef = useRef();
  const [photoUri, setUri] = useState(null); // 서버에 넘겨줄 스크린샷
  const [galleryUri, setGallery] = useState(null); // 내 서랍 & 유저 갤러리에 저장할 사진
  const [drawerUri, setDrawer] = useState(null); // 내 서랍 & 유저 갤러리에 저장할 사진
  const [galleryName, setName] = useState(null); // 내 서랍 & 유저 갤러리에 저장할 사진

  const getPhotoUri = async () => { // 스크린샷 두개 세팅
     try{
      const server = await captureRef.current.capture();
      const gallery = await galleryRef.current.capture();
      const drawer = await drawerRef.current.capture();
      setUri(server);
      setGallery(gallery);
      setDrawer(drawer);

      console.log(server);

      const arr = gallery.split('/');
      const name = arr[arr.length-1];
      setName(name);

      // console.log("서버에 저장할 uri : ", server);
      console.log("갤러리에 저장할 uri : ", gallery);
      // console.log("서랍에 저장할 uri : ", drawer);
      console.log("파일 이름 : ", name);
      
     } catch(err){
      // console.log("uri를 가져오는데 실패함!");
     }
  };

  // 갤러리 권한 주기
  MediaLibrary.requestPermissionsAsync();

  const onCheck = async () => { // 검사버튼 눌렀을 때
    try{
      await getPhotoUri();
      setFinish(true);
    
     } catch(err){
       // console.log("검사에 실패함!");
     }
  };

  const retry = async () => { // 다시쓰기버튼 눌렀을 때
    try{
      setFinish(false);
     } catch(err){
       // console.log("검사에 실패함!");
     }
  };

  const onSave = async () => { // 저장 버튼 눌렀을 때
    try{
      MediaLibrary.getPermissionsAsync().then((data) => {
        if (data.status === 'granted') {
          MediaLibrary.saveToLibraryAsync(photoUri);
          console.log(photoUri);
        }
      });
    
     } catch(err){
       // console.log("갤러리에 저장하는데에 실패함!");
     }
  };

  // 유저아이디 기본 설정값
  const [userId, setID] = useState("appleid");
  // 유저아이디 가져오기
  useEffect(() => {
    AsyncStorage.getItem('userId').then((userId)=>{
      if(userId!=null){
        setID(userId);
        console.log(userId);
      } else setID(null);
    })
  },[]);

  const postServer = () => { // 서버에 넘기기
    try{
      var file = {
           uri : galleryUri,
           type: 'multipart/form-data',
           name: galleryName
      };
      var formData = new FormData();
      formData.append("file", file);
      
      fetch(`${USER_SERVER}/image/s3/resource/${userId}/${id}/${galleryName}`, { 
        method : "POST"
        , body : formData
      })
      .then(result => result.json())
      .catch(error => console.log(`error => ${error}`));

      console.log("서버에 저장함!");
      console.log(`https://albatross-backend.s3.ap-northeast-2.amazonaws.com/captured-image/${galleryName}`);
    } catch(err){
      console.log("서버에 저장하지 못함");
      console.log(`https://albatross-backend.s3.ap-northeast-2.amazonaws.com/captured-image/${galleryName}`);
    }
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container} key = {id}>
      {isReady && (
        <>
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
              <TouchableOpacity onPress={() => {onCheck(); setTool(null);} } style={styles.iconbutton}>
                <Image source={confirm} />
              </TouchableOpacity> 
              </View>
            </> 
            ): (
            <>
            <View style={styles.headerSubRow}>
              <TouchableOpacity
                onPress={() => retry()}
                style={{ height: 60 }}>
                <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginLeft: -10}} > 다시쓰기 </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ height: 60 }}>
                <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginLeft: 10}} > 다운로드 </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate("MAIN")}
              style={{ height: 60 }}>
              <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginLeft: 10, marginRight: 20}} > 확인 </Text>
            </TouchableOpacity>
            </View>
          </>)
        }
        
      </View>

      {/* 다운로드 모달창 */}
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderRow}> 
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginLeft: 10}} > 취소 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setModalVisible(false); onSave(); postServer();}}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginRight: 10}} > 저장 </Text>
            </TouchableOpacity>
          </View>

          <Image 
            style={{width:"95%", height:"85%", marginTop:"5%"}}
            source={{uri:drawerUri}} 
          />

        </View>
      </Modal>

        <Modal animationType='slide' transparent={true} visible={markModal}>
              <View style={styles.markModalContainer}>
                <View style={styles.markModalText}> 
                  <Text style={{ fontSize: 22, letterSpacing: 2, textAlign: "center", marginTop:"11%"}} > {markModalText} </Text> 
                </View>
                  <TouchableOpacity onPress={() => setMarkModal(false)} style={{marginBottom: 1, width: "100%", height: "25%", backgroundColor: "#80AE92"}}>
                      <Text style={{ fontSize: 22, letterSpacing: 2, textAlign: "center", marginLeft: 10, color:"white", fontWeight:"bold", paddingTop: "1%", }} > 확인 </Text>
                  </TouchableOpacity>
              </View>
        </Modal>
      {/* 모달창 코드 끝 */}
      
      <ViewShot ref={galleryRef} options={{ format: "jpg", quality: 0.9 }} style={{marginTop: 70, width: windowWidth, height:(windowHeight*0.92-70)}}>
      <ViewShot ref={drawerRef} options={{ format: "jpg", quality: 0.9, result: "data-uri" }} style={{width: windowWidth, height:(windowHeight*0.92-70)}}> 
        { finish === false ? (
         <View style={{width: "90%", height: "10%", flexDirection: "row", justifyContent: "start", marginLeft: 30}}> 
          <View style={styles.nameContainer}>
            <Text style={{fontSize: 30, letterSpacing: 3, textAlign:"left",fontFamily: fontPath, }}> {setTitle} </Text>
            <View style={styles.line}/>
            <View style={styles.line}/>
          </View>
        </View>
       ) 
       :( 
        <View style={{width: "90%", height: "10%", flexDirection: "row", justifyContent: "start", marginLeft: 30}}> 
          <View style={styles.nameContainer}>
            <Text style={{fontSize: 30, letterSpacing: 3, textAlign:"left", fontFamily: fontPath}}> {setTitle} </Text>
            <View style={styles.line}/>
            <View style={styles.line}/>
          </View>
          <Score score={score}/> 
        </View>
       )}
       {/* (windowHeight*0.92*0.9-70)*0.88-2 */}
      {/* 캔버스보드 부분 */}
      <ViewShot ref={captureRef} options={{ format: "jpg", quality: 0.9 }} 
        style={{ marginTop: "10%", height:720}}>
          
          <View style={{ height: 1000, justifyContent: "center",  alignItems: "center"}} >
            <Text style={{ fontSize: userSize, letterSpacing: 7, position: "absolute", left: "7%", top: -58, lineHeight: 180, width: "85%", fontFamily: fontPath}}> {text} </Text> 
            <Text style={{ fontSize: userSize, letterSpacing: 7, position: "absolute", left: "7%", top: 0, lineHeight: 180, width: "85%", fontFamily: fontPath, color:"#C4C4C4"}}> {text} </Text> 
            <Canvas
              ref={canvasRef}
              height={720}
              width={900}
              color="black"
              tool={tool}
              eraserSize={5}
              style={{ backgroundColor: 'transparent', width: "90%",  height: "72%", position: "absolute", left: "5%", top: "0%"}}
            />

              {/* 가로줄 */}
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 0, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 60, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 120, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 180, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 240, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 300, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 360, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 420, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 480, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 540, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 600, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 660, }} />
              <View style={{ width: "90%", height: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: 720, }} />

              {/* 세로줄 */}
              <View style={{ height: 720, width: 1, backgroundColor: "#000000", position: "absolute", left: "5%", top: "0%"}} />
              <View style={{ height: 720, width: 1, backgroundColor: "#000000", position: "absolute", right: "5%", top: "0%" }} />

              { finish === false ? (
                <>
                </>) 
                :(<>
                  {markList.mark.map((s)=>(
                    <TouchableOpacity key={s.id} style={styles.iconbutton}
                    onPress={() => {setMarkModal(true); setMarkModalText(s.text)}}>
                        <Image key={s.id} style={{ resizeMode:"contain", height: 30, width:30, position: "absolute", left:s.xPos, top:s.yPos}} source={markIcon} />
                    </TouchableOpacity>
                    ))}
                  </>
              )}
            </View>
          </ViewShot>
          </ViewShot>
        </ViewShot>
        </>
        )}
    </View>
  );
};

export default SubLiter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "92%",
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
  nameContainer: {
    marginTop: "7%",
    marginBottom: "-2%",
    width:"50%",
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent:"flex-start",
  },
  line:{
      width: '80%', 
      height: 1, 
      marginTop: 7,
      backgroundColor: "#000000",
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
