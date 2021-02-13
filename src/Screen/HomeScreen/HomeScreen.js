import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: hp('7%') }}>
                        <View style={{}}>
                            <Text style={{ fontSize: hp('4%'), color: '#FFFFFF', fontWeight: 'bold' }}>Hi Akshay </Text>
                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', fontWeight: 'bold', marginTop: hp('1%') }}>Class XI-B  |  Roll no: 04 </Text>
                            <TouchableOpacity style={{ width: wp('35%'), height: hp('4.5%'), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: hp('1%'), borderRadius: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#6184C7', fontWeight: 'bold', }}>2020-2021 </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Myprofile') }}>
                            <Image source={require('../../assets/image/profile1.png')} style={{ height: 90, width: 90, borderRadius: hp('10%') }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.inputView}>
                            <View style={{ marginTop: hp('-6%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.cardview} onPress={() => { this.props.navigation.navigate('AttendanceScreen') }}>
                                    <Image source={require('../../assets/image/ic_attendance.png')} style={{ height: 80, width: 80, borderRadius: hp('10%'), marginTop: hp('1%') }}
                                    />
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>80.39 %</Text>
                                    </View>
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%') }}>Attendance</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardview} onPress={() => { this.props.navigation.navigate('FeesScreen') }}>
                                    <Image source={require('../../assets/image/ic_fees_due.png')} style={{ height: 80, width: 80, borderRadius: hp('10%'), marginTop: hp('1%') }}
                                    />
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}> ₹6400 </Text>
                                    </View>
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%') }}> Fees Due </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.cardView} onPress={() => this.props.navigation.navigate('Playquiz')}>
                                    <Image source={require('../../assets/image/ic_quiz.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Play Quiz</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('AssignmentScreen') }}>
                                    <Image source={require('../../assets/image/ic_assignment.png')} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Assignment </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <View style={styles.cardView}>
                                    <Image source={require('../../assets/image/ic_holiday.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>School Holiday</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('TimeTableScreen') }}>
                                    <Image source={require('../../assets/image/ic_calendra.png')} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Time Table </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('ResultScreen') }}>
                                    <Image source={require('../../assets/image/ic_results.png')} style={{ height: 50, width: 45, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Result</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('DateSheetScreen') }}>
                                    <Image source={require('../../assets/image/ic_date_sheet.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Date Sheet </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('AskDoubtsScreen') }}>
                                    <Image source={require('../../assets/image/ic_doubts.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Ask Doubts</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('SchoolGalleryScreen') }}>
                                    <Image source={require('../../assets/image/ic_gallery.png')} style={{ height: 45, width: 42, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>School Gallery</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('LeaveApplicationScreen') }}>
                                    <Image source={require('../../assets/image/ic_leave.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Leave Application</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('ChangePasswordScreen') }}>
                                    <Image source={require('../../assets/image/ic_password.png')} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Change Password</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('EventsScreen') }}>
                                    <Image source={require('../../assets/image/ic_event.png')} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Events</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cardView} onPress={() => { this.props.navigation.navigate('SupportScreen') }}>
                                    <Image source={require('../../assets/image/ic_logout.png')} style={{ height: 50, width: 45, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Logout</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;


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
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('1%'),
        marginTop: hp('10%'),
    },
    cardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('35%'),
        height: hp('25%'),
        alignItems: 'center'
    },
    cardView: {
        flexDirection: 'column',
        backgroundColor: "#F5F6FC",
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('35%'),
        height: hp('25%'),

        //  alignItems: 'center'
    }
})