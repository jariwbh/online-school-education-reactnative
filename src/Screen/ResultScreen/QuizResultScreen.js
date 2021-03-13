import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export default class QuizResultScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={{ marginTop: hp('3%'), position: 'absolute' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('-13%') }}>
                        <Text style={{ fontSize: hp('4%'), fontWeight: 'bold' }}>85%</Text>
                        <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>GRADE A</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
