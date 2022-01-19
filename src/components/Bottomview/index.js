import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Venkyinput from '../customtextinput';

export default function Bottomview() {
  return(
    <View>
      
      <TextInput
        style={styles.signup}
        placeholder=" Enter Username"
      />
    <TextInput
        style={styles.signup}
        placeholder="Enter Password"
        secureTextEntry={true}
      />
  </View>


      
    
  );
}


  const styles = StyleSheet.create({
    signup: {
      color: 'black',
      height: 50,
      margin: 20,
      borderWidth: 2,
      padding: 15,
    }
  });