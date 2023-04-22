import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Votre profile</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 80
  },
  text: {
    marginTop: 20
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});