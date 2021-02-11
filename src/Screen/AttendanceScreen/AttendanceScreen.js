import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AntDesign, } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

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
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <TouchableOpacity>
                            <AntDesign name="left" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                        <View style={styles.listTab}>
                            {
                                this.state.listTab.map(e => (
                                    <TouchableOpacity
                                        style={[styles.btnTab]} onPress={() => this.setstateFilter(e.status)}
                                    >
                                        <Text style={styles.textTab}>{e.status}</Text>
                                    </TouchableOpacity>
                                ))
                            }

                        </View>
                    </View>
                    <View style={styles.cardview}>
                        {/* <DateTimePicker
                        // value={date}
                        // isVisible={this.state.isDatePickerVisible}
                        // mode="date"
                        // onConfirm={this.handleConfirmDate}
                        // onCancel={this.hideDatePicker}
                        /> */}
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
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: hp('2%'),
    },
    btnTab: {
        width: Dimensions.get('window').width / 3,
        flexDirection: 'row',
        borderColor: '#00C464',
        borderRadius: hp('2%'),
        borderWidth: 1,
        padding: 2,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#00C464'
    },
    textTabActive: {
        color: '#FFF'
    },
    textTabInActive: {
        color: '#00C464'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
})