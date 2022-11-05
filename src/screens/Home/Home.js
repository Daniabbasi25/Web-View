import {View, Text, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';

const Home = ({navigation}) => {
  // const name=global.username
  const name = useSelector(state => state.User.name);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
        Welcom to {name}
      </Text>
      <View>
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
      </View>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </View>
  );
};

export default Home;
