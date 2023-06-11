import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import ThemeContext from '../utils/themeContext';

export default function Profile({route}) {
  const {pseudo} = route.params;
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.background
    },
    title: {
      marginTop: 20,
      marginBottom:30,
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 20,
      color: theme.text
    },
    text: {
      marginTop: 10,
      marginBottom: 10,
      fontFamily: 'SourceSansPro-Light',
      fontSize: 17,
      color: theme.text
    }
  });

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
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.text}>Changer de mode</Text>
      </TouchableOpacity>
    </View>
  );
}