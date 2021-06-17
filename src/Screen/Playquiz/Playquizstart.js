import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { PLAYQUIZ } from '../../Action/Type';
import * as STYLES from './Styles';
import moment from 'moment'
const WIDTH = Dimensions.get('window').width;

export default function Playquizstart(props) {
    let selectedExamDeatils = props.route.params.item;
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={STYLES.styles.inputView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#000000' }}>Exam Name </Text>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#000000' }}>Total Marks </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginLeft: 14, marginRight: 20 }}>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }}> {selectedExamDeatils.title}</Text>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }}> {selectedExamDeatils.totalmarks} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#000000' }}>End Date </Text>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#000000' }}>Duration </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginLeft: 14, marginRight: 20 }}>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }}> {moment(selectedExamDeatils.enddatetime).format('LL')}</Text>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }}> {selectedExamDeatils.time + ' ' + 'Minutes'} </Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                        <Text style={{ fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold', color: '#000000' }}>EXAM RULES AND REGULATIONS</Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#555555' }}>( 1 ) All school rules must be observed throughout the entire test. </Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#555555' }}>( 2 ) Normal lessons will resume after the Common Test.</Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#555555' }}>( 3 ) Students are required to bring their own writing and mathematical instruments.  No borrowing, lending or exchange of any materials is allowed during the Common Test.</Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#555555' }}>( 4 ) Absentees must produce original medical certificates from approved clinics or hospitals.  No parents’ letter will be accepted.  Students who are absent without valid reasons will be given a “0” for the paper.</Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#555555' }}>( 5 ) Do not push back button or try to refresh the page, else all your answers will get erased. </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <TouchableOpacity style={{ width: WIDTH - 80, backgroundColor: '#2855AE', alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 10 }}
                            onPress={() => props.navigation.navigate(PLAYQUIZ, { selectedExamDeatils })}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>START NOW</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 25 }}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
