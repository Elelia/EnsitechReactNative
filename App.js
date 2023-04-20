import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Test from './src/components/test';
import Taist from './src/components/taist';
import Use from './src/components/use';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Taist}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Use} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
