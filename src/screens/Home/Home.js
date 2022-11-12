import {View, Text, Button, Dimensions} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';
const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
  // const name=global.username
  const name = useSelector(state => state.User.name);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
        Welcom to {name.name} {name.id}
      </Text>
      {/* <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 30,
          }}>
          <Button
            title="Living"
            onPress={() => navigation.navigate('Living')}
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View> */}
      <View style={{width: width, height: height / 1.2}}>
        <WebView source={{uri: `https://www.17dnc.com/clubapp/?d=${name.id}`}} />
      </View>
    </View>
  );
};

export default Home;
