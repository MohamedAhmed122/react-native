import React, { useState, Fragment } from "react";
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


export default function App() {



  return (
      <Fragment>
          <WelcomeScreen />
      </Fragment>
  
  ); 
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
