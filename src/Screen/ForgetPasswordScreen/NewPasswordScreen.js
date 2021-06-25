import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ImageBackground, Image, TextInput, ScrollView,
    TouchableOpacity, ToastAndroid, Dimensions, Keyboard, StatusBar, Platform
} from 'react-native';
import Loading from '../../Components/Loader/Loading';
import axiosConfig from '../../Helpers/axiosConfig';
import * as STYLES from './Styles';
const WIDTH = Dimensions.get('window').width;
import BackButton from '../../Components/BackButton/BackButton';
import ForgetPasswordService from '../../Services/ForgetPasswordService/ForgetPasswordService';
import Spinner from 'react-native-loading-spinner-overlay';

const NewPasswordScreen = (props) => {
    const userName = props.route.params.userValue;
    const [newPassword, setNewPassword] = useState(null);
    const [newPassworderror, setNewPassworderror] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [rePassworderror, setRePassworderror] = useState(null);
    const [loading, setloading] = useState(false);
    const secondTextInputRef = React.createRef();

    useEffect(() => {
    }, [newPassword, newPassworderror, rePassword, rePassworderror, loading])

    //check password validation
    const setNewPasswordCheck = (password) => {
        if (!password || password.length <= 0) {
            setNewPassworderror('Password cannot be empty');
            return;
        }
        setNewPassword(password);
        setNewPassworderror(null);
        return;
    }

    //check password validation
    const setRePasswordCheck = (repassword) => {
        if (!repassword || repassword.length <= 0) {
            setRePassworderror('Re-Password cannot be empty');
            return;
        }
        setRePassword(repassword);
        setRePassworderror(null);
        return;
    }

    //clear Field up data
    const resetScreen = () => {
        setloading(false);
        setNewPassword(null);
        setNewPassworderror(null);
        setRePassword(null);
        setRePassworderror(null);
    }

    //SIGN IN BUTTON ONPRESS TO PROCESS
    const onPressSubmit = async () => {
        axiosConfig(null)
        if (!newPassword || !rePassword) {
            setNewPasswordCheck(newPassword);
            setRePasswordCheck(rePassword);
            return;
        }

        if (newPassword != rePassword) {
            setRePassworderror('Cant Match Re-Password');
            setNewPassworderror('Cant Match Password');
            return;
        }

        const body = {
            "newpassword": newPassword,
            "username": userName
        }
        setloading(true);
        try {
            const response = await ForgetPasswordService(body);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                setloading(false);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Your Password is Reset', ToastAndroid.LONG);
                } else {
                    alert('Your Password is Reset');
                }
                props.navigation.navigate('LoginScreen');
            }
        } catch (error) {
            resetScreen();
            if (Platform.OS === 'android') {
                ToastAndroid.show('Something wrong, try again letter!', ToastAndroid.LONG);
            } else {
                alert('Something wrong, try again letter!');
            }
        };
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5D81C6" />
            <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={{ marginTop: 15, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <BackButton onPress={() => props.navigation.navigate('ForgetPasswordScreen')} />
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
                    <View style={STYLES.styles.inputView}>
                        <View>
                            <View style={{ marginTop: 30, marginLeft: 35 }}>
                                <Text style={{ color: '#A5A5A5', fontSize: 16 }}>New Password</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='New Password'
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid={newPassworderror == null ? "#A5A5A5" : "red"}
                                    defaultValue={newPassword}
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                    secureTextEntry={true}
                                    onSubmitEditing={() => secondTextInputRef.current.focus()}
                                    onChangeText={(password) => setNewPasswordCheck(password)}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: 30, marginLeft: 35 }}>
                                <Text style={{ color: '#A5A5A5', fontSize: 16 }}>Retype Password</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder='Re Password'
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid={rePassworderror == null ? "#A5A5A5" : "red"}
                                    defaultValue={rePassword}
                                    returnKeyType="done"
                                    blurOnSubmit={false}
                                    ref={secondTextInputRef}
                                    secureTextEntry={true}
                                    onSubmitEditing={() => Keyboard.dismiss()}
                                    onChangeText={(repassword) => setRePasswordCheck(repassword)}
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <TouchableOpacity
                                style={loading == true ? STYLES.styles.loginBtnLoading : STYLES.styles.loginBtn}
                                onPress={() => onPressSubmit()}
                                disabled={loading == true ? true : false}>
                                {loading == true ? <Loading /> : <Text style={STYLES.styles.loginText}>Reset Password</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Spinner
                    visible={loading}
                    textStyle={{ color: '#2855AE' }}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default NewPasswordScreen;
