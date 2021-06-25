import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ImageBackground, Image, TextInput, ScrollView,
    TouchableOpacity, ToastAndroid, BackHandler, Dimensions, Keyboard, StatusBar, Platform
} from 'react-native';
import Loading from '../../Components/Loader/Loading';
import axiosConfig from '../../Helpers/axiosConfig';
import * as STYLES from './Styles';
const WIDTH = Dimensions.get('window').width;
import BackButton from '../../Components/BackButton/BackButton';
import { SendEmailService, SendSmsService } from '../../Services/SendEmailandSmsService/SendEmailandSmsService';
import { CheckUser } from '../../Services/StudentService/StudentService';

export default function ForgetPasswordScreen(props) {
    const [username, setusername] = useState(null);
    const [loading, setloading] = useState(false);
    const [usererror, setusererror] = useState(null);
    const [verifyOtpNumber, setverifyOtpNumber] = useState(null);
    const [inputOtpNumber, setinputOtpNumber] = useState(null);
    const [inputOtpNumberError, setinputOtpNumberError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
    }, [username, loading, usererror, verifyOtpNumber, inputOtpNumber, userInfo, inputOtpNumberError])

    //check email validation
    const setEmail = (email) => {
        // const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            //setusername(null);
            setusererror('Email Id can not be empty');
            return;
        }
        // if (!re.test(email)) {
        //     setusererror('Ooops! We need a valid email address');
        //     setusername(email);
        //     return;
        setusername(email);
        setusererror(null);
        return;
    }

    //clear Field up data
    const resetScreen = () => {
        setloading(false);
        setusername(null);
        setusererror(null);
        setinputOtpNumber(null);
        setverifyOtpNumber(null);
    }

    // generate OTP function 
    const createOtp = async () => {
        let body;
        if (!username) {
            setEmail(username);
            return;
        }
        try {
            setloading(true);
            if (username) {
                body = {
                    "username": username
                }
            }

            const CheckUserResponse = await CheckUser(body);
            if (Object.keys(CheckUserResponse.data).length !== 0 && CheckUserResponse.data != null && CheckUserResponse.data != 'undefind' && CheckUserResponse.status == 200) {
                const verifyOtpNumber = Math.floor(1000 + Math.random() * 9000);
                setverifyOtpNumber(verifyOtpNumber);
                setUserInfo(CheckUserResponse.data);
                onPressSubmit(CheckUserResponse.data.property, verifyOtpNumber);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('OTP Sending', ToastAndroid.LONG);
                } else {
                    alert('OTP Sending');
                }
                setloading(false);
            }
            else {
                if (Platform.OS === 'android') {
                    ToastAndroid.show('User not exits!', ToastAndroid.LONG);
                } else {
                    alert('User not exits!');
                }
                resetScreen();
            }
        }
        catch (error) {
            resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show('User not exits!', ToastAndroid.LONG);
            } else {
                alert('User not exits!');
            }
        };
    }

    //resend OTP function
    const reSendOTP = async () => {
        const verifyOtpNumber = Math.floor(1000 + Math.random() * 9000);
        setverifyOtpNumber(verifyOtpNumber);
        axiosConfig('5a2cbf23ee5c2a1080793272');
        let mobilebody;
        let emailbody;
        if (userInfo && userInfo.property && userInfo.property.mobile) {
            mobilebody = {
                "messagetype": "SMS",
                "message": {
                    "content": `${verifyOtpNumber} is the OTP for accessing on MYISCHOOL. Valid till 5 Minutes.Do not share this with anyone.`,
                    "to": [userInfo.property.mobile],
                    "subject": "Reset Password OTP"
                }
            }
        }

        if (userInfo && userInfo.property && userInfo.property.primaryemail) {
            emailbody = {
                "messagetype": "EMAIL",
                "message": {
                    "content": `${verifyOtpNumber} is the OTP for accessing on MYISCHOOL. Valid till 5 Minutes.Do not share this with anyone.`,
                    "to": [userInfo.property.primaryemail],
                    "subject": "Reset Password OTP"
                }
            }
        }

        setloading(true);
        try {
            if (userInfo && userInfo.property && userInfo.property.primaryemail) {
                const response = await SendEmailService(emailbody);
                if (response.data != 'undefind' && response.status == 200) {
                    setloading(false);
                } else {
                    setloading(false);
                }
            }

            if (userInfo && userInfo.property && userInfo.property.mobile) {
                const response1 = await SendSmsService(mobilebody);
                if (response1.data != 'undefind' && response1.status == 200) {
                    setloading(false);
                } else {
                    setloading(false);
                }
            }

            if (Platform.OS === 'android') {
                ToastAndroid.show('OTP Sending', ToastAndroid.LONG);
            } else {
                alert('OTP Sending');
            }
            setloading(false);
        }
        catch (error) {
            resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show('OTP Sending Problem', ToastAndroid.LONG);
            } else {
                alert('OTP Sending Problem');
            }
        };

    }

    //OTP verify function
    const otpVerify = async () => {
        if (!inputOtpNumber) {
            setinputOtpNumberError('error');
            return;
        }
        setloading(true);

        try {
            if (Number(inputOtpNumber) === Number(verifyOtpNumber)) {
                setloading(false);
                let userValue;
                if (username) {
                    userValue = username
                }
                resetScreen();
                props.navigation.navigate('NewPasswordScreen', { userValue });
            } else {
                setloading(false);
                setinputOtpNumber(null);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('OTP not Match!', ToastAndroid.LONG)
                } else {
                    alert('OTP not Match!');
                }
            }
        }
        catch (error) {
            resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show('User not exits!', ToastAndroid.LONG);
            } else {
                alert('User not exits!');
            }
        };
    }

    //SIGN IN BUTTON ONPRESS TO PROCESS
    const onPressSubmit = async (member, verifyOtpNumber) => {
        axiosConfig('5a2cbf23ee5c2a1080793272');
        let mobilebody;
        let emailbody;
        if (member && member.mobile) {
            mobilebody = {
                "messagetype": "SMS",
                "message": {
                    "content": `${verifyOtpNumber} is the OTP for accessing on MYISCHOOL. Valid till 5 Minutes.Do not share this with anyone.`,
                    "to": [member.mobile],
                    "subject": "Reset Password OTP"
                }
            }
        }

        if (member && member.primaryemail) {
            emailbody = {
                "messagetype": "EMAIL",
                "message": {
                    "content": `${verifyOtpNumber} is the OTP for accessing on MYISCHOOL. Valid till 5 Minutes.Do not share this with anyone.`,
                    "to": [member.primaryemail],
                    "subject": "Reset Password OTP"
                }
            }
        }

        setloading(true);
        try {
            if (member && member.primaryemail) {
                const response = await SendEmailService(emailbody);
                if (response.data != 'undefind' && response.status == 200) {
                    setloading(false);
                }
            }

            if (member && member.mobile) {
                const response1 = await SendSmsService(mobilebody);
                if (response1.data != 'undefind' && response1.status == 200) {
                    setloading(false);
                }
            }
        }
        catch (error) {
            resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show('User not exits!', ToastAndroid.LONG);
            } else {
                alert('User not exits!');
            }
        };
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5D81C6" />
            <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={{ marginTop: 15, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <BackButton onPress={() => props.navigation.navigate('LoginScreen')} />
                    </View>
                    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/vector.png')} style={{ height: 140, width: WIDTH - 100 }} />
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Text style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' }}>Hi Student </Text>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', }}>Forget Password in to continue</Text>
                    </View>
                    {
                        userInfo ? <View style={STYLES.styles.inputView}>
                            <View>
                                <View style={{ marginTop: 30, marginLeft: 35 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 16 }}>OTP</Text>
                                </View>
                                <View>
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder={"Enter OTP"}
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={inputOtpNumberError == null ? "#A5A5A5" : "red"}
                                        defaultValue={inputOtpNumber}
                                        returnKeyType="done"
                                        onSubmitEditing={() => { Keyboard.dismiss() }}
                                        onChangeText={(number) => setinputOtpNumber(number)}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => reSendOTP()}
                                style={{ marginTop: 5, marginRight: 40, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ color: '#2855AE', fontSize: 14 }}>Resend OTP</Text>
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <TouchableOpacity
                                    style={loading == true ? STYLES.styles.loginBtnLoading : STYLES.styles.loginBtn}
                                    onPress={() => otpVerify()}
                                    disabled={loading == true ? true : false}>
                                    {loading == true ? <Loading /> : <Text style={STYLES.styles.loginText}>VERIFY OTP</Text>}
                                </TouchableOpacity>
                            </View>
                        </View>
                            :
                            <View style={STYLES.styles.inputView}>
                                <View>
                                    <View style={{ marginTop: 30, marginLeft: 35 }}>
                                        <Text style={{ color: '#A5A5A5', fontSize: 16 }}>User Name</Text>
                                    </View>
                                    <View>
                                        <TextInput
                                            style={STYLES.styles.TextInput}
                                            placeholder={"Enter User Name"}
                                            placeholderTextColor="#323643"
                                            underlineColorAndroid={usererror == null ? "#A5A5A5" : "red"}
                                            defaultValue={username}
                                            returnKeyType="done"
                                            blurOnSubmit={false}
                                            onSubmitEditing={() => { Keyboard.dismiss() }}
                                            onChangeText={(email) => setEmail(email)}
                                        />
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                    <TouchableOpacity
                                        style={loading == true ? STYLES.styles.loginBtnLoading : STYLES.styles.loginBtn}
                                        onPress={() => createOtp()}
                                        disabled={loading == true ? true : false}>
                                        {loading == true ? <Loading /> : <Text style={STYLES.styles.loginText}>SEND OTP</Text>}
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}
