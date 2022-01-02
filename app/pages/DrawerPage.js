import React, { Component } from 'react'; 
import {Text,View,Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import home from '../assets/home.png';
import literature from '../assets/literature.png';

export default class MainPage extends Component { 
    render() { 
        return ( 
          <View style={styles.container}>

            <View style={styles.headerRow}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MAIN')} style={styles.iconbutton}> 
                <Image style={{marginLeft:10}} source={home}/>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize: 30, marginTop: 60, marginLeft: 15, marginBottom: 60, letterSpacing: 10}}> 내 서랍 </Text>

            <View style={styles.literatureRow}>
              {/* 여기서부터는 따로 js파일 작업 필요. 일단 복붙으로 처리 */}
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CAPTURE')} style={styles.iconbutton}> 
                <Image source={literature}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CAPTURE')} style={styles.iconbutton}> 
                <Image source={literature}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CAPTURE')} style={styles.iconbutton}> 
                <Image source={literature}/>
              </TouchableOpacity>
            </View>

          </View>
        ); 
    }
}

const styles = StyleSheet.create({
  // 배경색 넣은 컨테이너
  container: {
    width:"100%",
    height:"100%",
    backgroundColor: '#F9F9F9',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
    // 컴포넌트를 양쪽에 배치하는 컴포넌트
    headerRow: {
      width:"100%",
      height: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#80AE92"
    },
    literatureRow: {
      marginTop: 10,
      marginBottom: 10,
      width:"85%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });