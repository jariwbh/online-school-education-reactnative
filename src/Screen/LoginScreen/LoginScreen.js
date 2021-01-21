import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, ScrollView } from 'react-native';
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
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg2.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('10%'), justifyContent: 'center', alignItems: 'center', marginLeft: hp('7.5%') }}>

                        <Image source={require('../../../assets/image/Student.png')} style={{ height: hp('12%'), width: wp('25%'), marginTop: hp('0%'), borderRadius: hp('2%') }}
                        />
                        <TouchableOpacity >
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}> Students / Parents </Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps={'always'}
                    >
                        <View style={{ marginTop: hp('3%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('4%'), color: '#FFFFFF' }}> Login </Text>
                        </View>
                        <View style={{ marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Student ID / User ID </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: hp('7%'), marginTop: hp('-2%') }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Enter Student ID / User"
                                    //   defaultValue={this.state.username}
                                    type='clear'
                                    returnKeyType="next"
                                    placeholderTextColor="#A5A5A5"
                                    blurOnSubmit={false}
                                // onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                //  onChangeText={(email) => this.setEmail(email)}
                                />
                            </View>
                            {/* <Text style={{ marginTop: hp('-3%'), marginLeft: hp('0%'), color: '#ff0000' }}>{this.state.usererror && this.state.usererror}</Text> */}
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="**********"
                                    type='clear'
                                    //  defaultValue={this.state.password}
                                    placeholderTextColor="#A5A5A5"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    keyboardType="number-pad"
                                    ref={this.secondTextInputRef}
                                //  onSubmitEditing={() => this.onPressSubmit()}
                                //  onChangeText={(password) => this.setPassword(password)}
                                />
                            </View>
                            {/* <Text style={{ marginTop: hp('-3%'), marginLeft: hp('0%'), color: '#ff0000' }}>{this.state.passworderror && this.state.passworderror}</Text> */}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), marginLeft: hp('7.5%') }}>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => { }} >
                                <Text style={styles.loginText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), marginLeft: hp('7.5%') }}>
                            <TouchableOpacity onPress={() => { }} >
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), marginLeft: hp('7.5%'), flexDirection: 'row' }}>
                            <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>New User ? </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}> Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
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
    loginBtn: {
        flexDirection: 'row',
        width: wp('70%'),
        backgroundColor: "#D6E523",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: '#858E1F',
        fontSize: hp('2.5%'),

    },
})