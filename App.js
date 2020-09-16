
import React from 'react';
import { SafeAreaView, StyleSheet,View} from 'react-native';
export default function App() {


  return (
   
      <View
        style={{
          backgroundColor: 'white',
          flex:1,
          flexDirection:'row',
          justifyContent:'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          alignContent: 'center'
        }}
      >
        <View 
          style={{
            backgroundColor: 'orange',
            height:100,
            width: 100,
          
          }}
        />
        <View 
          style={{
            backgroundColor: 'blue',
            height:100,
            width: 100
          }}
        />
        <View 
          style={{
            backgroundColor: 'red',
            height:100,
            width: 100
          }}
        />
        <View 
          style={{
            backgroundColor: 'gray',
            height:100,
            width: 100
          }}
        />
        <View 
          style={{
            backgroundColor: 'black',
            height:100,
            width: 100
          }}
        />
      </View>
     

  );
}



// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0