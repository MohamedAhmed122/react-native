import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
import {secondary , primary, black} from '../config/Color'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={[styles.mainIcon,styles.closeIcon]}></View>
            <View style={[styles.mainIcon,styles.openIcon]}></View>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../assets/chair.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

container:{
    backgroundColor: black,
    flex: 1,
},
mainIcon:{
    width: 50,
    height: 50,
    position:'absolute',
    top:40,
},
closeIcon:{
    backgroundColor: primary,
    left: 30,
},
openIcon:{
    backgroundColor: secondary,
    right: 30,
},
image:{
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
}
})
