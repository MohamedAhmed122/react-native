import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

import {lightGray,dark, gray} from '../config/Color'


export default function AppInputText({icon,placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon &&  <MaterialCommunityIcons style={{marginRight:5}} name={icon} size={30} color={gray}/> }
            <TextInput style={styles.input} {...otherProps} placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15 ,
    marginVertical: 10   
},
input:{
    fontSize:18,
    color: dark
}
})
