import React, { Component } from 'react';
import {
    View, Text, SafeAreaView, ImageBackground, Image, TextInput, ScrollView,
    TouchableOpacity, ToastAndroid, BackHandler, Dimensions, Keyboard, StatusBar, Platform
} from 'react-native';
import { MAINSCREEN, AUTHUSER, AUTHUSERINFO } from '../../Action/Type'
import LoginService from '../../Services/LoginService/LoginService';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import Loading from '../../Components/Loader/Loading';
import axiosConfig from '../../Helpers/axiosConfig';
import * as STYLES from './Styles';
const WIDTH = Dimensions.get('window').width;

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //mobile back press to call
    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    //check email validation
    setEmail(email) {
        if (!email || email <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null });
    }

    //check password validation
    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null });
    }

    //clear Field up data
    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        });
    }

    //add local storage Records
    authenticateUser = (user) => (
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user))
    )

    //add local storage User and Password
    setUserLoginInfo = (user) => (
        AsyncStorage.setItem(AUTHUSERINFO, JSON.stringify(user))
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
                        this.setState({ loading: false })
                        if (Platform.OS === 'android') {
                            ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
                        } else {
                            alert("Username and Password Invalid!");
                        }
                        this.resetScreen();
                        return
                    }

                    if (response.data != null && response.data != 'undefind' && response.status == 200) {
                        let token = response.data.user.addedby;
                        //set header auth user key
                        axiosConfig(token);
                        this.authenticateUser(response.data.user);
                        this.setUserLoginInfo(body);
                        if (Platform.OS === 'android') {
                            ToastAndroid.show("SignIn Success", ToastAndroid.LONG);
                        } else {
                            alert("SignIn Success!");
                        }
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
            if (Platform.OS === 'android') {
                ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
            } else {
                alert("Username and Password Invalid!");
            }
        };
    }

    render() {
        const { usererror, passworderror, loading } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#345FB4" />
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                        <View style={{ marginTop: 60, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/vector.png')} style={{ height: 140, width: WIDTH - 100 }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' }}>Hi Student </Text>
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 18, color: '#FFFFFF', }}>Sign in to continue</Text>
                        </View>
                        <View style={STYLES.styles.inputView}>
                            <View>
                                <View style={{ marginTop: 30, marginLeft: 35 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 16 }}>User Name</Text>
                                </View>
                                <View>
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
                                <View style={{ marginTop: 30, marginLeft: 35 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 16 }}>Password</Text>
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
                                        onSubmitEditing={() => Keyboard.dismiss()}
                                        onChangeText={(password) => this.setPassword(password)}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                <TouchableOpacity
                                    style={loading == true ? STYLES.styles.loginBtnLoading : STYLES.styles.loginBtn}
                                    onPress={() => this.onPressSubmit()}
                                    disabled={loading == true ? true : false}>
                                    {loading == true ? <Loading /> : <Text style={STYLES.styles.loginText}>SIGN IN </Text>}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Spinner
                            visible={this.state.loading}
                            textStyle={{ color: '#2855AE' }}
                        />
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
