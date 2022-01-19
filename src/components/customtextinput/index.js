import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native';

export default function Venkyinput(props){
    return(
        <>
           <TextInput placeholder={props.placeholder} style={{backgroundColor: props.placeholdercolor}} />

        </>
    )
}