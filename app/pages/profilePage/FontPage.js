import React, { useEffect, useState } from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import home from "../../assets/home.png";

import { Font } from 'expo';

const FontPage = ({navigation}) => {

    const [isReady, setIsReady] = useState(true);

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
    

    // 폰트 한글 이름 저장
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
          {isReady && (
          <>
            <View style={styles.headerRow}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MAIN")}
                    style={styles.iconbutton}>
                    <Image style={{ marginLeft: 10, marginTop: 10}} source={home} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("PROFILE_LOGIN")}
                    style={styles.iconbutton} > 
                    <Text style={{ fontSize: 25, letterSpacing: 2,  fontWeight: "bold", marginRight: 10, marginTop: 20, color: "white",}} > 취소 </Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("수트체"); savePath("SUIT-Regular");}}> 
                    <Text style={{ fontSize: 30,fontFamily: "SUIT-Regular"}}>수트체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("교보손글씨체"); savePath("KyoboHandwriting2019");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "KyoboHandwriting2019"}}>교보손글씨체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("앨리스체"); savePath("EliceDigitalBaeum");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "EliceDigitalBaeum"}}>앨리스체</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("쿠키런체"); savePath("CookieRun-Regular");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "CookieRun-Regular"}}>쿠키런체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("카페24체"); savePath("Cafe24Ssurroundair");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "Cafe24Ssurroundair"}}>카페24체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("Y유니버스체"); savePath("YUniverse-L");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "YUniverse-L"}}>Y유니버스체</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("아임크리체"); savePath("ImcreSoojin_Regular");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "ImcreSoojin_Regular"}}>아임크리체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("주아체"); savePath("BMJUA");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "BMJUA"}}>주아체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("HS유지체"); savePath("HSYuji-Regular");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "HSYuji-Regular"}}>HS유지체</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("노토산스"); savePath("NotoSansKR-Regular");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Regular"}}>노토산스</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("함박눈체"); savePath("SF_HambakSnow");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "SF_HambakSnow"}}>함박눈체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("PROFILE_LOGIN"); saveFont("어그로체B"); savePath("SBAggroB");}}> 
                    <Text style={{ fontSize: 30, fontFamily: "SBAggroB"}}>어그로체B</Text>
                </TouchableOpacity>
            </View>
        </>
        )}
      </View>
    );
  };

export default FontPage;

const styles = StyleSheet.create({
  // 배경색 넣은 컨테이너
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F8F7",
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
  FontRow: {
    marginTop: "5%",
    width: "90%",
    height: 90,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
});
