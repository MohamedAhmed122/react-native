import React from 'react'
import { StyleSheet,  View } from 'react-native'
import {lightGray} from '../config/Color'

export default function ListItemDivider() {
    return (
       <View style={styles.divider}></View>
    )
}

const styles = StyleSheet.create({
divider:{
    width: '100%', 
    height: 1,
    backgroundColor: lightGray,

}

})
