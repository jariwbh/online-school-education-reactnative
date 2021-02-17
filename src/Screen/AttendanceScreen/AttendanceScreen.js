import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import DateTimePicker from '@react-native-community/datetimepicker';
import * as STYLES from './Styles';

export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {/* <DateTimePicker
                        // value={date}
                        // isVisible={this.state.isDatePickerVisible}
                        // mode="date"
                        // onConfirm={this.handleConfirmDate}
                        // onCancel={this.hideDatePicker}
                        /> */}
                </View>
            </SafeAreaView>
        )
    }
}


