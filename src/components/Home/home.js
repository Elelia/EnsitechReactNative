import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CustomButton from '../custombutton.js';
import ThemeContext from '../utils/themeContext.js';

export default function Home({navigation}) {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.background
    },
    title: {
      marginTop: 20,
      marginBottom: 5,
      fontSize: 35,
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'SourceSansPro-Black'
    },
    text: {
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 30,
      fontSize: 20,
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'SourceSansPro-Light'
    },
    separator: {
        marginVertical: 8
    },
    image: {
        marginTop: 100,
        marginBottom: 10,
        width: 220,
        height: 220
    }
  });

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur mon application !</Text>
        <Text style={styles.text}>Vous pouvez vous connecter ou vous inscrire pour accéder aux différentes pages de l'application.</Text>
        <CustomButton onPress={() =>
            navigation.navigate('Login')
          }
          title="Connexion"
        />
        <View style={styles.separator}></View>
        <CustomButton onPress={() =>
            navigation.navigate('Signup')
          }
          title="Inscription"
        />
        <Image style={styles.image} source={require('../../../assets/cat1.gif')}/>
      </View>
    );
}