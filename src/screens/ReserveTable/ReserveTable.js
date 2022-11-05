import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const ReserveTable = () => {
  const [preference, setPreference] = useState('');
  const [checkTrue, setCheckTrue] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [timeSelected, setTimeSelected] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  createTwoButtonAlert = () =>
    Alert.alert('Logout', 'Are you sure you want to logout ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          Logout();
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Reserve a Table</Text>
      </View>
      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
          setDateSelected(true);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />

      <DatePicker
        modal
        mode="time"
        open={openTime}
        date={time}
        onConfirm={time => {
          setOpenTime(false);
          setTime(time);
          setTimeSelected(true);
        }}
        onCancel={() => {
          setOpenTime(false);
        }}
      />
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#000'}}>Date</Text>
          <TouchableOpacity onPress={() => setOpenDate(true)}>
            <LinearGradient colors={['#fff', '#eee']} style={styles.linear}>
              <View style={styles.section}>
                <Text style={{color: '#000'}}>
                  {' '}
                  {dateSelected ? date.toDateString() : 'Select Date'}{' '}
                </Text>
                <AntDesign name="calendar" size={25} color="#888" />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={{color: '#000'}}>Time</Text>
            <TouchableOpacity onPress={() => setOpenTime(true)}>
              <LinearGradient colors={['#fff', '#eee']} style={styles.linear}>
                <View style={styles.section}>
                  <Text style={{color: '#000'}}>
                    {' '}
                    {timeSelected
                      ? time.getHours() + ':' + time.getMinutes()
                      : 'Select Time'}
                  </Text>
                  <AntDesign name="clockcircleo" size={22} color="#888" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#000'}}>Pax</Text>
          <TouchableOpacity>
            <LinearGradient colors={['#fff', '#eee']} style={styles.linear}>
              <View style={styles.section}>
                <Text style={{color: '#000'}}> Select Pax </Text>
                <AntDesign name="caretdown" size={20} color="#000" />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{color: '#000'}}>No. of Table</Text>
          <LinearGradient colors={['#ccc', '#ccc']} style={styles.linear}>
            <View style={styles.section}>
              <Text style={{color: '#000'}}> 1 </Text>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text style={{color: '#000'}}>Preference</Text>
            <Text style={{color: '#000'}}>(Any)</Text>
          </View>

          <LinearGradient colors={['#fff', '#eee']} style={styles.linear}>
            <TextInput
              value={preference}
              onChangeText={text => setPreference(text)}
              style={styles.input}
            />
          </LinearGradient>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            alignSelf: 'center',
          }}>
          {checkTrue ? (
            <TouchableOpacity onPress={() => setCheckTrue(false)}>
              <View style={styles.check}>
                <AntDesign name="check" size={15} color="#000" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setCheckTrue(true)}>
              <View style={styles.check}></View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Text style={{color: '#000', marginLeft: 10}}>
              I accept{' '}
              <Text style={{textDecorationLine: 'underline', color: '#9e6f09'}}>
                Terms and Conditions{' '}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => {}}>
            <View style={[styles.btn, {marginTop: 20}]}>
              <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                Reserve
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[styles.btn, {backgroundColor: 'orange', marginTop: 20}]}>
              <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReserveTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    elevation: 6,
    backgroundColor: '#fff',
    width: '100%',
    height: width * 1.3,
    borderRadius: 10,
    padding: 22,
  },
  heading: {
    fontFamily: 'Italianno-Regular',
    fontSize: 30,
    color: '#9e6f09',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#9e6f09',
    width: width / 2,
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    marginTop: width / 6,
    justifyContent: 'center',
    borderRadius: 5,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 2,
    justifyContent: 'space-between',
  },
  linear: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#ccc',
  },
  input: {
    width: width / 2,
    height: width / 18,
    padding: 0,
    color: '#000',
    fontSize: 12,
  },
  check: {
    borderColor: '#888',
    borderRadius: 3,
    borderWidth: 0.7,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    backgroundColor: '#eee',
  },
});
