import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign, Fontisto } from '@expo/vector-icons';

export default class ResultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <Image source={require('../../../assets/image/vector2.png')} style={{ resizeMode: "cover", width: wp('100%'), height: hp('45%'), }} />
                    <View style={{ marginTop: hp('8%'), position: 'absolute' }}>
                        <View style={{ marginLeft: hp('3%'), flexDirection: 'row', }}>
                            <TouchableOpacity >
                                <AntDesign name="left" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: hp('45%'), }}>
                                <AntDesign name="sharealt" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardview}>

                    </View>
                </ImageBackground>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100%'),
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('-5.5%'),

    },
})