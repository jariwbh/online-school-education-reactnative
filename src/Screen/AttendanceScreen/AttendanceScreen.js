import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { Calendar } from 'react-native-calendars';
import * as STYLES from './Styles';
import { HodidayService } from '../../Services/HodidayService/HodidayService';

export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getAttendenceService() {
        AttendenceService().then(response => {
            //console.log('response.data', response.data);
        })
    }

    componentDidMount() {
        this.getAttendenceService();
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={{ marginTop: hp('5%') }} />
                    <Calendar />
                </View>
            </SafeAreaView>
        )
    }
}


