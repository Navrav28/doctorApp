import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
const stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Splash" component={Splash} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
 });
