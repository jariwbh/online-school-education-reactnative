import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign, Fontisto } from '@expo/vector-icons';

export default class FeedsDetailsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image source={require('../../../assets/image/dp_bg.png')} style={{ height: hp('50 %'), width: wp('140%'), }}
                    />
                    <AntDesign name="left" size={30} color="#FFFFFF" style={{ position: 'absolute', marginTop: hp('5%'), marginLeft: hp('2%') }} />
                </View>
                <View style={{ marginLeft: hp('2%'), flexDirection: 'row', marginTop: hp('1%') }}>
                    <Fontisto name="clock" size={20} color="#6789CA" />
                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA', fontWeight: 'bold' }}>12 Jan 21, 09:00 AM</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131', fontWeight: 'bold' }}>Rhyme Time: A Night of Poetry</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777', fontWeight: 'bold', marginRight: hp('2%') }}>April is also National Poetry Month. Now there is a great theme for a fun family night! Combine poetry readings by students and adults. Invite guest readers and poets. Sell a book of student poems as a fund-raiser. Display portfolios of students' best poetry. Present your oldest students in a poetry slam competition, like teacher Brenda Dyck staged with her students (see the Education World article, A Poetry Slam Cures Midwinter Blahs). For more ideas for great poetry writing activities, don't miss Education World's special Poetry Month archive.</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})