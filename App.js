import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './src/components/navigators/stack';
import { useFonts } from 'expo-font';
import { ThemeProvider } from './src/components/utils/themeContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  });

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
