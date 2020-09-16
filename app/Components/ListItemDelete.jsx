import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { danger } from "../config/Color";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDelete({onPress}) {
return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <EvilIcons name="trash" size={35} color="white" />
        </View>

    </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
