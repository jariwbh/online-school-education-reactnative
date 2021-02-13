import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';

export class FeesScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Fees Due</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.innercardview}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Receipt No.</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>#98761</Text>
                                </View>
                                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Month</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>October</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Payment Date</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 oct 20</Text>
                                </View>
                                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Total Pending Amount</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>$999</Text>
                                </View>
                                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                </View>
                                <TouchableOpacity style={{ width: wp('89.5%'), backgroundColor: '#2855AE', height: hp('5.5%'), borderBottomLeftRadius: hp('1.5%'), borderBottomRightRadius: hp('1.5%'), }}
                                    onPress={() => { this.props.navigation.navigate('PayonlineScreen') }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('1%') }}>PAY NOW</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Receipt No.</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>#98431</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Month</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>September</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Payment Date</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 Sep 20</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Pay Mode</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>Cash on Counter</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Total Pending Amount</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>$999</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <TouchableOpacity style={{ width: wp('89.5%'), backgroundColor: '#2855AE', alignItems: 'center', height: hp('5.5%'), borderBottomLeftRadius: hp('1.5%'), borderBottomRightRadius: hp('1.5%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>DONWLOAD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default FeesScreen

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
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderColor: '#2855AE',
        borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        //height: hp('30%'),
        marginTop: hp('2%')
    },
})