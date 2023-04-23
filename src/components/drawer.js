import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile/profile';
import Cats from './Content/cats';
import MoreCats from './Content/morecats';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function CustomDrawer({navigation, route}) {

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen
        name="Profil"
        component={Profile}
        options={{ 
          drawerLabel: 'Profil',
          drawerIcon: () => (
            <Ionicons name="person" size={24} color="#9F5BA3" />
          ), 
        }}
        initialParams={{ ...route.params }}
      />
      <Drawer.Screen
        name="Des chats"
        component={Cats}
        options={{ 
          drawerLabel: 'Chats',
          drawerIcon: () => (
            <Ionicons name="paw" size={24} color="#9F5BA3" />
          ), 
        }}
      />
      <Drawer.Screen
        name="Encore des chats"
        component={MoreCats}
        options={{ 
          drawerLabel: 'Encore chats',
          drawerIcon: () => (
            <Ionicons name="paw" size={24} color="#9F5BA3" />
          ),
        }}
      />
      <Drawer.Screen
      name="Logout"
      component={View}
      options={{
        title: 'Déconnexion',
        drawerLabel: 'Déconnexion',
        headerShown: false,
        drawerIcon: () => (
          <Ionicons name="moon" size={24} color="#9F5BA3" />
        ),
        onPress: handleLogout,
      }}
      />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;