import React, { useState, useEffect } from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity, Modal,  ScrollView, TextInput
} from "react-native";
import * as Font from "expo-font";

import * as AppleAuthentication from 'expo-apple-authentication';

//텍스트 슬라이더
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

import home from "../../assets/home.png";

const Profile_login = ({navigation}) => {
  //모달창
  const [fontVisible, setFontVisible] = useState(false)
  const [modifyVisible, setModifyVisible] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)

  // ----- 유저 아이디 ------
  const [userId, setID] = useState(undefined); // false면 로그아웃, true면 로그인

  const saveUser = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', String(userId))
    } catch (e) {
    }
  }
  useEffect(() => {
    AsyncStorage.getItem('userId').then((userId)=>{
      if(userId!=null){
        setID(userId);
        console.log(userId);
      } else setID(null);
    })
  },[]);

  // ----- 유저 사이즈 -----
  const [userSize,setSize] = useState(25); // 초기값을 폰트사이즈 25로 설정

  const saveSize= async (userSize) => {
    try {
      await AsyncStorage.setItem('userSize', String(userSize))
    } catch (e) {
    }
  }
  useEffect(() => {
    AsyncStorage.getItem('userSize').then((size)=>{
      if(size!=null){
        setSize(Number(size));
      } else setSize(25);
    })
  },[]);

  // --- 폰트 가져오기 ---

  const [isReady, setReady]= useState(false);
  
  useEffect(async () => {
    await Font.loadAsync({
        'NotoSansKR-Regular': require('../../assets/fonts/NotoSansKR-Regular.ttf'),
        'CWDangamAsac-Bold': require('../../assets/fonts/CWDangamAsac-Bold.ttf'),
        'SUIT-Regular': require('../../assets/fonts/SUIT-Regular.ttf'),

        'KyoboHandwriting2019': require('../../assets/fonts/KyoboHandwriting2019.ttf'),
        'EliceDigitalBaeum': require('../../assets/fonts/EliceDigitalBaeum.ttf'),
        'Cafe24Ssurroundair': require('../../assets/fonts/Cafe24Ssurroundair.ttf'),

        'YUniverse-L': require('../../assets/fonts/YUniverse-L.ttf'),
        'BMJUA': require('../../assets/fonts/YUniverse-L.ttf'),

        'ACCchildrenheart': require('../../assets/fonts/ACCchildrenheart.ttf'),
        'GangwonEduAllLight': require('../../assets/fonts/GangwonEduAllLight.ttf'),
        'KOTRA_SONGEULSSI-Medium': require('../../assets/fonts/KOTRA_SONGEULSSI-Medium.ttf'),

        'MaruBuri-SemiBold': require('../../assets/fonts/MaruBuri-SemiBold.ttf'),
        'NanumBaReunHiPi': require('../../assets/fonts/NanumBaReunHiPi.ttf'),
        'NanumPen': require('../../assets/fonts/NanumPen.ttf'),
    });
    setReady(true);
}, []);

  const [userFont,setFont] = useState("주아체"); // 초기 폰트 설정
  const [fontPath,setPath] = useState("BMJUA"); // 초기 폰트 설정

  // 폰트 경로 가져옴
  useEffect(() => {
    AsyncStorage.getItem('userFont').then((font)=>{
      if(font!=null){
        setFont(font);
      }
    })
  },[]);

  //폰트 이름 가져옴
  useEffect(() => {
    AsyncStorage.getItem('fontPath').then((font)=>{
      if(font!=null){
        setPath(font);
      }
    })
  },[]);

  const saveFont = async (userFont) => {
    try {
    await AsyncStorage.setItem('userFont', userFont)
    } catch (e) {
    // saving error
    }
}
// 폰트 경로 저장
const savePath = async (fontPath) => {
    try {
    await AsyncStorage.setItem('fontPath', fontPath)
    } catch (e) {
    // saving error
    }
}

const [identity, setIdentity] = useState("null");

    return (
      <View style={styles.container}>
         {isReady && (
        <>
        {/* 폰트설정창 */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={fontVisible}
        closeOnTouchOutside={true}>
          
          <View style={styles.FontContainer}>
            <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
              centerContent={true} indicatorStyle={"white"}>

              <TouchableOpacity onPress={() => { setFontVisible(false); setFont("주아체"); setPath("BMJUA");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "BMJUA", marginBottom: 23, marginTop: 30}}>주아체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("Y유니버스체"); setPath("YUniverse-L");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "YUniverse-L", marginBottom: 23,}}>Y유니버스체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("바른히피"); setPath("NanumBaReunHiPi");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "NanumBaReunHiPi", marginBottom: 33}}>바른히피</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("어린이마음고운체"); setPath("ACCchildrenheart");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "ACCchildrenheart", marginBottom: 30,}}>어린이마음고운체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("강원교육모두체"); setPath("GangwonEduAllLight");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "GangwonEduAllLight", marginBottom: 25}}>강원교육모두체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("코토라체"); setPath("KOTRA_SONGEULSSI-Medium");}}> 
                  <Text style={{ fontSize: 28, fontFamily: "KOTRA_SONGEULSSI-Medium", marginBottom: 25}}>코토라체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("나눔손글씨 펜체"); setPath("NanumPen");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "NanumPen", marginBottom: 30}}>나눔손글씨 펜체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFont("교보손글씨체"); setPath("KyoboHandwriting2019");setFontVisible(false);}}> 
                  <Text style={{ fontSize: 30, fontFamily: "KyoboHandwriting2019",  marginBottom: 30}}>교보손글씨체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("마루부리"); setPath("MaruBuri-SemiBold");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "MaruBuri-SemiBold", marginBottom: 30}}>마루부리</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("카페24체"); setPath("Cafe24Ssurroundair");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "Cafe24Ssurroundair", marginBottom: 30}}>카페24체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFontVisible(false); setFont("노토산스"); setPath("NotoSansKR-Regular");}}> 
                  <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Regular", marginBottom: 25}}>노토산스</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFont("수트체"); setPath("SUIT-Regular");setFontVisible(false);}}> 
                  <Text style={{ fontSize: 30,fontFamily: "SUIT-Regular", marginBottom: 25}}>수트체</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {setFont("앨리스체"); setPath("EliceDigitalBaeum");setFontVisible(false);}}> 
                  <Text style={{ fontSize: 30, fontFamily: "EliceDigitalBaeum",  marginBottom: 25}}>앨리스체</Text>
              </TouchableOpacity>
              
            </ScrollView>
          </View>
          
        </Modal>

        {/* 비밀번호 변경? */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={modifyVisible}
        closeOnTouchOutside={true}>
          <View style={styles.modalContainer}>
          <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }}> 비밀번호를 변경하시겠습니까?</Text>
          <View style={styles.modalButtonBox}> 
          <TouchableOpacity
              onPress={() => { setModifyVisible(false); setConfirmVisible(true);} }
              style={{ height: 50, width: 200, marginRight:40, }}>
              <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }} >YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setModifyVisible(false);}}
              style={{ height: 50, width: 200, marginRight:40, }} >
              <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }} >NO</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* 비밀번호 변경 확인 */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={confirmVisible}
        closeOnTouchOutside={true}>
          <View style={styles.modalContainer}>
          <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, 
                }}> 비밀번호가 변경되었습니다.</Text>
          <TouchableOpacity
              onPress={() => { setConfirmVisible(false);} }
              style={{ height: 50, width: 200, marginRight:40, marginTop: "5%"}}>
              <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50,
                }} >YES</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        
      {/* 모달창 코드 끝 */}

        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10 }} source={home} />
          </TouchableOpacity>
        </View>

        

        {/* 기본값설정 상자 */}
        <View style={styles.subTitleBox}>
          <Text style={{color: "#808080",fontSize: 20,marginTop: 30, marginBottom: 10, }} > 기본 값 설정 </Text>
        </View>
        <View style={styles.informBox}>
          <View style={styles.settingText}> 
            <Text style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 글자 크기 </Text>
              <Text style={{ fontSize: 20, letterSpacing: 2, marginLeft: "3%", marginRight: "1%"}}> A </Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={20}
                maximumValue={30}
                value={userSize}
                onValueChange={(value)=>setSize(value)} // 슬라이더 움직일 때 출력값 반환
                minimumTrackTintColor="#80AE92"
                maximumTrackTintColor="#80AE92"
              />
              <Text style={{ fontSize: 30, letterSpacing: 2, marginLeft: "1%",}}> A </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 폰트 종류 </Text>
            <TouchableOpacity
            onPress={() => {setFontVisible(true);}}
            style={{ marginLeft: "3%", lineHeight: 60, }}>
            <Text style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%", lineHeight: 60, fontFamily: fontPath }} > {userFont}</Text>                                                      
          </TouchableOpacity>
          </View>
        </View>

        {/* 미리보기상자 */}
        <View style={styles.previewBox}>
          <Text style={{fontSize: userSize, fontFamily: fontPath}}> 가나다라마바사아자차카타파하 </Text>
        </View>

        {/* 확인, 로그아웃 상자 */}
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            onPress={() => {navigation.navigate("MAIN"); saveSize(userSize); saveFont(userFont); savePath(fontPath);}}
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginRight:40, }} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >저장</Text>
          </TouchableOpacity>

          {userId!=undefined? null :
            // ID가 null 일 때 애플 로그인
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
              cornerRadius={5}
              style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginLeft: 40 }}
              onPress={async () => {
                try {
                  setIdentity (
                    await AppleAuthentication.signInAsync({
                      requestedScopes: [
                        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                        AppleAuthentication.AppleAuthenticationScope.EMAIL,
                      ],
                    })
                  );
                  setID(String(identity.user));
                  saveUser(String(identity.user));
                  // signed in
                } catch (error) {
                  if (e.code === 'ERR_CANCELED') {
                    console.info("The user cancelled in the sign in.", error);
                  } else {
                    console.info("An error occurred signing in.", error);
                  }
                }
              }}
            />
          }
        </View>
        </>
        )}
        <Text style={{ marginTop: 0, width: "80%" }}> user id : {userId} </Text>
      </View>
    );
  };

export default Profile_login;

const styles = StyleSheet.create({
  // 배경색 넣은 컨테이너
  container: {
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
  subTitleBox: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  subTitle: {
    color: "#808080",
    fontSize: 18,
    marginTop: 60,
    marginBottom: 20,
  },
  informBox: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
  settingText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  previewBox: {
    width: "85%",
    height: "17%",
    marginTop: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
  ButtonBox: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "94%",
    height: 1,
    backgroundColor: "#C4C4C4",
    marginLeft: "3%",
  },
  modalContainer: {
    marginTop: "50%",
    width: "60%",
    marginLeft:"20%",
    height: 200,
    opacity: 0.9,
    backgroundColor: "#80AE92",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonBox: {
    width: "100%",
    height: "15%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  FontContainer: {
    marginTop: "25%",
    width: "50%",
    marginLeft:"25%",
    height: "50%",
    opacity: 1,
    backgroundColor: "#F9F9F9",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4"
  },
  buttonBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  rowBox: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: "60%",
    height: 40,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight:"1%",
    borderWidth: 1,
    borderColor:"#80AE92", 
    fontSize: 22,
  },
});
