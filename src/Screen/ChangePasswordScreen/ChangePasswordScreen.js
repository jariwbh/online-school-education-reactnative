import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import * as STYLES from './Styles';

export default class ChangePasswordScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.cardview}>
                        <View>
                            <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Old Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>New Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Retype Password</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                            <TouchableOpacity style={STYLES.styles.cpBtn} onPress={() => { }} >
                                <Text style={STYLES.styles.cpText}>Change Password </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('4%') }} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


