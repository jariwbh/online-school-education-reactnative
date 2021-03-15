import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export default class SupportScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={{ marginTop: hp('7%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/image/blob.png')} style={{ height: 120, width: 120, }}
                        />
                        <Image source={require('../../assets/image/support_.png')} style={{ height: 120, width: 120, position: 'absolute' }}
                        />
                    </View>
                    <View style={{ marginTop: hp('4%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#313131', fontSize: hp('4%') }}>Get Support</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>For any support request regards your</Text>
                        <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>  orders or deliveries please feel free to</Text>
                        <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>  speak with us at below.</Text>
                    </View>
                    <View style={{ marginTop: hp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#313131', fontSize: hp('3%') }}>Call us - +91 77788-22666</Text>
                        <Text style={{ color: '#313131', fontSize: hp('3%') }}>Mail us - info@krtya.com</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

