import React from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity, FlatList,
} from "react-native";

import home from "../assets/home.png";
import literature from "../assets/literature.png";

import literList from "../components/ExLiterature/literList";

const DrawerPage = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10, marginTop: 10 }} source={home} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 30,
            marginTop: 60,
            marginLeft: 15,
            marginBottom: 60,
            letterSpacing: 10,
          }}
        >
          {" "}
          내 서랍{" "}
        </Text>

        <FlatList
        data={literList.new}
        columnWrapperStyle={{
          marginBottom: 20,
        }}
        renderItem={({item}) => 
            <TouchableOpacity key={item.id}
              // onPress={() => navigation.navigate("CAPTURE",{
              //   category: "new",
              //   id: item.id,
              //   text: item.text,
              // })}
              style={styles.iconbutton} >
              <Image source={literature} style={{marginLeft: 20, marginRight: 20}} />
            </TouchableOpacity>
      }
        keyExtractor={(item, index) => index}
        numColumns={3}
      />
          
      </View>
    );
}

export default DrawerPage;

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
