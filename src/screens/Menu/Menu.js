import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const {width} = Dimensions.get('window');

const Menu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log('DATA ', data);

  useEffect(() => {
    getMenuHandler();
  }, []);

  const getMenuHandler = () => {
    let data = {
      method: 'get',
      url: 'https://skillpundit.com/api/Club/menu.php',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setIsLoading(true);
    axios(data)
      .then(res => {
        setIsLoading(false);
        console.log('MENU ', res.data.response);
        let menu = res.data.response.map(({id, name, value}) => ({
          id,
          name,
          value,
          quantity: 1,
        }));
        setData(menu);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(e);
      });
  };

  //add menu handler
  const addMenuItemHandler = itemId => {
    let selectedItemIndex = data.findIndex(items => items.id == itemId);
    data[selectedItemIndex].quantity += 1;
    data[selectedItemIndex].total =
      data[selectedItemIndex].value * data[selectedItemIndex].quantity;
    setData([...data]);
  };

  //subtract menu handler
  const subMenuItemHandler = itemId => {
    let selectedItemIndex = data.findIndex(items => items.id == itemId);
    if (data[selectedItemIndex].quantity == 1) {
      return;
    } else {
      data[selectedItemIndex].quantity -= 1;
      setData([...data]);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size={40} color="orange" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{alignSelf: 'center', marginBottom: 10, alignItems: 'center'}}>
        <AntDesign
          name="heart"
          size={35}
          color="red"
          style={{marginBottom: 5}}
        />
        <Text
          style={[
            styles.text,
            {
              color: 'orange',
              fontFamily: 'Italianno-Regular',
              fontSize: 40,
            },
          ]}>
          Menu
        </Text>
      </View>

      <View style={styles.menu}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fff', '#F8F0E3']}
          style={{padding: 15}}>
          {data.map(items => (
            <View style={styles.textView} key={items.id}>
              <Text style={styles.text}> {items.name} </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>
                  {' '}
                  {items.value * items.quantity}.00{' '}
                </Text>
                <View style={styles.count}>
                  <TouchableOpacity
                    onPress={subMenuItemHandler.bind(this, items.id)}>
                    <AntDesign name="minus" size={15} color="green" />
                  </TouchableOpacity>
                  <Text style={{color: 'green'}}> {items.quantity} </Text>
                  <TouchableOpacity
                    onPress={addMenuItemHandler.bind(this, items.id)}>
                    <AntDesign name="plus" size={15} color="green" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.btn}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
            {' '}
            Submit{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    color: 'black',
    marginRight: 5,
  },
  menu: {
    elevation: 6,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
    height: width / 2.3,
    justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
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
  count: {
    width: width / 5.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
