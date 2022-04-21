import React, {useState, useEffect} from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity, ScrollView,
  Dimensions
} from "react-native";

import { FlatList } from 'react-native-gesture-handler';

import home from "../assets/home.png";
import literature from "../assets/literature.png";
import myLiter from "../components/myLiter";

import { LineChart } from "react-native-chart-kit";

import * as Font from "expo-font";

import new1 from "../assets/MainPage/new1.png";
import new2 from "../assets/MainPage/new2.png";
import new3 from "../assets/MainPage/new3.png";
import new4 from "../assets/MainPage/new4.png";
import new5 from "../assets/MainPage/new5.png";
import new6 from "../assets/MainPage/new6.png";

import best1 from "../assets/MainPage/best1.png";
import best2 from "../assets/MainPage/best2.png";
import best3 from "../assets/MainPage/best3.png";
import best4 from "../assets/MainPage/best4.png";
import best5 from "../assets/MainPage/best5.png";
import best6 from "../assets/MainPage/best6.png";


const DrawerPage = ({navigation}) => {
  const [isReady, setIsReady] = useState(false);

  const img = [new1, new2, new3, new4, new5, new6, best1, best2, best3, best4, best5, best6];

  useEffect(async () => {
    await Font.loadAsync({
        'SeoulHangangL': require('../assets/fonts/SeoulHangangL.ttf'),
    });
    setIsReady(true);
  }, []);

  const fontPath = "SeoulHangangL"; // 초기 폰트 설정

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#80AE92",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#80AE92",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 5) => `rgba(0, 70, 42, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    datasets: [
      {
        data: myLiter.first.map(s=>( s.score )),
        color: (opacity = 1) => `rgba(0, 70, 42, ${opacity})`,
        strokeWidth: 5 // optional
      }
    ],
    legend: ["내 점수"] // optional
  };

    return (
      <View style={styles.container}>
        {isReady && (
          <>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MAIN")}
            style={styles.iconbutton}
          >
            <Image style={{ marginLeft: 10, marginTop: 10 }} source={home} />
          </TouchableOpacity>
        </View>

          {/* <Text style={{ fontSize: 30, marginTop: 45, marginBottom: 45, marginLeft: 15, letterSpacing: 10, }} > 
          내 점수 </Text> */}

          <LineChart
            data={data}
            width={screenWidth-200}
            height={200}
            chartConfig={chartConfig}
          />

          <Text style={{ fontSize: 30, marginTop: 45, marginBottom: 45, marginLeft: 15, letterSpacing: 10, fontFamily : fontPath }} > 
          내 서랍 </Text>
          
            <FlatList
            data={myLiter.first}
            columnWrapperStyle={{
              marginBottom: 20,
            }}
            indicatorStyle={"white"}
            nestedScrollEnabled ={true}
            renderItem={({item}) => 
                <TouchableOpacity key={item.id}
                  // onPress={() => navigation.navigate()}
                  style={styles.iconbutton} >
                  <Image source={img[item.id]} style={{marginLeft: 20, marginRight: 20, width: 194, height: 257}} />
                </TouchableOpacity>
          }
            keyExtractor={(item, index) => index}
            numColumns={3}
          />
          </>
          )}
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
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#80AE92",
    marginBottom: 45,
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
