import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {black, secondary} from '../config/Color'
import AppText from "../Components/AppText";
import ListItem from "../Components/ListItem";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListDetailsScreen() {
  return (
    <View>
        <Image source={require("../../assets/product3.png")} style={styles.image} />
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{flex:1}}>
                    <AppText style={styles.title}>Jeans Jacket  for sale</AppText>
                    <AppText style={styles.subTitle} >$100</AppText>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="shopping-cart" size={24} color={secondary} />
                </TouchableOpacity>
            </View>
            {/* <View style={{marginTop: 30}}>
                <ListItem
                    image={require('../../assets/person.png')}
                    title='Mohamed Youssef'
                    subTitle='5 Listening'
                />
            </View> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
image: {
    width: "100%",
    height: 300,
},
container:{
    padding: 20,
},
title:{
    color: black,
    fontWeight: 'bold'
},
subTitle:{
    color: secondary,
    fontWeight: 'bold'
},
subContainer:{
    flexDirection: 'row'
}
});
