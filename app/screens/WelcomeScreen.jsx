import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import {secondary , primary} from '../config/Color'
import AppButton from '../Components/Button'



export default function WelcomeScreen() {
return (
    <ImageBackground
        blurRadius={10}
        style={styles.image}
        source={require("../../assets/Welcome.png")}
    >
        <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.textLogo}>SHWTY App</Text>
        </View>
        
        <AppButton  title='Login'/>
        <AppButton  colors={secondary} title='Register'/>
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
    marginTop: 10,
    fontSize:20,
    fontWeight: 'bold',
    color: 'white'
}
});
