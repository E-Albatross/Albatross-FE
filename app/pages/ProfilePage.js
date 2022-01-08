import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import home from "../assets/home.png";
import literature from "../assets/literature.png";

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
        <Text
          style={{
            color: "#808080",
            fontSize: 20,
            marginTop: 60,
            marginBottom: 10,
          }}
        >
          개인정보설정{" "}
        </Text>
        <View style={styles.informBox}></View>
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
        <View style={styles.settingBox}></View>
        <View style={styles.previewBox}></View>
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
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
  },
  literatureRow: {
    marginTop: 10,
    marginBottom: 10,
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    justifyContent: "flex-start",
    alignItems: "center",
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
});
