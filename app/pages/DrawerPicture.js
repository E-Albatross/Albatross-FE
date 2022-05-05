import React, { useState, Component, useRef } from "react";
import {
  StyleSheet,
  View, Image,
  TouchableOpacity,
} from "react-native";

//이미지 파일들
import home from "../assets/home.png";
import drawer from "../assets/MainPage/apps_white2.png";

const DrawerPicture = ({ navigation, route }) => {
    const url = route.params.url;
  return (
      <>
        <View style={styles.container}>
        {/* 헤더부분 */}
        <View style={styles.headerRow}>
            <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
            >
            <Image style={{ marginLeft: 20 }} source={home} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("DRAWER")}> 
                <Image source={drawer} style={{width: 70, height: 70, marginTop:10}} />
            </TouchableOpacity>
        </View>

        <Image source={{uri : url}} 
        style={{height: "85%", width: "95%", marginTop:"10%"}}/>
        </View>
    </>
);
};

export default DrawerPicture;

const styles = StyleSheet.create({
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
    height: 80,
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
