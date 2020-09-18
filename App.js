import React, { Fragment } from "react";
import { StyleSheet,Button, View, SafeAreaView ,Image } from "react-native";
import ListFormScreen from './app/screens/ListFormScreen'




export default function App() {

  // const [imageUris,setImageUris] = useState([])

  // const onAddImage =(uri)=>{
  //   setImageUris([...imageUris, uri])
  // }

  // const handleRemove =(uri)=>{
  //   setImageUris(imageUris.filter(image => image !== uri))
  // }

  return (
      <Fragment>
          <ListFormScreen />
      </Fragment>
  
  ); 
}

const styles = StyleSheet.create({});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0
