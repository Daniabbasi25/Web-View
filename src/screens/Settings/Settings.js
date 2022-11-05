import {View} from 'react-native';
import React from 'react';
import Selector from '../../conponents/LanguageSelector';

const Settings = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Selector />
    </View>
  );
};

export default Settings;
