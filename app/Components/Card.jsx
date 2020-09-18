import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { white, secondary, } from '../config/Color'
import AppText from './AppText'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <AppText >{title}</AppText>
                    <AppText style={styles.SubTitle}>{subTitle}</AppText>
                </View>
                <TouchableOpacity>
                    <MaterialIcons style={{padding:30}} name="shopping-cart" size={24} color={secondary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    borderRadius:20,
    backgroundColor: white,
    marginBottom: 20,
    overflow: 'hidden'
},
image:{
    width: '100%',
    height: 200,
},
textContainer:{
    padding: 20,
    flex:1,
},
SubTitle:{
    marginTop: 10,
    color: secondary,
    fontWeight: 'bold'
},
subContainer:{
    flexDirection: 'row'
}
})
