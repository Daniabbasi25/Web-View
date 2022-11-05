import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {AppNavigation} from './src/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import './src/consts/translations/IMLocalize';
import { Provider } from 'react-redux'
import { store } from './src/store/Home/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const containerStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>

    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigation />
    </SafeAreaView>
    </Provider>
  );
};

export default App;
