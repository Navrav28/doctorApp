import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={`Doctors Here`} icon={require('../Images/logo1.png')} />
      {/* <Text>Home</Text> */}
      <ScrollView>
        <Image
          source={require('../Images/docConsult.jpg')}
          style={styles.banner}
        />
        <Text style={styles.heading}>Select Category</Text>
        <View style={{ marginTop: 5 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1, 1, 1, 1]}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 10 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#252628ff', '#313948ff', '#22252eff']}
                    style={styles.linearGradient}
                  >
                    <Text style={styles.categorytxt}>
                      {`Category ${index + 1}`}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Rated Doctors</Text>
        <View style={{ marginTop: 5 }}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            data={[1, 1, 1, 1, 1, 1]}
            numColumns={2}
            renderItem={({ item, index }) => (
              <LinearGradient
                style={styles.TopDoctorList}
                colors={['#252628ff', '#313948ff', '#22252eff']}
              >
                <Image
                  style={styles.doctorToplistProfile}
                  source={require('../Images/doctor.png')}
                />
                <Text style={styles.doctorToplistTxt}>{`Doctor ${
                  index + 1
                }`}</Text>
                <View style={styles.specialistView}>
                  <Text style={{ color: '#252628ff', fontSize: 16 }}>
                    Skin Specialist
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontSize: 17,
                    color: 'white',
                    fontWeight: '500',
                  }}
                >
                  Busy
                </Text>
                <TouchableOpacity >
                  <LinearGradient
                    style={styles.TopDoctorBtn}
                    colors={['#3eb489', '#90EE90',]}
                  >
                    <Text>Book Appointment</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </LinearGradient>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '96%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: '800',
    color: '#252628ff',
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorytxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  TopDoctorList: {
    height: 250,
    width: '45%',
    // borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    elevation: 3,
  },

  doctorToplistProfile: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    marginTop: 30,
  },
  doctorToplistTxt: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
  specialistView: {
    width: 100,
    height: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
    TopDoctorBtn: {
      justifyContent: 'center',
      width: "90%",
      height: 30,
      alignSelf: "center",
      borderRadius:5

  },
});
