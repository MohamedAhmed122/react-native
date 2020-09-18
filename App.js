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
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListForm from "./app/screens/ListForm";


export default function App() {



  return (
      <Fragment>
          <ListForm />
      </Fragment>
  
  ); 
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
