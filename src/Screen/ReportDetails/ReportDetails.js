import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
//import Calendar from 'react-calendar';
import { Calendar } from 'react-native-calendars'
import Dash from 'react-native-dash';


export default class ReportDetails extends Component {
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
                                <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginLeft: hp('1%') }}>Task & Report </Text>
                            </View>
                        </View>
                        <View style={styles.no}>
                            <TouchableOpacity >
                                <Ionicons name="md-notifications-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <MaterialCommunityIcons name="message-text-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Myprofile') }}>
                                <Ionicons name="calendar-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: hp('2%'), }}>
                        <Calendar
                            horizontal={true}
                            pagingEnabled={true}
                        //  disableArrowLeft={true}
                        //  style={{ marginLeft: hp('5%'), marginRight: hp('5%'), borderRadius: hp('3%') }}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%') }}>
                        <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>All Task</Text>
                        <TouchableOpacity>
                            <FontAwesome name="sliders" size={30} color="#FFFFFF" style={{ marginTop: hp('0%'), }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ marginLeft: hp('3%') }}>
                                <Image source={require('../../../assets/image/Ellipse.png')} style={{ marginTop: hp('3%'), }}
                                />
                                <Text style={{ fontSize: hp('2%'), marginTop: hp('-4%'), marginLeft: hp('1%') }}>02</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0.5%'), marginTop: hp('1%'), color: "#FFFFFF" }}>Wed</Text>
                            </View>
                            <View>
                                <Dash style={{ width: wp('2%'), height: hp('14%'), flexDirection: 'column', marginLeft: hp('5.5%'), }} dashColor='white' />
                            </View>
                            <View style={{ marginLeft: hp('3%'), }}>
                                <Image source={require('../../../assets/image/Ellipse.png')} style={{ marginTop: hp('0%'), }}
                                />
                                <Text style={{ fontSize: hp('2%'), marginTop: hp('-4%'), marginLeft: hp('1%') }}>01</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0.5%'), color: "#FFFFFF", marginTop: hp('1%'), }}>Tue</Text>
                            </View>
                            <View>
                                <Dash style={{ width: wp('2%'), height: hp('15%'), flexDirection: 'column', marginLeft: hp('5.5%'), }} dashColor='white' />
                            </View>
                        </View>

                        <View style={styles.Personal}>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Image source={require('../../../assets/image/Intersection1.png')} style={{ marginTop: hp('0%'), }}
                                />
                                <Text style={{ fontSize: hp('2%'), marginTop: hp('-4%'), color: "#FFFFFF" }}>7Hrs</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: hp('4%'), margin: hp('1%'), flex: 1, marginTop: hp('-3%') }}>
                                <Text style={{ fontSize: hp('2%'), }}>Maths calculation & Test</Text>
                                <Text style={{ fontSize: hp('2%'), }}>Lorem lpsum is simply </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }} >
                                <Text style={{ fontSize: hp('2%'), }}>End Date </Text>
                                <Text style={{ fontSize: hp('2%'), }}>Dec 02,2020</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Report to  </Text>
                                <Text style={{ fontSize: hp('2%'), color: "#FF4D96" }}>Pending </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: hp('9%'), marginTop: hp('-27%') }}>
                        <View style={styles.Personal1} >
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Image source={require('../../../assets/image/Intersection.png')} style={{ marginTop: hp('0%'), }}
                                />
                                <Text style={{ fontSize: hp('2%'), marginTop: hp('-4%'), color: "#FFFFFF" }}>0Hrs</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: hp('3%'), margin: hp('1%'), flex: 1, marginTop: hp('-3%') }}>
                                <Text style={{ fontSize: hp('2%'), }}>Drawing sheet</Text>
                                <Text style={{ fontSize: hp('2%'), }}>Lorem lpsum is simply to the test </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }} >
                                <Text style={{ fontSize: hp('2%'), }}>End Date</Text>
                                <Text style={{ fontSize: hp('2%'), }}>Dec 01,2020</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }} >
                                <Text style={{ fontSize: hp('2%'), }}>Report to  </Text>
                                <Text style={{ fontSize: hp('2%'), color: '#4BFF87' }}>Completed </Text>
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
        marginTop: hp('3%'),
        flexDirection: 'column',
        height: hp('17%'),
        width: wp('70%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginLeft: hp('3%'),
        marginRight: hp('2%'),
    },
    Personal1: {
        marginTop: hp('3%'),
        flexDirection: 'column',
        height: hp('15%'),
        width: wp('70%'),
        backgroundColor: '#FFFFFF',
        borderRadius: hp('3%'),
        marginLeft: hp('3%'),
        marginRight: hp('2%'),
    }
})