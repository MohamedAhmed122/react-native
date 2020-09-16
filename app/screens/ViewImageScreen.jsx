import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
import {secondary , primary, black} from '../config/Color'
import { EvilIcons } from '@expo/vector-icons'; 
export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <EvilIcons name="close" size={33} color="white" />
            </View>
            <View style={styles.openIcon}>
                <EvilIcons name="trash" size={33} color="white" />
            </View>
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
closeIcon:{
    position:'absolute',
    top:40,
    left: 30,
},
openIcon:{
    position:'absolute',
    top:40,

    right: 30,
},
image:{
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
}
})
