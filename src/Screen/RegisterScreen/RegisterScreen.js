import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { LOGINSCREEN } from '../../Action/Type'
import * as STYLES from './Styles';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            loading: false,
        };
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this.TeardTextInputRef = React.createRef();
    }


    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setUserName(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usernameError: 'Email Id can not be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    //SIGN IN BUTTON ONPRESS TP PROCESS
    onPressSubmit = async () => {
        const { fullname, username, mobilenumber } = this.state;
        if (!fullname || !username || !mobilenumber) {
            this.setFullName(fullname)
            this.setUserName(username)
            this.setMobileNumber(mobilenumber)
            return;
        }
        const body = {
            property: {
                fullname: fullname,
                email: username,
                mobile_number: mobilenumber,
            }
        }
        this.setState({ loading: true })
        try {
            await RegisterService(body).then(response => {
                if (response != null) {
                    ToastAndroid.show("SignUp Success!", ToastAndroid.LONG);
                    this.props.navigation.navigate(LOGINSCREEN);
                }
            })
        }
        catch (error) {
            this.setState({ loading: false })
            ToastAndroid.show("SignUp Failed!", ToastAndroid.LONG);
        }
    }

    render() {
        const { fullnameError, usernameError, mobilenumberError } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                        <View style={STYLES.styles.inputView}>
                            <View style={{ marginTop: hp('-28%'), justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <Image source={require('../../assets/image/vector.png')} style={{ height: hp('25%'), width: wp('93%'), marginTop: hp('0%'), borderRadius: hp('0%') }}
                                />
                            </View>
                            <View style={{ marginLeft: hp('4%'), marginTop: hp('4%') }}>
                                <Text style={{ fontSize: hp('4%'), color: '#000000', fontWeight: 'bold' }}>Hi Student </Text>
                            </View>
                            <View style={{ marginLeft: hp('4%') }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#777777', }}>Sign Up to continue</Text>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5.5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Full Name</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        defaultValue={this.state.fullname}
                                        type='clear'
                                        placeholder="Enter Full Name"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={fullnameError == null ? "#A5A5A5" : "red"}
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                        onChangeText={(fullname) => this.setFullName(fullname)}
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('5.5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Email</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        defaultValue={this.state.username}
                                        type='clear'
                                        placeholder="Enter Email"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={usernameError == null ? "#A5A5A5" : "red"}
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.TeardTextInputRef.current.focus() }}
                                        ref={this.secondTextInputRef}
                                        onChangeText={(username) => this.setUserName(username)}
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('5.5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mobile No</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        type='clear'
                                        placeholder="Enter Mobile Number"
                                        returnKeyType="done"
                                        keyboardType="number-pad"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={mobilenumberError == null ? "#A5A5A5" : "red"}
                                        ref={this.TeardTextInputRef}
                                        onSubmitEditing={() => this.onPressSubmit()}
                                        onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'), }}>
                                <TouchableOpacity style={STYLES.styles.regBtn} onPress={() => this.onPressSubmit()} >
                                    <Text style={STYLES.styles.regText}>SIGN UP </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('2%'), justifyContent: 'center', flexDirection: 'row' }} >
                                <Text style={STYLES.styles.innerText}> Already have an account? </Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(LOGINSCREEN)} >
                                    <Text style={STYLES.styles.baseText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: hp('5%') }}></View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default RegisterScreen;