import React, { Component, useEffect, useState } from "react";
import {
  Text, View, Button, StyleSheet, Image, 
  TextInput,
  TouchableOpacity,
} from "react-native";

import home from "../../assets/home.png";

import * as Font from "expo-font";

const FontPage = ({navigation}) => {
    const [isReady, setIsReady] = useState(true);

    // const [Font, setFont] = useState("NotoSansKR-Light"); // 원래는 서버에서 받아옴. 임의로 설정
 
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
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "SUIT-Regular"}}>수트체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "KyoboHandwriting2019"}}>교보손글씨체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "EliceDigitalBaeum"}}>앨리스체</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "CookieRun-Regular"}}>쿠키런체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "Cafe24Ssurroundair"}}>카페24체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "YUniverse-L"}}>Y유니버스체</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "ImcreSoojin_Regular"}}>아임크리수진체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "BMJUA"}}>주아체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "HSYuji-Regular"}}>HS유지체</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Regular"}}>노토산스</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "SF_HambakSnow"}}>함박눈체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  
});
