import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as STYLES from './Styles';

export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'ATTENDANCE',
            listTab: [
                {
                    _id: '1',
                    status: 'ATTENDANCE'
                },
                {
                    _id: '2',
                    status: 'HOLIDAY'
                },

            ]
        };
    }
    // showDatePicker = () => {
    //     this.setState({ isDatePickerVisible: true });
    // };

    // hideDatePicker = () => {
    //     this.setState({ isDatePickerVisible: false });
    // };
    // handleConfirmDate = (date) => {
    //     this.setState({ serviceDate: moment(date).format('YYYY-MM-DD') });
    //     this.hideDatePicker();
    // };

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <TouchableOpacity>
                            <AntDesign name="left" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                        <View style={STYLES.styles.listTab}>
                            {
                                this.state.listTab.map(e => (
                                    <TouchableOpacity
                                        style={[STYLES.styles.btnTab]} onPress={() => this.setstateFilter(e.status)}
                                    >
                                        <Text style={STYLES.styles.textTab}>{e.status}</Text>
                                    </TouchableOpacity>
                                ))
                            }

                        </View>
                    </View>
                    <View style={STYLES.styles.cardview}>
                        {/* <DateTimePicker
                        // value={date}
                        // isVisible={this.state.isDatePickerVisible}
                        // mode="date"
                        // onConfirm={this.handleConfirmDate}
                        // onCancel={this.hideDatePicker}
                        /> */}
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}


