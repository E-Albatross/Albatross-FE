import React, { Component } from 'react'; 
import {Text,View,Button, StyleSheet} from 'react-native';

export default class MainPage extends Component { 
    render() { 
        return ( 
        <View style={styles.column}>
            <Button onPress={() => this.props.navigation.navigate('CAPTURE')} title='capture'/>
            <Button onPress={() => this.props.navigation.navigate('DRAWER')} title='Drawer'/> 
            <Button onPress={() => this.props.navigation.navigate('PROFILE')} title='profile'/>
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