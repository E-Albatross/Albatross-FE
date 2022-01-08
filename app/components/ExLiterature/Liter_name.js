import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Liter_name = ({name}) => {

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, letterSpacing: 15, textAlign:"left"}}> {name} </Text>
      <View style={styles.line}/>
      <View style={styles.line}/>
    </View>
  );
};

export default Liter_name;

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: '#F9F9F9',
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    line:{
        width: '30%', 
        height: 1, 
        backgroundColor: '#C4C4C4', 
        position: "absolute", 
        left:0, 
        top: 670
    },
});

