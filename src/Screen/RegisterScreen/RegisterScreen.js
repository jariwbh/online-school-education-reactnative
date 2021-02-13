import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.inputView}>
                        <View style={{ marginTop: hp('-22%'), justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                            <Image source={require('../../../assets/image/vector.png')} style={{ height: hp('25%'), width: wp('93%'), marginTop: hp('0%'), borderRadius: hp('0%') }}
                            />
                        </View>
                        <View style={{ marginLeft: hp('4%') }}>
                            <Text style={{ fontSize: hp('4%'), color: '#000000', fontWeight: 'bold' }}>Hi Student </Text>
                        </View>
                        <View style={{ marginLeft: hp('4%') }}>
                            <Text style={{ fontSize: hp('3%'), color: '#000000', }}>Sign in to continue</Text>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps={'always'}
                        >
                            <View>
                                <View style={{ marginTop: hp('4%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Full Name</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Full Name"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Email</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Email"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mobile No</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Mobile No"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                                <TouchableOpacity style={styles.regBtn} onPress={() => { this.props.navigation.navigate('HomeScreen') }} >
                                    <Text style={styles.regText}>SINE UP </Text>
                                    {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: hp('5%') }}></View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </SafeAreaView >
        );
    }
}

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100 %'),
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('30%'),
    },
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    regBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    regText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
    },
})