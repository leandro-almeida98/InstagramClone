import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons,Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
        <View style={styles.container_logo}>
          <Image style={styles.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'}}/>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Feather name="plus-square" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Feather name="heart" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity>
              <Image style={styles.iconMssg} source={{uri: 'https://www.pngplay.com/wp-content/uploads/6/Facebook-Messenger-Icon-Background-PNG-Image.png'}} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS =="android"?30:0,
  },
  header:{
    flex:1,
    borderBottomWidth:0.5,
    borderBottomColor: '#aaa',
    flexDirection:'row'
  },
  body:{
    flex:12,
    backgroundColor:'white'
  },
  container_logo:{
    flex:5, 
    alignContent:'center',
    justifyContent:'center',
  },
  logo:{
    marginLeft:10,
    width:145,
    height:50,
  },
  buttons:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center',
  },
  iconMssg:{
    width:25,
    height:25
  }
});

