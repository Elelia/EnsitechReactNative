import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Cats() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Les chats sont vraiment supers</Text>
        <Image style={styles.image} source={require('../../../assets/ya.jpg')}/>
        <Image style={styles.image} source={require('../../../assets/yo.jpg')}/>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    title: {
        margin: 5,
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
        height: 200,
        borderRadius: 10
    }
});