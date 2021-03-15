import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export default class QuizResultScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={STYLES.styles.innerCardview}>
                                <View style={{ borderRadius: hp('10%'), marginLeft: hp('20%'), justifyContent: 'center', marginTop: hp('1%'), backgroundColor: '#2855AE', width: 70, height: 70, alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('3%'), color: '#FFFFFF', }}>85%</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), flex: 1, color: '#000000', textTransform: 'capitalize' }}>Surface Areas and Volumes</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Exam Date</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>10 Dec 20</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Start Time</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 Am</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>End Time</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 Am</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Duration</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 AM</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Total Marks </Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>20 Marks</Text>
                                </View>
                            </View>
                            <View style={STYLES.styles.innerCardview}>
                                <View style={{ borderRadius: hp('10%'), marginLeft: hp('20%'), justifyContent: 'center', marginTop: hp('1%'), backgroundColor: '#2855AE', width: 70, height: 70, alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('3%'), color: '#FFFFFF', }}>85%</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), flex: 1, color: '#000000', textTransform: 'capitalize' }}>Surface Areas and Volumes</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Exam Date</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>10 Dec 20</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Start Time</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 Am</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>End Time</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 Am</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Duration</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>09:00 AM</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%'), padding: hp('0.8%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>Total Marks </Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#3A3A3A' }}>20 Marks</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView >
        )
    }
}








// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#5D81C6'
//     },
//     cardview: {
//         flex: 1,
//         backgroundColor: "#FFFFFF",
//         borderTopLeftRadius: hp('5%'),
//         borderTopRightRadius: hp('5%'),
//         marginTop: hp('5%'),
//     },
//     innercardview: {
//         flexDirection: 'column',
//         backgroundColor: "#FFFFFF",
//         borderRadius: hp('2%'),
//         shadowOpacity: 0.5,
//         shadowRadius: 3,
//         shadowOffset: {
//             height: 0,
//             width: 0,
//         },
//         elevation: 5,
//         width: wp('90%'),
//         marginTop: hp('2%'),
//         marginBottom: hp('2%')
//     },
// })