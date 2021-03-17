import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { PLAYQUIZ } from '../../Action/Type';
import * as STYLES from './Styles';
import moment from 'moment'

export default function Playquizstart(props) {
    let selectedExamDeatils = props.route.params.item;
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={STYLES.styles.inputView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>Exam Name </Text>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>Total Marks </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%'), marginLeft: hp('2.5%'), marginRight: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', color: '#6184C7' }}> {selectedExamDeatils.title}</Text>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', color: '#6184C7', }}> {selectedExamDeatils.totalmarks} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>End Date </Text>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>Duration </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%'), marginLeft: hp('2.5%'), marginRight: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', color: '#6184C7' }}> {moment(selectedExamDeatils.enddatetime).format('LL')}</Text>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', color: '#6184C7', }}> {selectedExamDeatils.time + ' ' + 'Minutes'} </Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }}>EXAM RULES AND REGULATIONS</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center', marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text>( 1 ) All school rules must be observed throughout the entire test. </Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center', marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text>( 2 ) Normal lessons will resume after the Common Test.</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center', marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text>( 3 ) Students are required to bring their own writing and mathematical instruments.  No borrowing, lending or exchange of any materials is allowed during the Common Test.</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center', marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text>( 4 ) Absentees must produce original medical certificates from approved clinics or hospitals.  No parents’ letter will be accepted.  Students who are absent without valid reasons will be given a “0” for the paper.</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center', marginLeft: hp('3%'), marginRight: hp('3%') }}>
                        <Text>( 5 ) Do not push back button or try to refresh the page, else all your answers will get erased. </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('5%') }}>
                        <TouchableOpacity style={{ width: wp('80%'), backgroundColor: '#2855AE', alignItems: 'center', height: hp('5.5%'), borderRadius: hp('2%') }}
                            onPress={() => props.navigation.navigate(PLAYQUIZ, { selectedExamDeatils })}>
                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>START NOW</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: hp('5%') }}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
