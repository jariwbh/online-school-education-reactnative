import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';

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
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>TimeTable</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View style={styles.listTab}>
                            {
                                this.state.listTab.map(e => (
                                    <TouchableOpacity
                                        style={[styles.btnTab]} onPress={() => this.setstateFilter(e.status)}
                                    >
                                        <Text style={styles.textTab}>{e.status}</Text>
                                    </TouchableOpacity>
                                ))
                            }

                        </View>
                        <ScrollView>
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.innercardview}>
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
                                    <View style={styles.innercardview}>
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
                                    <View style={styles.innercardview}>
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
                                    <View style={styles.innercardview}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%'), alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', }}>
                                                <Text style={{ fontSize: hp('2.5%'), margin: hp('1%'), marginLeft: hp('2%'), color: '#313131', fontWeight: 'bold', }}>Lunch Break</Text>
                                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>10:30am - 11:00am</Text>
                                            </View>
                                            <View>
                                                <Image source={require('../../../assets/image/lunch_break.png')} style={{ width: wp('12%'), height: hp('7%'), marginRight: hp('3%'), }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.innercardview}>
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
                                    <View style={styles.innercardview}>
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
                </ImageBackground>
            </SafeAreaView>
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
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 15,
    },
    btnTab: {
        width: Dimensions.get('window').width / 6.5,
        flexDirection: 'row',
        borderColor: '#00C464',
        borderRadius: hp('2%'),
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#00C464'
    },
    textTabActive: {
        color: '#FFF'
    },
    textTabInActive: {
        color: '#00C464'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderColor: '#bfbfbf',
        borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        marginTop: hp('2%')
    },
})

