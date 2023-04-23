import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/components/Home/home';
import Login from './src/components/Login/login';
import Signup from './src/components/Sign_up/signup';
import CustomDrawer from './src/components/drawer';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  });
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Accueil',
              headerStyle: {
                backgroundColor: '#FCB1E5',
              },
            }}
          />
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
              title: 'Connexion',
              headerStyle: {
                backgroundColor: '#FCB1E5',
              },
            }}
          />
          <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{
              title: 'Inscription',
              headerStyle: {
                backgroundColor: '#FCB1E5',
              },
            }} 
          />
          <Stack.Screen
            name="DrawerProfile"
            component={CustomDrawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
