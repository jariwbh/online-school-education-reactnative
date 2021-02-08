import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class DateSheetScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Datesheet</Text>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>11</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Science</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Monday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>13</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>English</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Wednesday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>15</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Hindi</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Friday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>18</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Math</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Monday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>20</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Social Study</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Wednesday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: hp('0%') }}>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#3A3A3A', fontWeight: 'bold' }}>22</Text>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>JAN</Text>
                                </View>
                                <View style={{ marginLeft: hp('-15%') }}>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Drawing</Text>
                                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>Friday</Text>
                                </View>
                                <View style={{ marginRight: hp('5%'), flexDirection: 'row' }}>
                                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>09:00 AM</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: hp('3%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <View>
                                <Image source={require('../../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('4%') }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
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
})