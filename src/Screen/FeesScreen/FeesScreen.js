import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export class FeesScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={STYLES.styles.cardview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={STYLES.styles.innercardview}>
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
                                <View style={STYLES.styles.innercardview}>
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
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
                                <View style={STYLES.styles.innercardview}>
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
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default FeesScreen

