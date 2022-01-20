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

//ㅋㅓㅁ포넌트
import Word from "../components/Word";


const ExWord = ({ navigation }) => {
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

  const style = `
  body {
    background: url("data:image/png;base64,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") repeat scroll center center rgb(179, 179, 179);
    font-family: Helvetica, Sans-Serif;
  
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  
  .m-signature-pad {
    position: absolute;
    font-size: 10px;
    width: 700px;
    height: 400px;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    margin-top: -200px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
  }
  
  .m-signature-pad:before, .m-signature-pad:after {
    position: absolute;
    z-index: -1;
    content: "";
    width: 40%;
    height: 10px;
    left: 20px;
    bottom: 10px;
    background: transparent;
    -webkit-transform: skew(-3deg) rotate(-3deg);
    -moz-transform: skew(-3deg) rotate(-3deg);
    -ms-transform: skew(-3deg) rotate(-3deg);
    -o-transform: skew(-3deg) rotate(-3deg);
    transform: skew(-3deg) rotate(-3deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  }
  
  .m-signature-pad:after {
    left: auto;
    right: 20px;
    -webkit-transform: skew(3deg) rotate(3deg);
    -moz-transform: skew(3deg) rotate(3deg);
    -ms-transform: skew(3deg) rotate(3deg);
    -o-transform: skew(3deg) rotate(3deg);
    transform: skew(3deg) rotate(3deg);
  }
  
  .m-signature-pad--body {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 60px;
    border: 1px solid #f4f4f4;
  }
  
  .m-signature-pad--body
    canvas {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
    }
  
  .m-signature-pad--footer {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
    height: 40px;
  }
  
  .m-signature-pad--footer
    .description {
      color: #C3C3C3;
      text-align: center;
      font-size: 1.2em;
      margin-top: 1.8em;
    }
  
  .m-signature-pad--footer
    .button {
      position: absolute;
      bottom: 0;
      background-color: #3F99F7;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #FFF;
      border: none;
      outline: none;
    }
  
  .m-signature-pad--footer
    .button.clear {
      left: 0;
    }
  
  .m-signature-pad--footer
    .button.save {
      right: 0;
    }`;

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
      

      {/* 가로줄 */}
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 135,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 200,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 265,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 330,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 395,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 460,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 525,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 590,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 655,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 720,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 785,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 850,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 915,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 980,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 1045,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 1110,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 1175,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 1240,}}/>
      <View style={{width: "100%", height: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 0, top: 1305,}}/>
      
      {/* 세로줄 */}
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 65, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 130, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 195, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 260, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 325, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 390, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 455, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 520, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 585, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 650, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 715, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 780, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 845, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 910, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 975, top: 70, }} />
      <View style={{ height: 1500, width: 1, backgroundColor: "#C4C4C4", position: "absolute", left: 1030, top: 70, }} />
      
      {/* 자음 */}
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 30,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㄱ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 95,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㄴ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 160,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㄷ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 225,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㄹ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 290,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅁ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 355,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅂ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 420,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅅ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 485,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅇ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 550,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅈ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 615,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅊ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 680,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅋ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 745,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅌ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 810,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅍ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 0,
          top: 875,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅎ{" "}
      </Text>

      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 30,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㄱ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 95,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㄴ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 160,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㄷ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 225,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㄹ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 290,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅁ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 355,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅂ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 420,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅅ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 485,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅇ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 550,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅈ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 615,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅊ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 680,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅋ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 745,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅌ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 810,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅍ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 65,
          top: 875,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅎ{" "}
      </Text>
      {/* 모음 */}
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 30,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅏ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 95,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅑ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 160,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅓ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 225,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅕ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 290,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅗ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 355,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅛ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 420,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅜ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 485,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅠ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 550,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅡ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 392,
          top: 615,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
        }}
      >
        {" "}
        ㅣ{" "}
      </Text>

      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 30,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅏ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 95,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅑ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 160,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅓ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 225,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅕ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 290,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅗ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 355,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅛ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 420,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅜ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 485,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅠ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 550,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅡ{" "}
      </Text>
      <Text
        style={{
          position: "absolute",
          left: 455,
          top: 615,
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontWeight: "bold",
          opacity: 0.3,
        }}
      >
        {" "}
        ㅣ{" "}
      </Text>

      <View style={{ height: 300, width: 300, position: "absolute", left: 0, top: 70, }}>
        <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      </View>
    </View>
  );
};

export default ExWord;

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
