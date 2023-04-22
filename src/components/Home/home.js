import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../custombutton.js';

export default function Home({navigation}) {

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
  
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    title: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        marginTop: 50,
        marginBottom: 30,
        fontSize: 17,
        justifyContent: 'center',
        textAlign: 'center'
    },
    separator: {
        marginVertical: 8
    },
    image: {
        marginTop: 100,
        marginBottom: 10,
        width: 200,
        height: 200
    }
});