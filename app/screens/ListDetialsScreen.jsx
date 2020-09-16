import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {black, secondary} from '../config/Color'
import AppText from "../Components/AppText";

export default function ListDetailsScreen() {
  return (
    <View>
        <Image source={require("../../assets/chair.jpg")} style={styles.image} />
        <View style={styles.container}>
            <AppText style={styles.title}>White Chair for sale</AppText>
            <AppText style={styles.subTitle} >$100</AppText>
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
}
});
