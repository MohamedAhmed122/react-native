import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
  <ViewImageScreen />
  );
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
