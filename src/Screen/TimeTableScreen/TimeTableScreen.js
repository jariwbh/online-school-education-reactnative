import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as STYLES from './Styles';

export default class TimeTableScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'MON',
            listTab: [
                {
                    _id: '1',
                    status: 'MON'
                },
                {
                    _id: '2',
                    status: 'TUE'
                },
                {
                    _id: '3',
                    status: 'WED'
                },
                {
                    _id: '4',
                    status: 'THU'
                },
                {
                    _id: '5',
                    status: 'FRI'
                },
                {
                    _id: '6',
                    status: 'SAT'
                }
            ]
        };
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={STYLES.styles.listTab}>
                        {
                            this.state.listTab.map(e => (
                                <TouchableOpacity
                                    style={[STYLES.styles.btnTab]} onPress={() => this.setstateFilter(e.status)}
                                >
                                    <Text style={STYLES.styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <ScrollView>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>Computer Science</Text>

                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>08:15am - 9:00am</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Cherise James</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>Period 1</Text>
                                    </View>
                                </View>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>Mathematics </Text>

                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>09:00am - 09:45am</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Rivka Steadman</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>Period 2</Text>
                                    </View>
                                </View>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>English</Text>

                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>09:45am - 10:30am</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Rivka Steadman</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>Period 3</Text>
                                    </View>
                                </View>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%'), alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'column', }}>
                                            <Text style={{ fontSize: hp('2.5%'), margin: hp('1%'), marginLeft: hp('2%'), color: '#313131', fontWeight: 'bold', }}>Lunch Break</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>10:30am - 11:00am</Text>
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/image/lunch_break.png')} style={{ width: wp('12%'), height: hp('7%'), marginRight: hp('3%'), }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>Science</Text>

                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>11:00am - 11:45am</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Danica Partridge</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>Period 4</Text>
                                    </View>
                                </View>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>Social Study</Text>

                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>11:45am - 12:30pm</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Danica Partridge</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>Period 5</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: hp('5%') }}></View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView >
        )
    }
}


