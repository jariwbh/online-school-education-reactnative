import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import * as STYLES from './Styles';


export default class ChangePasswordScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Change Password</Text>
                    </View>
                    <View style={STYLES.styles.cardview}>
                        <ScrollView>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Old Password</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>New Password</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Retype Password</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                                <TouchableOpacity style={STYLES.styles.cpBtn} onPress={() => { }} >
                                    <Text style={STYLES.styles.cpText}>Change Password </Text>
                                    {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('4%') }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}


