import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('15%'), justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: hp('4%'), color: '#FFFFFF' }}> Register </Text>
                    </View>
                    <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps={'always'}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    //   defaultValue={this.state.fullname}
                                    placeholder="Full Name"
                                    type='clear'
                                    placeholderTextColor="#A5A5A5"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                //   onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                //   onChangeText={(fullname) => this.setFullName(fullname)}
                                />
                            </View>
                            {/* <Text style={{ marginTop: hp('-3%'), marginLeft: hp('0%'), color: '#ff0000' }}>{this.state.usererror && this.state.usererror}</Text> */}
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    //   defaultValue={this.state.username}
                                    placeholder="Email"
                                    type='clear'
                                    placeholderTextColor="#A5A5A5"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    blurOnSubmit={false}
                                //   onSubmitEditing={() => { this.TeardTextInputRef.current.focus() }}
                                //   ref={this.secondTextInputRef}
                                //   onChangeText={(username) => this.setUserName(username)}
                                />

                            </View>
                            {/* <Text style={{ marginTop: hp('-3%'), marginLeft: hp('0%'), color: '#ff0000' }}>{this.state.passworderror && this.state.passworderror}</Text> */}
                            <View style={styles.inputView} >

                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#A5A5A5"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    keyboardType="number-pad"
                                //   ref={this.TeardTextInputRef}
                                //  onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                            {/* <Text style={{ marginTop: hp('-2.5%'), marginLeft: wp('7%'), color: '#ff0000' }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text> */}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), }}>
                            <TouchableOpacity style={styles.regBtn} onPress={() => { this.props.navigation.navigate('HomeScreen') }} >
                                <Text style={styles.regText}>REGISTER</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: "stretch"
        // width: wp('100%'),
        // height: hp('100 %'),
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: wp('70%'),
        height: hp('8%'),
        margin: hp('3%'),
        alignItems: "center",

    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    regBtn: {
        flexDirection: 'row',
        width: wp('70%'),
        backgroundColor: "#D6E523",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    regText: {
        color: '#858E1F',
        fontSize: hp('2.5%'),

    },
})