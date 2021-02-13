import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';

export default class LeaveApplicationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Ask Doubt</Text>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>class Teacher</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Alexa Clark"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Application Title</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Fever"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Description</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Fever"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                                <TouchableOpacity style={styles.sendBtn} onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                                    <Text style={styles.sendText}>SEND REQUEST </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={require('../../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('4%') }}
                                />
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
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    sendBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    sendText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})