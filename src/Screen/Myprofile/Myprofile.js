import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Myprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginLeft: hp('2%') }}>
                            <AntDesign name="left" size={24} color="#FFFFFF" />
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('2%') }}>My Profile</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', width: wp('25%'), height: hp('4%'), backgroundColor: '#FFFFFF', marginRight: hp('5%'), alignItems: 'center', borderRadius: hp('3%'), justifyContent: 'space-evenly' }}>
                            <AntDesign name="check" size={24} color="#6688CA" />
                            <Text style={{ color: '#6688CA', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('0%') }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('2%') }}>
                                        <View style={{ marginLeft: hp('1%'), flexDirection: 'row', }}>
                                            <Image source={require('../../assets/image/profile1.png')} style={{ height: hp('12%'), width: wp('20%'), borderRadius: hp('2%') }}
                                            />
                                            <View>
                                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', marginTop: hp('0%'), padding: hp('1%') }}>Akshay Syal</Text>
                                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#777777' }}>Class XI-B  |  Roll no: 04</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={{ marginRight: hp('3%') }}>
                                            <AntDesign name="camerao" size={24} color="#777777" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('4%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Adhar No</Text>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('19%') }}>Academic Year</Text>
                                </View>
                                <View style={{ marginTop: hp('0%'), marginLeft: hp('0%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="1234 4325 4567 1234"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="2020-2021"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View >
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Admission Class</Text>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('11%') }}>Old Admission No</Text>
                                </View>
                                <View style={{ marginTop: hp('0%'), marginLeft: hp('0%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="VI"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="T00221"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Parent Mail ID</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput1}
                                        placeholder="parentboth84@gmail.com"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mother Name</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput1}
                                        placeholder="Monica Larson"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Father Name</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput1}
                                        placeholder="Bernard Taylor"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Parmanent Add.</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        style={styles.TextInput1}
                                        placeholder="Karol Bagh, Delhi"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#A5A5A5" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: hp('5%') }}></View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </SafeAreaView>
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
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('7%'),

    },
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderColor: '#2855AE',
        borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        width: wp('90%'),
        marginTop: hp('2%')
    },
    TextInput: {
        width: wp('40%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('0%'),
        marginTop: hp('-1%'),
    },
    TextInput1: {
        width: wp('90%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('3%'),
        marginTop: hp('-1%'),
    },
})