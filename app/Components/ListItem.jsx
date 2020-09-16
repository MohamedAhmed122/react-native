import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import {black ,gray, lightGray} from '../config/Color'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({title, subTitle, image, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={lightGray}
                onPress={onPress}
            >
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
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
    padding: 15
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