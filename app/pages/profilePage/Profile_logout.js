import React, { useState, useEffect } from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity, Modal,  ScrollView,
} from "react-native";
import * as Font from "expo-font";

//텍스트 슬라이더
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

import home from "../../assets/home.png";

const Profile_logout = ({ navigation}) => {
  //모달창
  const [modalVisible, setModalVisible] = useState(false)
  const [fontVisible, setFontVisible] = useState(false)
  const [userSize,setSize] = useState(25); // 초기값을 폰트사이즈 25로 설정
  

  // 유저 사이즈 앱에 저장
  const saveSize= async (userSize) => {
    try {
      await AsyncStorage.setItem('userSize', String(userSize))
    } catch (e) {
      // saving error
    }
  }

  // 유저 사이즈 가져옴
  useEffect(() => {
    AsyncStorage.getItem('userSize').then((size)=>{
      if(size!=null){
        setSize(Number(size));
      } else setSize(25);
    })
  },[]);

  // 폰트 정보 가져오기
  useEffect(async () => {
    await Font.loadAsync({
        'SF_HambakSnow': require('../../assets/fonts/SF_HambakSnow.ttf'),
        'ImcreSoojin_Regular': require('../../assets/fonts/ImcreSoojin_Regular.ttf'),
        'NotoSansKR-Regular': require('../../assets/fonts/NotoSansKR-Regular.ttf'),

        'CWDangamAsac-Bold': require('../../assets/fonts/CWDangamAsac-Bold.ttf'),
        'HSYuji-Regular': require('../../assets/fonts/HSYuji-Regular.ttf'),
        'SBAggroB': require('../../assets/fonts/SBAggroB.ttf'),

        'SUIT-Regular': require('../../assets/fonts/SUIT-Regular.ttf'),
        'KyoboHandwriting2019': require('../../assets/fonts/KyoboHandwriting2019.ttf'),
        'EliceDigitalBaeum': require('../../assets/fonts/EliceDigitalBaeum.ttf'),

        'CookieRun-Regular': require('../../assets/fonts/CookieRun-Regular.ttf'),
        'Cafe24Ssurroundair': require('../../assets/fonts/Cafe24Ssurroundair.ttf'),
        'YUniverse-L': require('../../assets/fonts/YUniverse-L.ttf'),

        'BMJUA': require('../../assets/fonts/YUniverse-L.ttf'),
    });
    setIsReady(true);
}, []);

  const [userFont,setFont] = useState("함박눈체"); // 초기 폰트 설정
  const [fontPath,setPath] = useState("SF_HambakSnow"); // 초기 폰트 설정
  const [buttonFlag, setFlag] = useState(1);

  // 폰트 경로 가져옴
  useEffect(() => {
    AsyncStorage.getItem('userFont').then((font)=>{
      if(font!=null){
        setFont(font);
      }
    })
  },[buttonFlag]);

  //폰트 이름 가져옴
  useEffect(() => {
    AsyncStorage.getItem('fontPath').then((font)=>{
      if(font!=null){
        setPath(font);
      }
    })
  },[buttonFlag]);

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

    return (
      <View style={styles.container}>
        {/* 로그아웃모달창 */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}>
          <View style={styles.modalContainer}>
          <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }}> 로그아웃 하시겠습니까?</Text>
          <View style={styles.modalButtonBox}> 
          <TouchableOpacity
              onPress={() => {navigation.navigate("PROFILE_LOGOUT"); setModalVisible(false);} }
              style={{ height: 50, width: 200, marginRight:40, }}>
              <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }} >YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {navigation.navigate("PROFILE_LOGIN"); setModalVisible(false);}}
              style={{ height: 50, width: 200, marginRight:40, }} >
              <Text style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
                }} >NO</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* 폰트설정창 */}
        <Modal
        animationType='slide'
        transparent={true}
        visible={fontVisible}>
          
          <View style={styles.FontContainer}>
          <ScrollView contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                      centerContent={true} indicatorStyle={"white"}>
            <TouchableOpacity onPress={() => {saveFont("수트체"); savePath("SUIT-Regular");setFlag(buttonFlag+1); setFontVisible(false);}}> 
                <Text style={{ fontSize: 30,fontFamily: "SUIT-Regular", marginTop: 30, marginBottom: 30}}>수트체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {saveFont("교보손글씨체"); savePath("KyoboHandwriting2019");setFlag(buttonFlag+1); setFontVisible(false);}}> 
                <Text style={{ fontSize: 30, fontFamily: "KyoboHandwriting2019",  marginBottom: 30}}>교보손글씨체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {saveFont("앨리스체"); savePath("EliceDigitalBaeum");setFlag(buttonFlag+1); setFontVisible(false);}}> 
                <Text style={{ fontSize: 30, fontFamily: "EliceDigitalBaeum",  marginBottom: 30}}>앨리스체</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("아임크리체"); savePath("ImcreSoojin_Regular");}}> 
                <Text style={{ fontSize: 30, fontFamily: "ImcreSoojin_Regular",  marginBottom: 30}}>아임크리체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("주아체"); savePath("BMJUA");}}> 
                <Text style={{ fontSize: 30, fontFamily: "BMJUA",  marginBottom: 30}}>주아체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("HS유지체"); savePath("HSYuji-Regular");}}> 
                <Text style={{ fontSize: 30, fontFamily: "HSYuji-Regular",  marginBottom: 30}}>HS유지체</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false);saveFont("쿠키런체"); savePath("CookieRun-Regular");}}> 
                <Text style={{ fontSize: 30, fontFamily: "CookieRun-Regular", marginBottom: 30}}>쿠키런체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("카페24체"); savePath("Cafe24Ssurroundair");}}> 
                <Text style={{ fontSize: 30, fontFamily: "Cafe24Ssurroundair", marginBottom: 30}}>카페24체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("Y유니버스체"); savePath("YUniverse-L");}}> 
                <Text style={{ fontSize: 30, fontFamily: "YUniverse-L", marginBottom: 30}}>Y유니버스체</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("노토산스"); savePath("NotoSansKR-Regular");}}> 
                <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Regular", marginBottom: 30}}>노토산스</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("함박눈체"); savePath("SF_HambakSnow");}}> 
                <Text style={{ fontSize: 30, fontFamily: "SF_HambakSnow", marginBottom: 30}}>함박눈체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFlag(buttonFlag+1); setFontVisible(false); saveFont("어그로체B"); savePath("SBAggroB");}}> 
                <Text style={{ fontSize: 30, fontFamily: "SBAggroB", marginBottom: 30}}>어그로체B</Text>
            </TouchableOpacity>
            </ScrollView>
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
            onPress={() => navigation.navigate("MAIN")}
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginRight: 40, }} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("LOGIN")}
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginLeft: 40, }} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

export default Profile_logout;

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
    height: 90,
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
    backgroundColor: "#F7F8F7",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4"
  },
});
