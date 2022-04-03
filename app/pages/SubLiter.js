import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text,
  Image, TouchableOpacity, Modal
} from "react-native";

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
  const [score, setScore] = useState(80);

  // 폰트 정보 가져오기
  useEffect(async () => {
    await Font.loadAsync({
        'NotoSansKR-Regular': require('../assets/fonts/NotoSansKR-Regular.ttf'),
        'CWDangamAsac-Bold': require('../assets/fonts/CWDangamAsac-Bold.ttf'),
        'SUIT-Regular': require('../assets/fonts/SUIT-Regular.ttf'),

        'KyoboHandwriting2019': require('../assets/fonts/KyoboHandwriting2019.ttf'),
        'EliceDigitalBaeum': require('../assets/fonts/EliceDigitalBaeum.ttf'),
        'Cafe24Ssurroundair': require('../assets/fonts/Cafe24Ssurroundair.ttf'),

        'YUniverse-L': require('../assets/fonts/YUniverse-L.ttf'),
        'BMJUA': require('../assets/fonts/YUniverse-L.ttf'),

        'ACCchildrenheart': require('../assets/fonts/ACCchildrenheart.ttf'),
        'GangwonEduAllLight': require('../assets/fonts/GangwonEduAllLight.ttf'),
        'KOTRA_SONGEULSSI-Medium': require('../assets/fonts/KOTRA_SONGEULSSI-Medium.ttf'),

        'MaruBuri-SemiBold': require('../assets/fonts/MaruBuri-SemiBold.ttf'),
        'NanumBaReunHiPi': require('../assets/fonts/NanumBaReunHiPi.ttf'),
        'NanumPen': require('../assets/fonts/NanumPen.ttf'),
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

  const [fontPath,setPath] = useState("BMJUA"); // 초기 폰트 설정

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
    <View style={styles.container}>
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

      {/* 다운로드 모달창 */}
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderRow}> 
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginLeft: 10}} > 취소 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setModalVisible(false); onSave();}}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginRight: 10}} > 저장 </Text>
            </TouchableOpacity>
          </View>

          <Image 
            style={{width:"85%", height:"80%", marginTop:"5%"}}
            source={{uri:galleryUri}} 
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
      
      <ViewShot ref={galleryRef} options={{ format: "jpg", quality: 0.9 }} style={{marginTop: 70}}>
        { finish === false ? (
         <View style={{width: "90%", height: "10%", flexDirection: "row", justifyContent: "start", marginLeft: 530,}}> 
         <View style={styles.nameContainer}>
           <Text style={{fontSize: 30, letterSpacing: 3, textAlign:"left",fontFamily: fontPath }}> {setTitle} </Text>
           <View style={styles.line}/>
           <View style={styles.line}/>
         </View>
       </View>
       ) 
       :( 
       <View style={{width: "90%", height: "10%", flexDirection: "row", justifyContent: "start", marginLeft: 530,}}> 
         <View style={styles.nameContainer}>
           <Text style={{fontSize: 30, letterSpacing: 3, textAlign:"left", fontFamily: fontPath}}> {setTitle} </Text>
           <View style={styles.line}/>
           <View style={styles.line}/>
         </View>
         <Score score={score}/> 
       </View>
       )}
      
      {/* 캔버스보드 부분 */}
        <ViewShot ref={captureRef} options={{ format: "jpg", quality: 0.9 }}>
          
          <View style={{ marginTop: 10, marginLeft: 900, height: 1000, width: 900, justifyContent: "center",  alignItems: "center", }} >
            <Text style={{ fontSize: userSize, letterSpacing: 2, position: "absolute", left: "-40%", top: -7, lineHeight: 180, width: "85%", fontFamily: fontPath}}> {text} </Text> 
            <Text style={{ fontSize: userSize, letterSpacing: 2, position: "absolute", left: "-40%", top: 52, lineHeight: 180, width: "85%", fontFamily: fontPath, color:"#C4C4C4"}}> {text} </Text> 
            <Canvas
              ref={canvasRef}
              height={900}
              width={900}
              color="black"
              tool={tool}
              eraserSize={5}
              style={{ backgroundColor: 'transparent', width: "85%", position: "absolute", left: "-42%", top: "5%",  }}
            />

              {/* 가로줄 */}
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "5%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "11%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "17%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "23%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "29%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "35%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "41%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "47%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "53%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "59%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "65%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "71%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "77%", }} />
              {/* <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "70%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "75%", }} />
              <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "80%", }} /> */}

              {/* 세로줄 */}
              <View style={{ height: "72%", width: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: "5%"}} />
              <View style={{ height: "72%", width: 1, backgroundColor: "#000000", position: "absolute", left: "43%", top: "5%" }} />

              { finish === false ? (
                <>
                </>) 
                :(<>
                  {markList.mark.map((s)=>(
                    <TouchableOpacity key={s.id} style={styles.iconbutton}
                    onPress={() => {setMarkModal(true); setMarkModalText(s.text)}}>
                        <Image style={{ resizeMode:"contain", height: 30, width:30, position: "absolute", left:s.xPos, top:s.yPos}} source={markIcon} />
                    </TouchableOpacity>
                    ))}
                  </>
              )}
            </View>
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
  titleRow: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: {
    marginTop: "7%",
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
