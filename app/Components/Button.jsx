import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {primary,white} from '../config/Color'
import AppText from './AppText'

export default function AppButton({title,style, onPress, colors =primary}) {
    return (
        <TouchableOpacity 
            style={[styles.button,style ,{backgroundColor: colors }]} 
            onPress={onPress}
        >
            <AppText style={styles.text}>{title}</AppText>
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
