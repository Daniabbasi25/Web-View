import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {RFPercentage} from 'react-native-responsive-fontsize';
import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Intro1 = props => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: `https://skillpundit.com/api/Club/${props.bannerImage}`,
        }}
        style={styles.image}></ImageBackground>
    </View>
  );
};

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      banner: [],
      isLoading: false,
    };
  }

  //get banner images
  getBannerImages() {
    let data = {
      method: 'get',
      url: 'https://skillpundit.com/api/Club/slider.php',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    this.setState({isLoading: true});
    axios(data)
      .then(res => {
        console.log(res.data);
        this.setState({isLoading: false});
        this.setState({banner: res.data.response});
      })
      .catch(e => {
        this.setState({isLoading: false});
        console.log(e);
      });
  }

  componentDidMount() {
    this.getBannerImages();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            height: SCREEN_WIDTH / 1.5,
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
        <Carousel
          ref={ref => (this.carouselRef = ref)}
          data={this.state.banner}
          renderItem={({item}) => <Intro1 bannerImage={item.image} />}
          onSnapToItem={i => this.setState({activeTab: i})}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          slideStyle={{width: SCREEN_WIDTH}}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          autoplay={true}
          loop={true}
          enableSnap={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
        />

        <View style={styles.tabBar}>
          <Pagination
            dotStyle={styles.ww}
            inactyle={styles.ww}
            inactiveDotOpacity={0.9}
            inactiveDotScale={0.8}
            activeDotIndex={this.state.activeTab}
            dotsLength={this.state.banner.length}
            inactiveDotColor="white"
            dotColor="orange"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ww: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginHorizontal: -6,
    backgroundColor: 'orange',
  },
  tabBar: {
    position: 'absolute',
    top: Dimensions.get('window').width / 2.1,
    left: Dimensions.get('window').width / 2.5,
    borderColor: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: '#5657C8',
    width: 140,
    position: 'absolute',
    top: Dimensions.get('window').height / 1.3,
    right: 25,
  },
  skipText: {
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 10,
    // opacity: 0.9,
  },
  continueText: {
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: 'bold',
  },
  mainText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'signika',
    fontSize: RFPercentage(3),
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'signika',
    fontSize: RFPercentage(2.7),
  },
  boxes: {
    padding: 12,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderWidth: 0.7,
    borderColor: '#fff',
    borderRadius: 7,
  },
  boxContainer: {
    flexDirection: 'row',
    marginLeft: 35,
    marginTop: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 6,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 7,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
    shadowOffset: {width: 0, height: 2},
  },
});
