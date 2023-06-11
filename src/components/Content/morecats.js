import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import axios from 'axios';
import ThemeContext from '../utils/themeContext.js';

export default function Cats() {
    const [catsList, setCatsList] = useState([]);
    const { theme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background
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
            textAlign: 'center',
            color: theme.text
        },
        text: {
            marginTop: 50,
            marginBottom: 30,
            fontSize: 17,
            justifyContent: 'center',
            textAlign: 'center',
            color: theme.text
        },
        image: {
            marginTop: 50,
            marginBottom: 50,
            width: 200,
            height: 200,
            borderRadius: 10
        }
    });

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