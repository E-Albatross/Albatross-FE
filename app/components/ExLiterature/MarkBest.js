import React,  {useState, useEffect} from "react";
import { StyleSheet, View, Text,
  Image, TouchableOpacity, Modal
} from "react-native";

import markIcon from "../../assets/markIcon.png";
import mList_best from "./mList_best";

// {id:1, xPos: 100, yPos: 100, text: "글자크기를 키워보세요!"},
const Mark = (id)=> {
  // 느낌표 마크 모달창
  const [markModal, setMarkModal] = useState(false);

    return (
      <View style={styles.container}>
          {markList.first.map(s=>(
            <TouchableOpacity key={s.id} style={styles.iconbutton}>
              {/* onPress={() => setModalVisible(true)} */}
                <Image style={{ resizeMode:"contain", height: 30, width:30, position: "absolute", left:s.xPos, top:s.yPos}} source={markIcon} />
            </TouchableOpacity>
            ))}

            <Modal animationType='slide' transparent={true} visible={markModal}>
              <View style={styles.markModalContainer}>
                <View style={styles.markModalText}> 
                  <Text style={{ fontSize: 20, letterSpacing: 2, textAlign: "center", marginTop:"13%"}} > {s.text} </Text> 
                </View>
                  <TouchableOpacity onPress={() => setMarkModal(false)} style={{marginBottom: 1, width: "100%", height: "20%", backgroundColor: "#80AE92", borderRadius: 10,}}>
                      <Text style={{ fontSize: 20, letterSpacing: 2, textAlign: "center", marginLeft: 10, color:"white", fontWeight:"bold", paddingTop: "1%", }} > 확인 </Text>
                  </TouchableOpacity>
              </View>
            </Modal>
      </View>
    );
  };
  
  export default Mark;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      },
      markModalContainer: {
        width: "60%",
        height: "15%",
        top: "42.5%",
        left: "20%",
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      },
      markModalText: {
        width: "100%",
        height: "80%",
        flexDirection: "column",
        alignItems: "center",
      },
  });