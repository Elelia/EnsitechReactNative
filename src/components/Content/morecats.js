import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Cats() {

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>Les chats sont vraiment supers</Text>
            <Image style={styles.image} source={require('../../../assets/ya.jpg')}/>
            <Image style={styles.image} source={require('../../../assets/bip.jpg')}/>
            <Image style={styles.image} source={require('../../../assets/yi.jpg')}/>
        </ScrollView>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
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