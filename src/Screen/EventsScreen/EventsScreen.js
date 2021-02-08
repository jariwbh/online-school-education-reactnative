import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export default class EventsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Events & Programs</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.innercardview}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Sleepover Night</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
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
                            <TouchableOpacity style={styles.innercardview}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Fishing Tournament</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
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
                            <TouchableOpacity style={styles.innercardview} onPress={() => { this.props.navigation.navigate('FeedsDetailsScreen') }}>
                                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Rhyme Time: A Night of Poetry</Text>
                                </View>
                                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }}>
                                    <Image source={require('../../../assets/image/dp_bg.png')} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
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
    innercardview: {
        //  flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        // height: hp('30%'),
        marginTop: hp('2%'),

    },
})