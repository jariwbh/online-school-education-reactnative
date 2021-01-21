import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
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
                                <MaterialCommunityIcons name="format-align-right" size={27} color="#000000" style={{ marginTop: hp('1%'), }} />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}> Home </Text>
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
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('5%') }}>
                        <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>Hello Nicola, Welcome Back! </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={styles.cardview}>
                            <View style={{ flexDirection: 'column', marginTop: hp('1%'), marginLeft: hp('1%'), }}>
                                <View style={{ marginLeft: hp('1%'), flexDirection: 'row', margin: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Today</Text>
                                    <View style={{ marginLeft: hp('3%'), }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>10:00 AM to 11:30 AM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: hp('1%'), marginBottom: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Maths Class</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>✓ Lorem ipsum simply dummy taxt</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>✓ Contrary to popular belief </Text>
                                </View>
                                <View style={{ marginLeft: hp('1%'), height: hp('4.5%'), width: wp('20%'), backgroundColor: '#D6E523', borderRadius: hp('1%'), }}>
                                    <TouchableOpacity >
                                        <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: '#858E1F' }}>join class</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View >
                                <Image source={require('../../../assets/image/profile1.png')} style={{ marginLeft: hp('1%'), height: hp('10%'), width: wp('20%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                />
                                <Text style={{ fontSize: hp('2%'), marginLeft: hp('3%'), marginBottom: hp('1%'), color: '#FFFFFF' }}>Caroiyn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ClassDetails') }}>
                            <Image source={require('../../../assets/image/1.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Student</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/2.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Calender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/3.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Attendance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/4.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Results</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/5.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Fees</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/6.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%'), marginBottom: hp('1%') }}>Library</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/7.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%') }}>Online-class</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/8.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%') }}>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image/9.png')} style={{ height: hp('13%'), width: wp('25%'), marginTop: hp('0%'), }}
                            />
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('-1%') }}>Parents</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch"
        // width: wp('100%'),
        // height: hp('100 %'),
    },
    menu: {
        height: hp('6.5%'),
        width: wp('13%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('7%'),
        alignItems: 'center',
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
    cardview: {
        flexDirection: 'row',
        backgroundColor: "#ff8566",
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('92%'),
        height: hp('21%'),
        marginTop: hp('2%'),
        margin: hp('3%'),

    },
})