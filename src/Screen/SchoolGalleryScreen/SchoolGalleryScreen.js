import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native'
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';

export default class SchoolGalleryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>School Gallery</Text>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View style={{ marginTop: hp('0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                                <View style={{ marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('35%'), width: wp('45%'), borderRadius: hp('2%') }}
                                    />
                                </View>
                                <View style={{ marginTop: hp('-11%'), }}>
                                    <Image source={require('../../../assets/image/galleryimage1.png')} style={{ height: hp('20%'), width: wp('45%'), borderRadius: hp('2%') }}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: hp('-13%'), marginRight: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage1.png')} style={{ height: hp('25%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: hp('-10%'), marginLeft: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage1.png')} style={{ height: hp('20%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ marginTop: hp('-8%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('35%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ marginTop: hp('-25%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('35%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ marginTop: hp('-8%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('25%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ marginTop: hp('-15%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('25%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                            <View style={{ marginTop: hp('-25%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: hp('1.5%') }}>
                                <Image source={require('../../../assets/image/galleryimage2.png')} style={{ height: hp('35%'), width: wp('45%'), borderRadius: hp('2%') }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
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
        marginTop: hp('7%'),


    },
})