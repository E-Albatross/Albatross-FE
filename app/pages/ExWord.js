import React, { useState, Component, useRef } from "react";
import { StyleSheet, View, Button, Text,
  SafeAreaView, PermissionsAndroid, Platform,
  Image, TouchableOpacity,
} from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import { Canvas, CanvasRef, DrawingTool } from '@benjeau/react-native-draw';

//스크린샷
import ViewShot, { captureScreen } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";

//이미지 파일들
import home from "../assets/home.png";
import pen from "../assets/pen.png";
import erase from "../assets/erase.png";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";

//
import Word from "../components/Word";


const ExWord = ({ navigation }) => {
  //draw
  const canvasRef = useRef();
  const [tool, setTool] = useState(DrawingTool.Brush);
  const handleUndo = () => { canvasRef.current?.undo(); };
  const handleClear = () => { canvasRef.current?.clear(); };
  const handleToggleEraser = () => {
    setTool((prev) =>
      prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush
    );
  };

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
              <TouchableOpacity onPress={handleToggleEraser} style={styles.iconbutton}>
                 { tool === DrawingTool.Brush ? 
                 <Image source={erase} /> : <Image source={pen}/>}
              </TouchableOpacity>
              <TouchableOpacity onPress={handleUndo} style={styles.iconbutton}>
                <Image source={arrow} />
              </TouchableOpacity>
        </View>
      </View>
    

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
      <Text style={{ position: "absolute", left: 15, top: 30, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㄱ</Text>
      <Text style={{ position: "absolute", left: 15, top: 95, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㄴ</Text>
      <Text style={{ position: "absolute", left: 15, top: 160, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㄷ</Text>
      <Text style={{ position: "absolute", left: 15, top: 225, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㄹ</Text>
      <Text style={{ position: "absolute", left: 15, top: 290, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅁ</Text>
      <Text style={{ position: "absolute", left: 15, top: 355, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅂ</Text>
      <Text style={{ position: "absolute", left: 15 , top: 420, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅅ</Text>
      <Text style={{ position: "absolute", left: 15, top: 485, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅇ</Text>
      <Text style={{ position: "absolute", left: 15, top: 550, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅈ</Text>
      <Text style={{ position: "absolute", left: 15, top: 615, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅊ</Text>
      <Text style={{ position: "absolute", left: 15, top: 680, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅋ</Text>
      <Text style={{ position: "absolute", left: 15, top: 745, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅌ</Text>
      <Text style={{ position: "absolute", left: 15, top: 810, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅍ</Text>
      <Text style={{ position: "absolute", left: 15, top: 875, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅎ</Text>

      <Text style={{ position: "absolute", left: 80, top: 30, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㄱ</Text>
      <Text style={{ position: "absolute", left: 80, top: 95, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㄴ</Text>
      <Text style={{ position: "absolute", left: 80, top: 160, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㄷ</Text>
      <Text style={{ position: "absolute", left: 80, top: 225, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㄹ</Text>
      <Text style={{ position: "absolute", left: 80, top: 290, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅁ</Text>
      <Text style={{ position: "absolute", left: 80, top: 355, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅂ</Text>
      <Text style={{ position: "absolute", left: 80, top: 420, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅅ</Text>
      <Text style={{ position: "absolute", left: 80, top: 485, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅇ</Text>
      <Text style={{ position: "absolute", left: 80, top: 550, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅈ</Text>
      <Text style={{ position: "absolute", left: 80, top: 615, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅊ</Text>
      <Text style={{ position: "absolute", left: 80, top: 680, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅋ</Text>
      <Text style={{ position: "absolute", left: 80, top: 745, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅌ</Text>
      <Text style={{ position: "absolute", left: 80, top: 810, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅍ</Text>
      <Text style={{ position: "absolute", left: 80, top: 875, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅎ</Text>

      {/* 모음 */}
      <Text style={{ position: "absolute", left: 405, top: 30, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅏ</Text>
      <Text style={{ position: "absolute", left: 405, top: 95, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅑ</Text>
      <Text style={{ position: "absolute", left: 405, top: 160, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅓ</Text>
      <Text style={{ position: "absolute", left: 405, top: 225, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅕ</Text>
      <Text style={{ position: "absolute", left: 405, top: 290, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅗ</Text>
      <Text style={{ position: "absolute", left: 405, top: 355, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅛ</Text>
      <Text style={{ position: "absolute", left: 405, top: 420, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅜ</Text>
      <Text style={{ position: "absolute", left: 405, top: 485, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅠ</Text>
      <Text style={{ position: "absolute", left: 405, top: 550, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅡ</Text>
      <Text style={{ position: "absolute", left: 405, top: 615, fontSize: 40, textAlign: "center", paddingTop: 50, fontWeight: "bold", }}>ㅣ</Text>

      <Text style={{ position: "absolute", left: 470, top: 30, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅏ</Text>
      <Text style={{ position: "absolute", left: 470, top: 95, fontSize: 40, textAlign: "center", paddingTop: 50, opacity: 0.3,}}>ㅑ</Text>
      <Text style={{ position: "absolute", left: 470, top: 160, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅓ</Text>
      <Text style={{ position: "absolute", left: 470, top: 225, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅕ</Text>
      <Text style={{ position: "absolute", left: 470, top: 290, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅗ</Text>
      <Text style={{ position: "absolute", left: 470, top: 355, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅛ</Text>
      <Text style={{ position: "absolute", left: 470, top: 420, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅜ</Text>
      <Text style={{ position: "absolute", left: 470, top: 485, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅠ</Text>
      <Text style={{ position: "absolute", left: 470, top: 550, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅡ</Text>
      <Text style={{ position: "absolute", left: 470, top: 615, fontSize: 40, textAlign: "center", paddingTop: 50,  opacity: 0.3,}}>ㅣ</Text>

      {/* 캔버스보드 부분 */}
      <View style={{ height: 1300, width: 1000, position: "absolute", left: 0, top: 70,}} >
      <Canvas
            ref={canvasRef}
            color="black"
            tool={tool}
            eraserSize={5}
            style={{ backgroundColor: 'transparent', height: 1300, width: 1000, position: "absolute" }}
          />
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
    width: "15%",
    marginRight: 20,
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
});