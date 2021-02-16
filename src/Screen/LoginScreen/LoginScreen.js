import React, { Component } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';
import LoginService from '../../Services/LoginService/LoginService';
import { MAINSCREEN, REGISTERSCREEN, AUTHUSER } from '../../Action/Type'
import Loading from '../../Components/Loader/Loading';
import * as STYLES from './Styles';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'MYISCH10001',
            usererror: null,
            password: 'MYISCH10001',
            passworderror: null,
            loading: false,
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
    }

    setEmail(email) {
        if (!email || email <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null });
    }

    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null });
    }

    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        });
    }

    authenticateUser = (user) => (
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user))
    )

    //SIGN IN BUTTON ONPRESS TO PROCESS
    onPressSubmit = async () => {
        const { username, password } = this.state;
        if (!username || !password) {
            this.setEmail(username);
            this.setPassword(password);
            return;
        }
        const body = {
            username: username,
            password: password
        }
        this.setState({ loading: true });
        try {
            await LoginService(body)
                .then(response => {
                    if (response.data.type && response.data.type == 'Error') {
                        console.log('response', response.status)
                        this.setState({ loading: false })
                        ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
                        this.resetScreen();
                        return
                    }

                    if (response.data != null && response.data != 'undefind' && response.status == 200) {
                        this.authenticateUser(response.data.user);
                        ToastAndroid.show("SignIn Success!", ToastAndroid.LONG);
                        this.setState({ loading: false })
                        this.props.navigation.navigate(MAINSCREEN)
                        //this.resetScreen();
                        return
                    }
                })
        }
        catch (error) {
            console.log('error', error)
            this.setState({ loading: false })
            ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG)
        };
    }

    render() {
        const { usererror, passworderror, loading } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                        <View style={{ marginTop: hp('10%'), justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/vector.png')} style={{ height: hp('20%'), width: wp('75%') }} />
                        </View>
                        <View style={{ marginLeft: hp('4%') }}>
                            <Text style={{ fontSize: hp('4%'), color: '#FFFFFF', fontWeight: 'bold' }}>Hi Student </Text>
                        </View>
                        <View style={{ marginLeft: hp('4%') }}>
                            <Text style={{ fontSize: hp('3%'), color: '#FFFFFF', }}>Sign in to continue</Text>
                        </View>
                        <View style={STYLES.styles.inputView}>
                            <View>
                                <View style={{ marginTop: hp('7%'), marginLeft: hp('5.5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>User Name</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="Enter User Name"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={usererror == null ? "#A5A5A5" : "red"}
                                        defaultValue={this.state.username}
                                        type='clear'
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                        onChangeText={(email) => this.setEmail(email)}
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('3%'), marginLeft: hp('5.5%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Password</Text>
                                </View>
                                <View >
                                    <TextInput
                                        style={STYLES.styles.TextInput}
                                        placeholder="Enter Password"
                                        type='clear'
                                        defaultValue={this.state.password}
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid={passworderror == null ? "#A5A5A5" : "red"}
                                        secureTextEntry={true}
                                        returnKeyType="done"
                                        ref={this.secondTextInputRef}
                                        onSubmitEditing={() => this.onPressSubmit()}
                                        onChangeText={(password) => this.setPassword(password)}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%'), }}>
                                <TouchableOpacity
                                    style={loading == true ? STYLES.styles.loginBtnLoading : STYLES.styles.loginBtn}
                                    onPress={() => this.onPressSubmit()}
                                    disabled={loading == true ? true : false}>
                                    {loading == true ? <Loading /> : <Text style={STYLES.styles.loginText}>SIGN IN </Text>}
                                </TouchableOpacity>
                            </View>
                            {/* <View style={{ marginTop: hp('2%'), justifyContent: 'center', flexDirection: 'row' }} >
                                <Text style={STYLES.styles.innerText}> Don't have an account? </Text>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate(REGISTERSCREEN), this.resetScreen() }}>
                                    <Text style={STYLES.styles.baseText}>Create</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
