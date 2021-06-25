import React, { useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Animated } from 'react-native';
import { AUTHUSER, MAINSCREEN, LOGINSCREEN } from '../../Action/Type'
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../Helpers/appPermission'
import axiosConfig from '../../Helpers/axiosConfig';
import * as STYLES from './Styles';

function SplashScreen(props) {
  // check AuthController use to Login Or Not Login
  useEffect(() => {
    async function AuthController() {
      var getUser = await AsyncStorage.getItem(AUTHUSER)
      var userData = JSON.parse(getUser);
      if (userData) {
        //set header auth user key
        let token = userData.addedby;
        axiosConfig(token);
        return props.navigation.navigate(MAINSCREEN)
      } else {
        props.navigation.navigate(LOGINSCREEN)
      }
    }

    setTimeout(() => {
      AuthController();
    }, 3000);

    setTimeout(
      () =>
        MyPermissionController.checkAndRequestStoragePermission()
          .then((granted) => console.log('>Storage Permission Granted'))
          .catch((err) => console.log(err)),
      500,
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle="light-content" backgroundColor="#5D81C6" />
      <View style={{ flex: 1 }}>
        <Animated.Image style={STYLES.styles.imageStyle} source={require('../../assets/splash.png')} />
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
