import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export default class AssignmentScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Assignment</Text>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.innercardview}>
                                    <View style={{ marginTop: hp('1%'), flex: 1, width: wp('35%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('2%'), color: '#6789CA' }}>Mathematics</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold' }}>Surface Areas and Volumes</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 Nov 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 Dec 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ width: wp('60%'), backgroundColor: '#2855AE', alignItems: 'center', marginTop: hp('5%'), height: hp('6%'), marginLeft: hp('0%'), marginBottom: hp('3%'), borderRadius: hp('2%') }} onPress={() => { }}>
                                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>TO BE SUBMITTED</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.innercardview}>
                                    <View style={{ marginTop: hp('1%'), width: wp('30%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#6789CA' }}>Science</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold' }}>Structure of Atoms</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 Oct 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>30 Oct 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { }} style={{ width: wp('60%'), backgroundColor: '#2855AE', marginTop: hp('5%'), height: hp('6%'), marginLeft: hp('0%'), marginBottom: hp('3%'), alignItems: 'center', borderRadius: hp('2%'), }}>
                                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('1%') }}>TO BE SUBMITTED</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.innercardview}>
                                    <View style={{ marginTop: hp('1%'), width: wp('30%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#6789CA' }}>English</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold' }}>My Bestfriend Essay</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 Sep 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission Date </Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>30 Sep 20</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: hp('3%') }}></View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100%'),
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('7%'),

    },
    innercardview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        marginTop: hp('2%')
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
    },
})