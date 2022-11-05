import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require('../assets/images/menu.png')}
          style={{width: 35, height: 35}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{width: '10%'}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F0E3',
    elevation: 6,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});
