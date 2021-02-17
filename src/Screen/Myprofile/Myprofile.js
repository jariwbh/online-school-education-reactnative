import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as STYLES from './Styles';
import moment from 'moment';
const ProfileURL = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';

export default class Myprofile extends Component {
    constructor(props) {
        super(props);
        this.StudentData = this.props.route.params.StudentData;
        this.state = {
            StudentData: this.StudentData,
            studentProfile: null,
            loader: true,
        };
    }
    render() {
        const { StudentData, studentProfile, loader } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <View style={STYLES.styles.innercardview}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('2%') }}>
                                    <View style={{ marginLeft: hp('1%'), flexDirection: 'row' }}>
                                        <Image source={{ uri: studentProfile && studentProfile !== null ? studentProfile : ProfileURL }} style={{ height: hp('12%'), width: wp('20%'), borderRadius: hp('2%') }} />
                                        <View style={{ marginTop: hp('1.5%') }}>
                                            <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', textTransform: 'capitalize' }}>{StudentData.property.fullname}</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#777777', marginTop: hp('1%') }}>{StudentData.membershipid.membershipname}  |  Roll no: {StudentData.property.streetnumber}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('4%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Admission Class</Text>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('12%') }}>Academic Year</Text>
                            </View>
                            <View pointerEvents="none" style={{ marginTop: hp('0%'), marginLeft: hp('0%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.membershipid.membershipname}
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <TextInput
                                    defaultValue={moment(StudentData.membershipstart).format('YYYY') + '-' + moment(StudentData.membershipend).format('YYYY')}
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View >
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Date of Addmission</Text>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('8%') }}>Date of Birth</Text>
                            </View>
                            <View pointerEvents="none" style={{ marginTop: hp('0%'), marginLeft: hp('2%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={moment(StudentData.property.dob).format('DD MMM YYYY')}
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    defaultValue={moment(StudentData.property.dob).format('DD MMM YYYY')}
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Gender</Text>
                            </View>
                            <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.property.gender}
                                    style={STYLES.styles.TextInput1}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mail ID</Text>
                            </View>
                            <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.property.email}
                                    style={STYLES.styles.TextInput1}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mobile Number</Text>
                            </View>
                            <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.property.mobile_number}
                                    style={STYLES.styles.TextInput1}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>City</Text>
                            </View>
                            <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.property.city}
                                    style={STYLES.styles.TextInput1}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>State</Text>
                            </View>
                            <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                <TextInput
                                    defaultValue={StudentData.property.state}
                                    style={STYLES.styles.TextInput1}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                                <View>
                                    <TouchableOpacity>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: hp('5%') }}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


