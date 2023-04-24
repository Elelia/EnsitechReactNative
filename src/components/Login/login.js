import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../custombutton.js';

export default function Login({navigation}) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  function tryLogin() {
    if(pseudo && password) {
      navigation.navigate('DrawerProfile', {
        pseudo: pseudo
      });
    } else {
      alert("Vous n'avez pas saisi les informations nécessaires.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Votre pseudo</Text>
      <TextInput 
        inlineImageLeft='search_icon' 
        style={styles.input} 
        placeholder="Pseudo" 
        value={pseudo}
        onChangeText={setPseudo}
      />
      <Text style={styles.text}>Votre mot de passe</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Mot de passe" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton onPress={tryLogin}
        title="Connexion"
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    marginTop: 20,
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 17
  },
  input: {
    borderColor: "gray",
    width: "50%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});