import React, { useState, Component, useRef } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import SignatureScreen from "react-native-signature-canvas";

//스크린샷
import ViewShot, { captureScreen } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";

//이미지 파일들
import home from "../assets/home.png";
import pen from "../assets/pen.png";
import erase from "../assets/erase.png";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";

const ExLine = ({ navigation }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    handleOK(signature);
  };
  const handleClear = () => {
    ref.current.clearSignature();
  };
  const handleUndo = () => {
    ref.current.undo();
  };
  const handleRedo = () => {
    ref.current.redo();
  };
  const handleDraw = () => {
    ref.current.draw();
  };
  const handleErase = () => {
    ref.current.erase();
  };

  const style = `.m-signature-pad { border: none; margin-top: 0px; margin-left: 0px; height: 1300px;} 
  .m-signature-pad--body {border: none;}
  .m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
      {/* 헤더부분 */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MAIN")}
          style={styles.iconbutton}
        >
          <Image style={{ marginLeft: 20 }} source={home} />
        </TouchableOpacity>
        <View style={styles.headerSubRow}>
          <TouchableOpacity onPress={handleDraw} style={styles.iconbutton}>
            <Image source={pen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleErase} style={styles.iconbutton}>
            <Image source={erase} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleUndo} style={styles.iconbutton}>
            <Image source={arrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRedo} style={styles.iconbutton}>
            <Image source={arrow2} />
          </TouchableOpacity>
        </View>
      </View>
      {/* 캔버스보드 부분 */}
      <View
        style={{
          height: 1300,
          width: 1000,
          position: "absolute",
          left: 0,
          top: 70,
        }}
      >
        <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      </View>
      {/* 가로줄 */}
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 120,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 170,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 220,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 270,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 320,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 370,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 420,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 470,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 520,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 570,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 620,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 670,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 720,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 770,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 820,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 870,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 920,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 970,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 1020,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 0,
          top: 1070,
        }}
      />
      {/* 세로줄 */}
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 50,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 100,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 150,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 200,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 250,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 300,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 350,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 400,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 450,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 500,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 550,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 600,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 650,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 700,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 750,
          top: 70,
        }}
      />
      <View
        style={{
          height: 1000,
          width: 1,
          backgroundColor: "#C4C4C4",
          position: "absolute",
          left: 800,
          top: 70,
        }}
      />
    </View>
  );
};

export default ExLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
  headerSubRow: {
    width: "35%",
    marginRight: 20,
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
});
