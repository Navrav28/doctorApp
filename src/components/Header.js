import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

const Header = ({ title, icon }) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#252628ff" barStyle={'light-content'} />
      {/* this btn for back but not for home screen  */}
      {icon ? (
        <TouchableOpacity style={styles.backBtn} onPress={() => {}}>
          <Image
            style={styles.backImg}
            source={icon}
          />
        </TouchableOpacity>
      ) : null}

      <Text style={[styles.title,{}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#252628ff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 3,
    // justifyContent: "center",
    alignItems: 'center',
  },
  backImg: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
  backBtn: {
    height: 25,
    width: 26,
    borderRadius: 12.5,
    marginLeft: 8,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: '600',
    color: '#fff',
  },
});
