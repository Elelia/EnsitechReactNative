import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../custombutton.js';

export default function Cats({navigation}) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tu aimes les chats ? Moi aussi !</Text>
        <Image style={styles.image} source={require('../../../assets/bop.jpg')}/>
        <Image style={styles.image} source={require('../../../assets/yo.jpg')}/>
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
        margin: 15,
        fontSize: 30,
        fontFamily: 'SourceSansPro-Bold',
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
        marginTop: 50,
        marginBottom: 50,
        width: 200,
        height: 200,
        borderRadius: 10
    }
});