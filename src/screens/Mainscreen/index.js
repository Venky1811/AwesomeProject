import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Bottomview from '../../components/Bottomview';
import Topview from '../../components/Topview';

export default function Mainscreen(){
    return(
        <>
       
        <Topview />
        <Bottomview />
        </>

    );
}