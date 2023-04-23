import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../custombutton.js';

export default function Signup({navigation}) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  function trySignup() {
    if(pseudo && password && mail) {
      navigation.navigate('', {
        pseudo: pseudo
      });
    } else {
      alert("Vous n'avez pas saisi les informations nécessaires.");
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Votre adresse mail</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Mail" 
        value={mail}
        onChangeText={setMail}
      />
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
      <CustomButton onPress={trySignup}
        title="Inscription"
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    marginHorizontal: 80,
    marginTop: 20
  },
  input: {
    marginHorizontal: 80,
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});