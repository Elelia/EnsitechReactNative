import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile/profile';

const Drawer = createDrawerNavigator();

function CustomDrawer({navigation}) {
    const handleLogout = () => {
        navigation.navigate('Home');
    };

    return (
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ drawerLabel: 'Profil' }}
        />
        <Drawer.Screen
        name="Logout"
        component={View}
        options={{
          title: 'Déconnexion',
          drawerLabel: 'Déconnexion',
          headerShown: false,
          onPress: handleLogout,
        }}
        />
      </Drawer.Navigator>
    );
}

export default CustomDrawer;