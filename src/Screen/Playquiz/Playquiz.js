import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as STYLES from './Styles';

export default class Playquiz extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                {/* <View style={{ marginTop: hp('8%'), justifyContent: 'space-between' }}>
                        <View style={{ marginLeft: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity>
                                <AntDesign name="left" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <View style={{ marginLeft: hp('-25%') }}>
                                <Text style={{ color: '#FFFFFF', fontSize: hp('3%') }}>Play Quiz</Text>
                            </View>
                            <TouchableOpacity style={{ marginRight: hp('3%'), }}>
                                <Text style={{ color: '#FFFFFF', fontSize: hp('3%') }}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%') }}>
                        <View style={{ width: wp('90%'), height: hp('7%'), borderRadius: hp('3%'), flexDirection: 'row', backgroundColor: '#05518B', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), marginLeft: hp('2%') }}>18 sec</Text>
                            <TouchableOpacity>
                                <AntDesign name="clockcircleo" size={24} color="#FFFFFF" style={{ marginRight: hp('2%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('5%'), justifyContent: 'space-around' }}>
                        <View style={{ marginLeft: hp('0%'), flexDirection: 'row' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('4%'), }}>Question 1</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), marginTop: hp('1%') }}> / 10 </Text>
                        </View>
                        <TouchableOpacity style={{ width: hp('15%'), backgroundColor: "#2855AE", height: hp('5%'), borderRadius: hp('3%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <FontAwesome name="users" size={20} color="#FFFFFF" />
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), }}> 256 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'), }}>
                        <View style={{ width: hp('50%'), backgroundColor: "#FFFFFF", height: hp('70%'), borderRadius: hp('3%'), alignItems: 'center', flex: 1 }}>
                            <Text style={{ marginLeft: hp('2%'), marginTop: hp('3%'), marginRight: hp('3%'), fontSize: hp('3%'), fontWeight: "bold" }}>In 2017, which player became
                            the leading run scorer of all tie in women's ODI cricket?</Text>
                            <TouchableOpacity style={{ width: hp('45%'), borderRadius: hp('3%'), alignItems: 'center', height: hp('7%'), borderColor: '#bfbfbf', borderWidth: hp('0.2%'), margin: hp('2%'), flexDirection: 'row' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%') }}> A. Stefanie Taylor </Text>
                                {/* <RadioButton /> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: hp('45%'), borderRadius: hp('3%'), alignItems: 'center', height: hp('7%'), borderColor: '#6AC259', borderWidth: hp('0.2%'), margin: hp('2%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%'), color: '#6AC259' }}> B. Mithali Raj</Text>
                                <AntDesign name="checkcircle" size={24} color="#6AC259" style={{ marginRight: hp('2%'), }} />

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: hp('45%'), borderRadius: hp('3%'), alignItems: 'center', height: hp('7%'), borderColor: '#E92E30', borderWidth: hp('0.2%'), margin: hp('2%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%'), color: '#E92E30' }}> C. Suzia Betes </Text>
                                <AntDesign name="closecircle" size={24} color="#E92E30" style={{ marginRight: hp('2%'), }} />

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: hp('45%'), borderRadius: hp('3%'), alignItems: 'center', height: hp('7%'), borderColor: '#bfbfbf', borderWidth: hp('0.2%'), margin: hp('2%'), flexDirection: 'row' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%') }}> D. Harmanpreet Kaur</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: hp('5%') }}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

