import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import {black ,gray, lightGray} from '../config/Color'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({title, subTitle,IconComponent , image, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={lightGray}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image &&<Image 
                    style={styles.image}
                    source={image} 
                    />}
                    <View style={{justifyContent: 'center'}}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle&& <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
    height: 65,
    width:65,
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
