import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Dash from 'react-native-dash';


export default class Myprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginTop: hp('5%'), }}>
                            <TouchableOpacity style={styles.menu}>
                                <AntDesign name="arrowleft" size={27} color="#000000" style={{ marginTop: hp('0%'), }} />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginLeft: hp('1%') }}>My Profile </Text>
                            </View>
                        </View>
                        <View style={styles.no}>
                            <TouchableOpacity >
                                <Ionicons name="md-notifications-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <MaterialCommunityIcons name="message-text-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Ionicons name="calendar-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), }}>
                        <Image source={require('../../../assets/image/Group1.png')} style={{ height: hp('25%'), width: wp('90%'), marginTop: hp('0%'), }}
                        />
                    </View>
                    <View >
                        <View style={{ marginTop: hp('-22%'), flexDirection: 'row', flex: 1 }}>
                            <Image source={require('../../../assets/image/profile1.png')} style={{ marginLeft: hp('5%'), height: hp('13%'), width: wp('23%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                            />
                            <View>
                                <Text style={{ fontSize: hp('3%'), marginLeft: hp('5%'), color: '#FFFFFF' }}>Caroiyn</Text>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%'), color: '#FFFFFF' }}>vii std - B section - female</Text>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%'), color: '#FFFFFF' }}>ID Number - CF005</Text>
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%'), color: '#FFFFFF' }}>Bus No-25</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: hp('49%') }}>
                            <Image source={require('../../../assets/image/Group2.png')} style={{ height: hp('5%'), width: wp('5%'), marginTop: hp('-8%'), marginRight: hp('2.5%'), }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%') }}>
                        <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>Profile Information</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ marginLeft: hp('3%') }}>
                                <Image source={require('../../../assets/image/proicon.png')} style={{ marginTop: hp('5%'), }}
                                />
                            </View>
                            <View>
                                <Dash style={{ width: wp('2%'), height: hp('28%'), flexDirection: 'column', marginLeft: hp('5.5%'), }} dashColor='white' />
                            </View>
                            <View style={{ marginLeft: hp('3%'), flexDirection: 'row' }}>
                                <Image source={require('../../../assets/image/book.png')} style={{ marginTop: hp('0%'), }}
                                />
                            </View>
                        </View>

                        <View style={styles.Personal}>
                            <View style={{ flexDirection: 'row', marginLeft: hp('4.5%'), padding: hp('1%') }}>
                                <Text style={{ fontSize: hp('2%'), }}>Personal Info</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Date Of Birth</Text>
                                <Text style={{ fontSize: hp('2%'), }}>15-12-2004</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}> Blood Group </Text>
                                <Text style={{ fontSize: hp('2%'), }}> B+ </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Admission Number </Text>
                                <Text style={{ fontSize: hp('2%'), }}>2008-012345 </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Father Name </Text>
                                <Text style={{ fontSize: hp('2%'), }}>Mr.Benjamin </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Mother Name </Text>
                                <Text style={{ fontSize: hp('2%'), }}>Mrs.Victoria </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: hp('9%'), marginTop: hp('-10%') }}>
                        <View style={styles.Personal1} >
                            <View style={{ flexDirection: 'row', marginLeft: hp('4.5%'), padding: hp('1%') }}>
                                <Text style={{ fontSize: hp('2%'), }}>Personal Info</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Phone Number </Text>
                                <Text style={{ fontSize: hp('2%'), }}>+1 XXXXX YYYYY</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.3 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Address </Text>
                                <Text style={{ fontSize: hp('2%'), }}>28,Bird Spring Lane US </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
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
        height: hp('100 %'),
    },
    menu: {
        height: hp('5%'),
        width: wp('10%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: hp('2%'),
    },
    no: {
        marginTop: hp('5%'),
        flexDirection: 'row',
        height: hp('5%'),
        width: wp('30%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        alignItems: 'center',
        marginRight: hp('2%'),
        justifyContent: 'center'
    },
    Personal: {
        // flex: 1,
        marginTop: hp('5%'),
        flexDirection: 'column',
        height: hp('30%'),
        width: wp('70%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginLeft: hp('3%'),
        marginRight: hp('2%'),
    },
    Personal1: {
        marginTop: hp('5%'),
        flexDirection: 'column',
        height: hp('15%'),
        width: wp('70%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginLeft: hp('3%'),
        marginRight: hp('2%'),
    }
})