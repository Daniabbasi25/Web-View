import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {CommonActions} from '@react-navigation/native';
import { AddUser } from '../../store/Home/UserSlice';
import { useDispatch } from 'react-redux'

const {width} = Dimensions.get('window');

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()

  //validation
  const validate = () => {
    if (email == '') {
      alert('email is required!');
      return false;
    }
    if (password == '') {
      alert('password is required!');
      return false;
    }
    return true;
  };

  //login handler
  const loginHandler = () => {
    if (validate()) {
      let bodyFormData = new FormData();
      bodyFormData.append('email', email);
      bodyFormData.append('password', password);

      let data = {
        method: 'post',
        url: 'https://skillpundit.com/api/Club/Login.php',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      setIsLoading(true);
      axios(data)
        .then(res => {
          props.navigation.navigate('homescreen',{'name':res.data.name});
          setIsLoading(false);  
          console.log("danyal data=",res.data.name)
          global.username=res.data.name
          dispatch(AddUser(res.data.name))
        })
        .catch(e => { 
          setIsLoading(false);
          alert(e);
          console.log(e);
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#9e6f09'} />

      <ImageBackground
        source={{
          uri: 'https://cdn.realestateview.com.au/images/listing/4-bedroom-house-in-leppington-nsw-2179/330-min/14204135-1-2985D78.jpeg',
        }}
        style={styles.imageBackground}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={{width: width / 1.4, height: 200, marginTop: -(width / 4)}}
        />

        <View style={styles.textInputView}>
          <AntDesign
            name="user"
            size={20}
            color="#888"
            style={{width: '10%'}}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={'#888'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.textInputView}>
          <AntDesign name="key" size={20} color="#888" style={{width: '10%'}} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#888'}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={loginHandler}>
          <View style={styles.btn}>
            {isLoading ? (
              <View>
                <ActivityIndicator size={30} color="#fff" />
              </View>
            ) : (
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                {' '}
                Sign In{' '}
              </Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
              fontSize: 10,
            }}>
            FORGOT PASSWORD
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </ImageBackground>
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: width / 1.6,
          }}>
          <Entypo name="linkedin" size={22} color="#fff" />
          <EvilIcons name="sc-facebook" size={30} color="#fff" />
          <AntDesign name="instagram" size={22} color="#fff" />
          <AntDesign name="youtube" size={22} color="#fff" />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 15,
          top: 0,
          backgroundColor: '#9e6f09',
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: '100%',
    height: 60,
    backgroundColor: '#9e6f09',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: width / 1.5,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 18,
    color: '#888',
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#9e6f09',
    width: width / 1.5,
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 5,
  },
  line: {
    width: width / 1.9,
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
});
