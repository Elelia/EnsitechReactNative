import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile({route}) {
  const {pseudo} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour {pseudo} ! Bienvenue sur votre profil.</Text>
      <Text style={styles.text}>Vous pouvez à présent accéder aux autres pages de
      l'application via le menu de gauche.</Text>
      <Text style={styles.text}>Votre nom : Lucas</Text>
      <Text style={styles.text}>Votre prénom : Lisa</Text>
      <Text style={styles.text}>Votre ville : Nice</Text>
      <Text style={styles.text}>Votre métier : Développeuse</Text>
      <Text style={styles.title}>Options</Text>
      <Text style={styles.text}>Les options ici.</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    marginTop: 20,
    marginBottom:30,
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'SourceSansPro-Light',
    fontSize: 17
  }
});