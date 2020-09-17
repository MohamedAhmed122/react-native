import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListDetailsScreen from "./app/screens/ListDetialsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icons from "./app/Components/Icons";
import ListItem from "./app/Components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppInputText from "./app/Components/AppInputText";

export default function App() {
  return (
   <AppInputText  placeholder='userName' />
  ); 
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
