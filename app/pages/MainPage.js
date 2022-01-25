import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import drawer from "../assets/MainPage/drawer.png";
import profile from "../assets/MainPage/profile.png";
import literature from "../assets/MainPage/literature.png";

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PROFILE_LOGIN")}
            style={styles.iconbutton}
          >
            <Image source={profile} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DRAWER")}
            style={styles.iconbutton}
          >
            <Image source={drawer} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 30,
            marginTop: 60,
            marginLeft: 30,
            marginBottom: 100,
            letterSpacing: 15,
            fontFamily: "NotoSansKR-Regular",
          }}
        >
          바른글씨{" "}
        </Text>

        <View style={styles.practiceRow}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LINE")}
            style={{
              height: 130,
              width: "45%",
              backgroundColor: "#80AE92",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 15,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 50,
              }}
            >
              {" "}
              줄 긋기 연습{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("WORD")}
            style={{
              height: 130,
              width: "45%",
              backgroundColor: "#80AE92",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 15,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 50,
              }}
            >
              {" "}
              자음모음 연습{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wordRow}>
          <Text style={{ color: "#C4C4C4" }}> New </Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.literatureRow}>
          {/* 여기서부터는 따로 js파일 작업 필요. 일단 복붙으로 처리 */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
          </TouchableOpacity>
        </View>

        <View style={styles.wordRow}>
          <Text style={{ color: "#C4C4C4" }}> Best </Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.literatureRow}>
          {/* 여기서부터는 따로 js파일 작업 필요. 일단 복붙으로 처리 */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CAPTURE")}
            style={styles.iconbutton}
          >
            <Image source={literature} />
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
  // 세로줄 컴포넌트
  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // 컴포넌트를 양쪽에 배치하는 컴포넌트
  headerRow: {
    marginTop: 30,
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  practiceRow: {
    marginBottom: 30,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wordRow: {
    marginBottom: 5,
    marginTop: 5,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    width: "94%",
    height: 1,
    backgroundColor: "#C4C4C4",
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
});
