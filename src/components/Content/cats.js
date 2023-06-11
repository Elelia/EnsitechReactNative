import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
//import CounterContext from '../utils/counterContext';
import { useFocusEffect } from '@react-navigation/native';

export default function Cats({navigation}) {
    const [counter, setCounter] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
          setCounter(prevCounter => prevCounter + 1);
      
          return () => {
            // Action facultative à effectuer lorsque vous quittez la page spécifique
          };
        }, [])
      );

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>Tu aimes les chats ? Moi aussi !</Text>
                <Text style={styles.text}>Vous aimez les chats {counter} fois.</Text>
                <Image style={styles.image} source={require('../../../assets/bop.jpg')}/>
                <Image style={styles.image} source={require('../../../assets/yo.jpg')}/>
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
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: 15,
        fontSize: 30,
        fontFamily: 'SourceSansPro-Bold',
        textAlign: 'center'
    },
    text: {
        marginTop: 50,
        marginBottom: 30,
        fontSize: 17,
        justifyContent: 'center',
        textAlign: 'center'
    },
    image: {
        marginTop: 50,
        marginBottom: 50,
        width: 200,
        height: 200,
        borderRadius: 10
    }
});