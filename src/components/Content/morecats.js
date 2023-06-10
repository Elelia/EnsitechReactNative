import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import axios from 'axios';

export default function Cats() {
    const [catsList, setCatsList] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            await axios.get("https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_GshB4UpOYBbe9qcWiqQk5toV449JbnSxiObn3uUxQYUn5mhzD0PEa2nAo7yevNnF")
            .then(response => {
                setCatsList(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        }

        fetchCats();
    }, []);

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>Les chats sont vraiment supers</Text>
            {catsList.map(item => (
                <Image id={item.id} style={styles.image} source={{uri:item.url}}/>
            ))}
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
        //justifyContent: 'center',
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