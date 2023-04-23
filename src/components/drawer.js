import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile/profile';
import Cats from './Content/cats';
import MoreCats from './Content/morecats';

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
        options={{ drawerLabel: 'Profil' }}
        initialParams={{ ...route.params }}
      />
      <Drawer.Screen
        name="Des chats"
        component={Cats}
        options={{ drawerLabel: 'Chats' }}
      />
      <Drawer.Screen
        name="Encore des chats"
        component={MoreCats}
        options={{ drawerLabel: 'Encore chats' }}
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