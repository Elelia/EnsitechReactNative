import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/home';
import Login from '../Login/login';
import Signup from '../Sign_up/signup';
import CustomDrawer from './drawer';

export default function Stack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Profile">
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
    );
}
