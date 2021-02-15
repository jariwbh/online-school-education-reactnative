import React, { useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Animated } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, HOMESCREEN, LOGINSCREEN } from '../../Action/Type'
import * as STYLES from './Styles';

function SplashScreen(props) {
  // check AuthController use to Login Or Not Login
  useEffect(() => {
    async function AuthController() {
      var getUser = await AsyncStorage.getItem(AUTHUSER)
      var userData = JSON.parse(getUser)
      if (userData) {
        if (userData && userData.property && userData.property.address) {
          return props.navigation.navigate(HOMESCREEN)
        }
      } else {
        props.navigation.navigate(LOGINSCREEN)
      }
    }

    setTimeout(() => {
      AuthController();
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor="#6789CA" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <Animated.Image style={STYLES.styles.imageStyle} source={require('../../assets/splash.png')} />
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
