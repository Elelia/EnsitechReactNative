import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../custombutton.js';

export default function Signup({navigation}) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  function trySignup() {
    console.log(pseudo);
    console.log(password);
    console.log(mail);
    if(pseudo && password && mail) {
      alert("Vous voilà inscrit !");
      navigation.navigate('Home');
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