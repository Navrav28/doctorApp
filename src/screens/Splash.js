import { StyleSheet, Text, View,Image } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    },3000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={require('../Images/logo1.png')} style={styles.logo } />
      <Text style={styles.logoTitle}>Doctors here</Text>

    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#252628ff'
  },
  logo: {
    width: 100,
    height: 100,
    tintColor:'#fff'
  },
  logoTitle: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 22,
    
  }
});
