import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/logo.png')} style={styles.logo } />
      <Text>Docs here</Text>

    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height:100
  }
});
