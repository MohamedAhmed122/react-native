import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListDetailsScreen from "./app/screens/ListDetialsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
