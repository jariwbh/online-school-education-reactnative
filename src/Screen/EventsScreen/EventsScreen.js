import React, { Component } from 'react'
import { Text, SafeAreaView, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export default class EventsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Events & Programs</Text>
                    </View>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={STYLES.styles.innercardview}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Sleepover Night</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
                                    />
                                    <View style={{ marginLeft: hp('2%'), flexDirection: 'column', marginBottom: hp('3%') }}>
                                        <View style={{ marginLeft: hp('2%'), flexDirection: 'row' }}>
                                            <Fontisto name="clock" size={20} color="#6789CA" />
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA' }}>06 Jan 21, 09:00 AM</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#777777', marginTop: hp('1%'), marginRight: hp('18%') }}>A sleepover is a great treat for kids.
                                            Many schools use such an event as the
                                            culminating activity of the school year. </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={STYLES.styles.innercardview}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Fishing Tournament</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
                                    />
                                    <View style={{ marginLeft: hp('2%'), flexDirection: 'column', marginBottom: hp('3%') }}>
                                        <View style={{ marginLeft: hp('2%'), flexDirection: 'row' }}>
                                            <Fontisto name="clock" size={20} color="#6789CA" />
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA' }}>12 Jan 21, 09:00 AM</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#777777', marginTop: hp('1%'), marginRight: hp('18%') }}>Silver Sands Middle School in Port Orange,
                                            Florida, offers many special events, but one
                                            of the most unique ones is a springtime...
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={STYLES.styles.innercardview} onPress={() => { this.props.navigation.navigate('FeedsDetailsScreen') }}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Rhyme Time: A Night of Poetry</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
                                    />
                                    <View style={{ marginLeft: hp('2%'), flexDirection: 'column', marginBottom: hp('3%') }}>
                                        <View style={{ marginLeft: hp('2%'), flexDirection: 'row' }}>
                                            <Fontisto name="clock" size={20} color="#6789CA" />
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA' }}>24 Jan 21, 09:00 AM</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#777777', marginTop: hp('1%'), marginRight: hp('18%') }}>April is also National Poetry Month. Now
                                            there is a great theme for a fun family night!
                                            Combine poetry readings by students...
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
