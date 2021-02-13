import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('10%'), justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/vector.png')} style={{ height: hp('20%'), width: wp('75%'), marginTop: hp('0%'), borderRadius: hp('0%') }}
                        />
                    </View>
                    <View style={{ marginLeft: hp('4%') }}>
                        <Text style={{ fontSize: hp('4%'), color: '#FFFFFF', fontWeight: 'bold' }}>Hi Student </Text>
                    </View>
                    <View style={{ marginLeft: hp('4%') }}>
                        <Text style={{ fontSize: hp('3%'), color: '#FFFFFF', }}>Sign in to continue</Text>
                    </View>
                    <View style={styles.inputView}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps={'always'}
                        >
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mobile Number/Email</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="jari@gmail.com"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Password</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="**********"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                                    <Text style={styles.loginText}>SINE IN </Text>
                                    {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                                </TouchableOpacity>
                            </View>
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
        resizeMode: 'cover',
        width: wp('100%'),
        height: hp('100 %'),
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('1%'),
        height: hp('70%')
    },
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    loginBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})