import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Venkyinput from '../customtextinput';

export default function Topview() {



  return(
    <View style={styles.container}>
      <Text style={{color: '#000'}}>login page</Text>
      <Image
        source={{
          uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
        }}
        style={{width: 200,height: 160}}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        backgroundColor: 'green'
    },
    text1: {
      color: 'blue'
    }
  });