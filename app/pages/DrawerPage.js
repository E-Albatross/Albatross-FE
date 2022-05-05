import React, {useState, useEffect} from "react";
import {
  Text, View, StyleSheet, Image,
  TouchableOpacity, ScrollView,
  Dimensions
} from "react-native";

import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_SERVER } from '../config';

import home from "../assets/home.png";
import literature from "../assets/literature.png";
import myLiter from "../components/myLiter";

import { LineChart } from "react-native-chart-kit";

import * as Font from "expo-font";

const DrawerPage = ({navigation}) => {
  // 유저아이디 기본 설정값
  const [userId, setID] = useState(null);
  // 유저아이디 가져오기
  useEffect(() => {
    AsyncStorage.getItem('userId').then((userId)=>{
      if(userId!=null){
        setID(userId);
        console.log(userId);
      } else setID("appleid");
    })
  },[]);

  const [isReady, setIsReady] = useState(false);

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
        {(isReady && userId!=null)?
          <>
            <View style={styles.headerRow}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MAIN")}
                style={styles.iconbutton}
              >
                <Image style={{ marginLeft: 10, marginTop: 10 }} source={home} />
              </TouchableOpacity>
            </View>

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
                    <Image source={literature} style={{marginLeft: 20, marginRight: 20}} />
                  </TouchableOpacity>
            }
              keyExtractor={(item, index) => index}
              numColumns={3}
            />
          </>
          :
          <>
          <View style={styles.headerRow}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MAIN")}
                style={styles.iconbutton}
              >
                <Image style={{ marginLeft: 10, marginTop: 10 }} source={home} />
              </TouchableOpacity>
            </View>

          <Text> 로그인이 필요한 서비스입니다. 로그인을 해주세요.</Text>
          </>
          }
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
