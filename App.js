import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Alert, SafeAreaView, Button } from 'react-native';

export default function App() {
  const [colorChange,setColorChange] = useState(false)
  const handleClick =()=>{
    setColorChange(!colorChange)
    // Alert.alert('my Title', 'My message',[
    //   {text: 'yes', onPress: ()=>console.log('yes') },
    //   {text: 'no'}
    // ])
    Alert.prompt('myTitle', 'my message', text =>console.log(text))
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, world!</Text>
      <Image 
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
          height:200,
          width:200,
        }}
      />
      <Button title='click me' color={colorChange ? 'orange': 'blue'} onPress={()=> handleClick()}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0