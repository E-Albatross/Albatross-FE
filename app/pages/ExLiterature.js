import React, { useState, Component, useRef } from "react";
import { StyleSheet, View, Button, Text,
  SafeAreaView, PermissionsAndroid, Platform,
  Image, TouchableOpacity, Modal
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
import confirm from "../assets/confirm.png";

//컴포넌트
import Name from "../components/ExLiterature/Liter_name";
import literList from "../components/ExLiterature/literList";

const ExLiterature = ({ navigation, route}) => {
  const ref = useRef();

  // category: "new",
  // id: s.id,
  const category = route.params.category;
  const id = route.params.id;

  const [finish, setFinish] = useState(false); // finish되지 않은 상태로 초기설정

  //모달창
  const [modalVisible, setModalVisible] = useState(false);

  const handleOK = (signature) => { handleOK(signature); };
  const handleClear = () => { ref.current.clearSignature(); };
  const handleUndo = () => { ref.current.undo(); };
  const handleRedo = () => { ref.current.redo(); };
  const handleDraw = () => { ref.current.draw(); };
  const handleErase = () => { ref.current.erase(); };

  const style = `.m-signature-pad { border: none; box-shadow: none; margin-top: 0px; margin-left: 0px; height: 1300px;} 
  .m-signature-pad--body {border: none; opacity: 80; backgroundColor: #F9F9F9;}
  .m-signature-pad--footer {display: none; margin: 0px;}`;

  //스크린샷 캡쳐 위한 코드
  const captureRef = useRef();

  const getPhotoUri = async (): Promise<string> => {
    const uri = await captureRef.current.capture();
    console.log("👂👂 Image saved to", uri);
    return uri;
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  const onSave = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      toast("갤러리 접근 권한이 없어요");
      return;
    }
    const uri = await getPhotoUri();
    const result = await CameraRoll.save(uri);
    console.log("🐤result", result);
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
          { finish == false ?
            (<>
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
              {/* //; setFinish(true); */}
              <TouchableOpacity onPress={onSave} style={styles.iconbutton}>
                <Image source={confirm} />
              </TouchableOpacity> 
            </> 
            ): (
            <>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ height: 60 }}>
                <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginLeft: 100}} > 다운로드 </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate("MAIN")}
              style={{ height: 60 }}>
              <Text style={{ fontSize: 20, letterSpacing: 2, marginTop:20, color: "white", fontWeight: "bold", marginRight: 20}} > 확인 </Text>
            </TouchableOpacity>
          </>)
        }
        </View>
      </View>

      {/* 모달창 */}
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderRow}> 
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginLeft: 10}} > 취소 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ fontSize: 20, letterSpacing: 2,  fontWeight: "bold", textAlign: "center", marginRight: 10}} > 저장 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalPage}></View>
        </View>
      </Modal>
      {/* 모달창 코드 끝 */}

      <Name name={"제목"} />
      
      {/* 캔버스보드 부분 */}
      <ViewShot ref={captureRef} options={{ format: "jpg", quality: 0.9 }}>

      <View style={{ marginTop: 10, marginLeft: 900, height: 1000, width: 900, justifyContent: "center", 
      alignItems: "center", }} >

      <Text style={{ fontSize: 25, letterSpacing: 5, position: "absolute", left: "-41%", top: 0, lineHeight: 150, width: "85%"}}> {id} </Text>   

        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 100, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 250, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 400, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 550, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 700, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>
        <View style={{ height: 100, width: "85%", position: "absolute", left: "-42%", top: 850, }}>
          <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        </View>

        {/* 가로줄 */}
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 50, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 100, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 150, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 200, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 250, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 300, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 350, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 400, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 450, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 500, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 550, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 600, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 650, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 700, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 750, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 800, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 850, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 900, }} />
        <View style={{ width: "85%", height: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 950, }} />

        {/* 세로줄 */}
        <View style={{ height: 900, width: 1, backgroundColor: "#000000", position: "absolute", left: "-42%", top: 50, }} />
        <View style={{ height: 900, width: 1, backgroundColor: "#000000", position: "absolute", left: "43%", top: 50, }} />

        </View>
        </ViewShot>
    </View>
  );
};

export default ExLiterature;

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
  name: {
    width: "100%",
    height: 70,
    position: "absolute",
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
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
  modalContainer: {
    width: "80%",
    height: "75%",
    top: "15%",
    left: "10%",
    borderWidth: 0.5,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  modalHeaderRow: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalPage: {
    width: "100%",
    height: "30%",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8F7",
  },
});
