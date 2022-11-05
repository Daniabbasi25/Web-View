import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

const {width} = Dimensions.get('window');

const Splash = props => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      props.navigation.navigate('login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo2.png')}
        style={{width: width / 1.4, height: 200}}
      />
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
});
