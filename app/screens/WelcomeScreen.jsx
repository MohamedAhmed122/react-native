import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import {secondary , primary} from '../config/Color'


export default function WelcomeScreen() {
return (
    <ImageBackground
        style={styles.image}
        source={require("../../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <Text style={styles.textLogo}>Sell what you don't need</Text>
        </View>
        
        <View style={styles.loginBtn}/>
        <View style={styles.registerBtn}/>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
},
loginBtn:{
    width: '100%',
    height: 70,
    backgroundColor: primary,
},
registerBtn:{
    width: '100%',
    height: 70,
    backgroundColor: secondary,
},
logoContainer:{
    position: 'absolute',
    top: 70,
    alignItems: 'center',
},
logo:{
    width: 100,
    height: 100,
    
},
textLogo:{
    marginTop: 5
}
});
