import React, { Component, useEffect, useState } from "react";
import {
  Text, View, Button, StyleSheet, Image, 
  TextInput,
  TouchableOpacity,
} from "react-native";

import home from "../../assets/home.png";

import { Font } from 'expo';

const FontPage = ({navigation}) => {
    const [isReady, setIsReady] = useState(true);

    const [Font, setFont] = useState("NotoSansKR-Light"); // 원래는 서버에서 받아옴. 임의로 설정
 
    useEffect(async () => {
        await Font.loadAsync({
            'NotoSansKR-Light': require('../../assets/fonts/NotoSansKR-Light.ttf'),
            'NotoSansKR-Regular': require('../../assets/fonts/NotoSansKR-Regular.ttf'),
            'CWDangamAsac-Bold': require('../../assets/fonts/CWDangamAsac-Bold.ttf'),
            'HSYuji-Regular': require('../../assets/fonts/HSYuji-Regular.ttf'),
            'SBAggroB': require('../../assets/fonts/SBAggroB.ttf'),
            'SF_HambakSnow': require('../../assets/fonts/SF_HambakSnow.ttf'),

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
                    <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Light"}}>얇은 노토산스</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Regular"}}>보통 노토산스</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "CWDangamAsac-Bold"}}>창원단감이삭체</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.FontRow}>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "HSYuji-Regular"}}>HS유지체</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "SBAggroB"}}>어그로체B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE_LOGIN")}> 
                    <Text style={{ fontSize: 30, fontFamily: "SF_HambakSnow"}}>함박눈체</Text>
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
    width: "80%",
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  
});
