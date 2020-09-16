import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import AppText from './AppText'
import {black ,gray} from '../config/Color'

export default function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={image} 
            />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
},
image:{
    height: 75,
    width:75,
    borderRadius: 35,
    marginRight: 10,
},
title:{
    color: black,
},
subTitle:{
    color: gray,
}
})
