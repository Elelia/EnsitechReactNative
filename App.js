import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './src/components/navigators/stack';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
