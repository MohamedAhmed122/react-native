
import React from 'react';
import { SafeAreaView, StyleSheet,View} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
export default function App() {

  console.log(useDeviceOrientation())
  const {landscape} =useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          height: landscape ? '100%' : '70%', 
          width: '100%'
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// padding: Platform.os === 'andriod' ? statusBar.currentHeight :0