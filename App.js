import React, { useState, Fragment } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

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
