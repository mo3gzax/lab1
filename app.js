import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './header';


export default function App() {
  


 

  

  return (
    <View style={styles.container}>
    <Header />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 30,
  },
});
