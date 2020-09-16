import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {primary,white} from '../config/Color'

export default function AppButton({title, onPress, colors =primary}) {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: colors }]} 
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
button:{
    backgroundColor: primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '90%',
    margin: 10
},
text:{
    color: white,
    fontSize:18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
}
})
