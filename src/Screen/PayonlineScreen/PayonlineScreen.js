import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as STYLES from './Styles';

export default class PayonlineScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.cardview}>
                        <View>
                            <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>DATE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="01 Feb 2020"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <TouchableOpacity>
                                    <Fontisto name="date" size={24} color="#000000" style={{ marginLeft: hp('-5%') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Period</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="28 Feb 2020"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <TouchableOpacity>
                                    <Fontisto name="date" size={24} color="#000000" style={{ marginLeft: hp('-5%') }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Total Fees</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="₹999"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('7%'), }}>
                            <TouchableOpacity style={STYLES.styles.payBtn} onPress={() => { }} >
                                <Text style={STYLES.styles.payText}>PAY NOW</Text>
                                {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('22%'), marginTop: hp('4%') }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
