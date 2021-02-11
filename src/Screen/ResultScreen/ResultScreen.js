import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class ResultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <Image source={require('../../../assets/image/vector2.png')} style={{ resizeMode: "cover", width: wp('100%'), height: hp('45%'), }} />
                    <View style={{ marginTop: hp('8%'), position: 'absolute' }}>
                        <View style={{ marginLeft: hp('3%'), flexDirection: 'row', }}>
                            <TouchableOpacity>
                                <AntDesign name="left" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: hp('45%'), }}>
                                <AntDesign name="sharealt" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/image/grey_circle.png')} style={{ width: 120, height: 120, }} />
                            <Image source={require('../../../assets/image/circle_bg.png')} style={{ width: 100, height: 100, position: 'absolute' }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('-13%') }}>
                            <Text style={{ fontSize: hp('4%'), fontWeight: 'bold' }}>85%</Text>
                            <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>GRADE A</Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/image/star_bg.png')} style={{ width: 40, height: 40, marginLeft: hp('19%') }} />
                            <Image source={require('../../../assets/image/ic_star.png')} style={{ width: 30, height: 30, position: 'absolute', marginLeft: hp('19.5%'), }} />
                        </View>
                    </View>
                    <View style={styles.cardview}>
                        <ScrollView>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                                <Text style={{ fontSize: hp('2%'), color: '#313131', fontWeight: 'bold' }}>You are Excellent, </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('4%'), color: '#313131', fontWeight: 'bold' }}>Akshay Syal !! </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={styles.innercardview1}>
                                    <View style={{ marginLeft: hp('0%'), }}>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>English</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Hindi</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Science</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Math</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Social Study</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Drawing</Text>
                                        <Text style={{ fontSize: hp('3%'), margin: hp('1%') }}>Computer</Text>
                                    </View>
                                </View>
                                <View style={styles.innercardview2}>
                                    <View style={{ backgroundColor: '#E6EFFF', }}>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>100</Text>
                                    </View>
                                </View>
                                <View style={styles.innercardview3}>
                                    <View style={{ backgroundColor: '#6AC259', borderTopRightRadius: hp('2%'), borderBottomRightRadius: hp('2%'), }}>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>74-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>87-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>74-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>87-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>89-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>78-B</Text>
                                        <Text style={{ fontSize: hp('3%'), textAlign: 'center', margin: hp('1%') }}>96-A</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                                <TouchableOpacity style={styles.pdfBtn} onPress={() => { }} >
                                    <Text style={styles.pdfText}>DOWNLOAD PDF </Text>
                                    <FontAwesome name="file-pdf-o" size={24} color="#FFFFFF" style={{ marginLeft: hp('2%') }} />
                                </TouchableOpacity>
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
        marginTop: hp('-5.5%'),

    },
    innercardview1: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('2%'),
        borderBottomLeftRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('50%'),
        marginTop: hp('2%'),
        //  height: hp('10%')
    },
    innercardview2: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        // borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('20%'),
        marginTop: hp('2%'),
        // height: hp('10%')
    },
    innercardview3: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: hp('2%'),
        borderBottomRightRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('20%'),
        marginTop: hp('2%'),
        //  height: hp('10%')
    },
    pdfBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    pdfText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})