import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {HomeStack} from './HomeStack';
import {LivingStack} from './LivingStack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DiningStack} from './DiningStack';
import {Settings} from '../screens';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width;
  const DRAWER_WIDTH = width / 1.5;
  const {t} = useTranslation();
  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <View
        style={{
          width: 300,
          height: 150,
          paddingLeft: width / 6,
        }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 200,
            height: 150,
          }}
        />
      </View>
      <View>
        <View style={styles.line} />
        <DrawerItem
          style={{
            width: DRAWER_WIDTH,
            marginLeft: width / 30,
          }}
          label="Events"
          labelStyle={{color: '#fff', fontSize: 16}}
          icon={props => <MaterialIcons name="home" size={30} color="#fff" />}
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <DrawerItem
          style={{
            width: DRAWER_WIDTH,
            marginLeft: width / 30,
          }}
          label="Living"
          labelStyle={{color: '#fff', fontSize: 16}}
          icon={props => (
            <MaterialIcons name="delivery-dining" size={30} color="#fff" />
          )}
          onPress={() => {
            props.navigation.navigate('Living');
          }}
        />
        <DrawerItem
          style={{
            width: DRAWER_WIDTH,
            marginLeft: width / 30,
          }}
          label={t('common:Dinner')}
          labelStyle={{color: '#fff', fontSize: 16}}
          icon={props => (
            <MaterialIcons name="fastfood" size={30} color="#fff" />
          )}
          onPress={() => {
            props.navigation.navigate('Dining');
          }}
        />
        <DrawerItem
          style={{
            width: DRAWER_WIDTH,
            marginLeft: width / 30,
          }}
          label="Settings"
          labelStyle={{color: '#fff', fontSize: 16}}
          icon={props => (
            <MaterialIcons name="settings" size={30} color="#fff" />
          )}
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export const MyDrawer = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        drawerStyle: {width: 300},
        headerStyle: {
          backgroundColor: '#9e6f09',
        },
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <MaterialIcons
                name="menu"
                size={30}
                color="#fff"
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 40, height: 40}}
            />
          </View>
        ),
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}
      useLegacyImplementation={true}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Events',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}}>
              <MaterialIcons name="search" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="Living"
        options={{title: 'Living'}}
        component={LivingStack}
      />
      <Drawer.Screen
        name="Dining"
        options={{title: t('common:Dinner')}}
        component={DiningStack}
      />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#9e6f09',
  },
  line: {
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
  },
});
