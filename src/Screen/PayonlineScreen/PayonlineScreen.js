import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class PayonlineScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Pay Online</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View>
                            <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>DATE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={styles.TextInput}
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
                                    style={styles.TextInput}
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
                                        style={styles.TextInput}
                                        placeholder="₹999"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('25%'), }}>
                            <TouchableOpacity style={styles.payBtn} onPress={() => { }} >
                                <Text style={styles.payText}>PAY NOW</Text>
                                {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                            </TouchableOpacity>
                        </View>
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
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    payBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    payText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})