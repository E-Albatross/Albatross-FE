import React, { useRef, Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

  export default class DrawerPage extends Component { 
    render() { 
        return ( 
        <View style={styles.column}>
          <Text> Draw Page </Text>
        </View> 
        ); 
    }
}

const styles = StyleSheet.create({
    column: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    row: {
      marginTop: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });