import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

function SplashScreen(props) {
  useEffect(() => {
    async function fetchMyAPI() {
      //   var getUser = await AsyncStorage.getItem('@authuserlaundry')
      //   var userData;
      //   userData = JSON.parse(getUser)
      //   if (userData != null) {
      //     if (userData && userData.property && userData.property.address) {
      //       return props.navigation.navigate('HomeScreen')
      //     }
      //   } else {
      props.navigation.navigate('LoginScreen')
      //   }
    }

    setTimeout(() => {
      fetchMyAPI();
    }, 5000);

  }, []);

  const { width, height } = Dimensions.get('screen');
  return (
    <>
      <StatusBar backgroundColor="#6789CA" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <Animated.Image
          style={{
            resizeMode: 'cover',
            flex: 1,
            height: height,
            width: width
          }}
          source={require('../../assets/splash.png')}
        />
      </View>
    </>
  );
}

export default SplashScreen;
