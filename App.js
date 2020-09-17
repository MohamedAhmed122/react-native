import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListDetailsScreen from "./app/screens/ListDetialsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icons from "./app/Components/Icons";
import ListItem from "./app/Components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppInputText from "./app/Components/AppInputText";
import AppPicker from "./app/Components/AppPicker";
import PickerScreen from "./app/screens/PickerScreen";

const categories =[
  {id: 1, label: 'Jackets', value:1},
  {id: 2, label: 'Men',   value:2  },
  {id: 3, label: 'Women', value: 3},
  {id: 4, label: 'Sneakers', value:4},
]

export default function App() {

  const [category, setCategory] = useState(categories[0])

  return (
    <SafeAreaView>
      <PickerScreen />
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
