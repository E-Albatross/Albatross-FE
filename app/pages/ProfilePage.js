import React, { Component } from "react";
import {
  Text, View, Button, StyleSheet, Image,
  TouchableOpacity,
} from "react-native";

import home from "../assets/home.png";
import literature from "../assets/literature.png";
import Toggle from "../components/Toggle";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10 }} source={home} />
          </TouchableOpacity>
        </View>

        {/* 개인정보설정 상자 */}
        <View style={styles.subTitleBox}>
          <Text
            style={{
              textAlign: "left",
              color: "#808080",
              fontSize: 20,
              marginTop: 60,
              marginBottom: 10,
            }}>
            개인정보설정{" "}
          </Text>
        </View>
        <View style={styles.informBox}>
          <TouchableOpacity
            // onPress={() => }
            style={{ height: 60 }}
          >
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 비밀번호변경 </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            // onPress={() => }
            style={{ height: 60 }}
          >
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 이메일 변경 </Text>
          </TouchableOpacity>
        </View>

        {/* 기본값설정 상자 */}
        <View style={styles.subTitleBox}>
          <Text
            style={{
              color: "#808080",
              fontSize: 20,
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            기본 값 설정{" "}
          </Text>
        </View>
        <View style={styles.settingBox}>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >
              글자 크기 </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >
              폰트 종류 </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >
              실시간 검사 </Text>
              {/* <Toggle/> */}
          </View>
        </View>

        {/* 미리보기상자 */}
        <View style={styles.previewBox}></View>

        {/* 확인, 로그아웃 상자 */}
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            // onPress={() => }
            style={{
              height: 50,
              width: 200,
              backgroundColor: "#80AE92",
              borderRadius: 5,
              marginRight: 30,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                letterSpacing: 2,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }}
            >
              확인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => }
            style={{
              height: 50,
              width: 200,
              backgroundColor: "#80AE92",
              borderRadius: 5,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                letterSpacing: 2,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }}
            >
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
    height: "11%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
  settingBox: {
    width: "85%",
    height: "17%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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
    justifyContent: "flex-start",
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
});
