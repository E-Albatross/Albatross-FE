import React, { Component, useState } from "react";
import {
  Text, View, Button, StyleSheet, Image,
  TouchableOpacity,
} from "react-native";

import home from "../../assets/home.png";
import back from "../../assets/back.png";
import literature from "../../assets/literature.png";

import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native'

const SignIn = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10, marginTop: 10}} source={home} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("LOGIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginRight: 10, marginTop: 10 }} source={back} />
          </TouchableOpacity>
        </View>

        {/* 확인, 로그아웃 상자 */}
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            // onPress={() => }
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5,}} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >등록</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

export default SignIn;

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
  ButtonBox: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
