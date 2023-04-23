import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile({route}) {
  console.log(route.params);
  const {pseudo} = route.params;
  console.log(pseudo);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour {pseudo} ! Bienvenue sur votre profil.</Text>
      <Text style={styles.text}>Vous pouvez à présent accéder aux autres pages de
      l'application via le menu de gauche.</Text>
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