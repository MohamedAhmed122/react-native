import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Icons({
name,
size = 35,
backgroundColor = "black",
color = "white",
}) {
    return <View style={{
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }}>
        <MaterialIcons name={name} color={color} size={size * 0.5} />
    </View>;
}

const styles = StyleSheet.create({});
