import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';

const BookApointment = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  return (
    <View style={styles.container}>
      <Header
        title={`BookAppointment`}
        icon={require('../Images/back.png')}
        back={() => {
          navigation.goBack();
        }}
      />
      <Image style={styles.docDPImg} source={require('../Images/doctor.png')} />
      <Text style={styles.doctorToplistTxt}>Dr Mohit Chachar</Text>
      <View style={styles.specialistView}>
        <Text style={{ color: '#f1f3f7ff', fontSize: 18 }}>
          Skin Specialist
        </Text>
      </View>
      <Text style={styles.heading}>Availabel Slots</Text>
      <View>
        <FlatList
          numColumns={2}
          data={[
            '10:00-12:00PM',
            '12:00-02:00PM',
            '02:00-04:00PM',
            '04:00-06:00PM',
          ]}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.TimmingSlots,
                { borderColor: selectedSlot == index ? 'blue' :'black' },
              ]}
              onPress={() => {
                setSelectedSlot(index);
              }}
            >
              <Text style={{color: selectedSlot == index ? 'blue' : "black" }}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={styles.heading}>Patient Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Patient Name"
        placeholderTextColor="#716e6eff"
      />

      <Text style={styles.heading}>Select Gender</Text>

      {/* <Text>BookApointment</Text> */}
    </View>
  );
};

export default BookApointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docDPImg: {
    width: '32%',
    height: '15%',
    alignSelf: 'center',
    marginTop: 40,
  },
  doctorToplistTxt: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 24,
    color: '#252628ff',
    fontWeight: '800',
  },
  specialistView: {
    width: '30%',
    backgroundColor: '#252628ff',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 5,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 40,
    fontWeight: '800',
    color: '#252628ff',
  },
  TimmingSlots: {
    width: '45%',
    height: 40,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    width: '92%',
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    backgroundColor: '',
    borderRadius: 10,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#252628ff',
  },
});
