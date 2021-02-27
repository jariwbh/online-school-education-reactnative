import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ToastAndroid } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ChangePasswordService } from '../../Services/PasswordService/PasswordService'
import { AUTHUSER, AUTHUSERINFO, LOGINSCREEN } from '../../Action/Type'
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../Components/Loader/Loading';
import * as STYLES from './Styles';

export default class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentNumber: null,
            getOldPassword: null,
            oldPassword: null,
            oldPassworderror: null,
            oldMatchPassword: null,
            newPassword: null,
            newPassworderror: null,
            retypePassword: null,
            retypePassworderror: null,
            loading: false,
            matchPassword: null
        };
        this.setoldPassword = this.setoldPassword.bind(this);
        this.setnewPassword = this.setnewPassword.bind(this);
        this.setretypePassword = this.setretypePassword.bind(this);
        this.matchOldPassword = this.matchOldPassword.bind(this);
        this.matchNewPassword = this.matchNewPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this.thirdTextInputRef = React.createRef();
    }

    //user type to set old password
    setoldPassword(oldpassword) {
        if (!oldpassword || oldpassword.length <= 0) {
            return this.setState({ oldPassworderror: 'old Password cannot be empty' });
        }
        this.matchOldPassword(oldpassword);
        return this.setState({ oldPassword: oldpassword, oldPassworderror: null });
    }

    //user type to set new password
    setnewPassword(newpassword) {
        if (!newpassword || newpassword.length <= 0) {
            return this.setState({ newPassworderror: 'new Password cannot be empty' });
        }
        return this.setState({ newPassword: newpassword, newPassworderror: null });
    }

    //user type to set retry password
    setretypePassword(retypepassword) {
        if (!retypepassword || retypepassword.length <= 0) {
            return this.setState({ retypePassworderror: 'retype Password cannot be empty' });
        }
        this.matchNewPassword(retypepassword);
        return this.setState({ retypePassword: retypepassword, retypePassworderror: null });
    }

    //user type to check old password
    matchOldPassword(oldpassword) {
        if (this.state.getOldPassword !== oldpassword) {
            return this.setState({ loading: false, oldMatchPassword: 'Old Password Not Match!' });
        }
        return this.setState({ oldMatchPassword: null });
    }

    //user type to check new password
    matchNewPassword(retypepassword) {
        if (this.state.newPassword !== retypepassword) {
            return this.setState({ loading: false, matchPassword: 'Password Not Match!' });
        }
        return this.setState({ matchPassword: null });
    }

    // Reset function
    resetScreen() {
        this.setState({
            getOldPassword: null,
            oldPassword: null,
            oldPassworderror: null,
            newPassword: null,
            newPassworderror: null,
            retypePassword: null,
            retypePassworderror: null,
            matchPassword: null,
            oldMatchPassword: null,
            loading: false
        });
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //get student information
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        var getLoginInfo = await AsyncStorage.getItem(AUTHUSERINFO);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userData = JSON.parse(getUser);
            await this.setState({ studentNumber: userData.membernumber });
        }

        if (getLoginInfo == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userLoginData = JSON.parse(getLoginInfo);
            await this.setState({ getOldPassword: userLoginData.password });
        }
    }

    componentDidMount() {
        this.getStudentData();
    }

    //change password button click to call funcation
    onPressSubmit = async () => {
        const { studentNumber, oldPassword, newPassword, retypePassword } = this.state;
        if (!oldPassword || !newPassword || !retypePassword) {
            this.setoldPassword(oldPassword);
            this.setnewPassword(newPassword);
            this.setretypePassword(retypePassword);
            return;
        }

        const body = {
            username: studentNumber,
            newpassword: newPassword
        }
        this.setState({ loading: true });
        try {
            await ChangePasswordService(body).then(response => {  //ChangePasswordService call api
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    ToastAndroid.show("Change Password Success!", ToastAndroid.LONG);
                    this.resetScreen();
                    return
                }
            })
        }
        catch (error) {
            this.setState({ loading: false });
            ToastAndroid.show("Your Password Not Change!", ToastAndroid.LONG);
        }
    }

    render() {
        const { oldPassworderror, newPassworderror, retypePassworderror, loading } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.cardview}>
                        <View>
                            <View style={{ marginTop: hp('5%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Old Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                    type='clear'
                                    underlineColorAndroid={oldPassworderror == null ? "#A5A5A5" : "red"}
                                    defaultValue={this.state.oldPassword}
                                    secureTextEntry={true}
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => this.secondTextInputRef.current.focus()}
                                    onChangeText={(oldpassword) => this.setoldPassword(oldpassword)}
                                />
                            </View>
                            <Text style={{ fontSize: hp('2%'), marginLeft: wp('10%'), textAlign: 'justify', color: '#ff0000' }}>{this.state.oldMatchPassword && this.state.oldMatchPassword}</Text>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('5%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>New Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                    type='clear'
                                    underlineColorAndroid={newPassworderror == null ? "#A5A5A5" : "red"}
                                    defaultValue={this.state.newPassword}
                                    secureTextEntry={true}
                                    ref={this.secondTextInputRef}
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => this.thirdTextInputRef.current.focus()}
                                    onChangeText={(newpassword) => this.setnewPassword(newpassword)}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('5%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Retype Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                    type='clear'
                                    underlineColorAndroid={retypePassworderror == null ? "#A5A5A5" : "red"}
                                    defaultValue={this.state.retypePassword}
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    ref={this.thirdTextInputRef}
                                    onSubmitEditing={() => this.onPressSubmit()}
                                    onChangeText={(retypepassword) => this.setretypePassword(retypepassword)}
                                />
                            </View>
                        </View>
                        <Text style={{ fontSize: hp('2%'), marginLeft: wp('10%'), textAlign: 'justify', color: '#ff0000' }}>{this.state.matchPassword && this.state.matchPassword}</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity
                                style={loading == true ? STYLES.styles.cpBtnLoading : STYLES.styles.cpBtn}
                                disabled={loading == true ? true : false}
                                onPress={() => this.onPressSubmit()}>
                                {loading == true ? <Loading /> : <Text style={STYLES.styles.cpText}>Change Password </Text>}
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('22%'), marginTop: hp('4%') }} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


