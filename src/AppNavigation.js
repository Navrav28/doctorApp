import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookApointment from './screens/BookApointment';
const stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="BookApointment"
          component={BookApointment}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
