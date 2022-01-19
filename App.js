import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Mainscreen from './src/screens/Mainscreen';

export default function App() {
  return (
   // <View style={styles.container}>
    //  <Text style={{color: '#000'}}>hi guys!!</Text>
     // <Image
       // source={{
      //    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
     //   }}
       // style={{width: 200,height: 200}}
   //   />
    //  <TextInput placeholder='input text here..'/>
  //  </View>
  <>
    <Mainscreen />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'blue'
  }
});