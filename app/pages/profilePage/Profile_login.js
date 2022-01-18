import React, { Component, useState } from "react";
import {
  Text, View, Button, StyleSheet, Image,
  TouchableOpacity, Modal
} from "react-native";

import home from "../../assets/home.png";
import literature from "../../assets/literature.png";

import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native'


const Profile_login = ({navigation}) => {
  const [OnOff, setOnOff] = useState(true);
  //모달창
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
    return (
      <View style={styles.container}>
        {/* 모달창 */}
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
      {/* 모달창 코드 끝 */}

        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10 }} source={home} />
          </TouchableOpacity>
        </View>

        {/* 개인정보설정 상자 */}
        <View style={styles.subTitleBox}>
          <Text style={{textAlign: "left",color: "#808080",fontSize: 20,marginTop: 60,marginBottom: 10,}}> 개인정보설정{" "}</Text>
        </View>
        <View style={styles.informBox}>
          <TouchableOpacity
            // onPress={() => }
            style={{ height: 60 }}>
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
          <Text style={{color: "#808080",fontSize: 20,marginTop: 30, marginBottom: 10, }} > 기본 값 설정 </Text>
        </View>
        <View style={styles.settingBox}>
          <View style={styles.settingText}> 
            <Text style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 글자 크기 </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%",
              lineHeight: 60, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} > 폰트 종류 </Text>
            <TouchableOpacity
            // onPress={() => }
            style={{ marginLeft: "3%", lineHeight: 60, }}>
            <Text style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%", lineHeight: 60, }} > HS유지체 </Text>                                                      
          </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <View style={styles.settingText}> 
            <Text
              style={{ fontSize: 22, letterSpacing: 2, marginLeft: "3%", marginTop:"2%", marginRight:"2%" }} > 실시간 검사 </Text>
            <SwitchToggle
              switchOn={OnOff}
              onPress={() => setOnOff(!OnOff)}
              circleColorOff='#FFFFFF'
              circleColorOn='#FFFFFF'
              backgroundColorOn='#80AE92'
              backgroundColorOff='#80AE92'
            />
          </View>
        </View>

        {/* 미리보기상자 */}
        <View style={styles.previewBox}></View>

        {/* 확인, 로그아웃 상자 */}
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginRight:40, }} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ height: 50, width: 200, backgroundColor: "#80AE92", borderRadius: 5, marginLeft: 40, }} >
            <Text
              style={{ fontSize: 25, letterSpacing: 2, color: "white", fontWeight: "bold", textAlign: "center", lineHeight: 50, // 버튼 높이와 똑같이 설정하면 수직정렬이 됨.
              }} >로그아웃</Text>
          </TouchableOpacity>
        </View>
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
  modalContainer: {
    marginTop: "50%",
    width: "60%",
    marginLeft:"20%",
    height: 200,
    opacity: 80,
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
});
