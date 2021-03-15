import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ToastAndroid, BackHandler } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AttendenceCalculateService } from '../../Services/AttendenceService/AttendenceService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AUTHUSER, EVENTSCREEN, LOGINSCREEN, PLAYQUIZLISTSCREEN } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment';

const ProfileURL = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StudentData: null,
            studentProfile: null,
            loader: true,
            attendencePercent: null
        };
        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.getStudentData();
    }

    //get student Attendence Calculate Service
    async getAttendenceCalculateService(id) {
        return AttendenceCalculateService(id).then(response => {
            var StudentDayIn = response.data.length
            var calAttendences = ((StudentDayIn / 365) * 100).toFixed(2)
            this.setState({ attendencePercent: calAttendences });
            return;
        })
    }

    //get local storage fetch infomation 
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER)
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);
        } else {
            var userData;
            userData = JSON.parse(getUser)
            this.getAttendenceCalculateService(userData._id)
            this.wait(3000).then(() => this.setState({
                loader: false,
                StudentData: userData,
                studentProfile: userData.profilepic
            }));
        }
    }

    //LogOut Button click to call 
    onPressLogout() {
        AsyncStorage.removeItem(AUTHUSER);
        ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT);
        this.props.navigation.replace(LOGINSCREEN);
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //Mobile back press to call function
    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    render() {
        const { StudentData, studentProfile, loader, attendencePercent } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                {loader == false ?
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: hp('4%') }}>
                            <View >
                                <Text style={{ fontSize: hp('4%'), color: '#FFFFFF', fontWeight: 'bold', textTransform: 'capitalize' }}>{StudentData.property.fullname} </Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', fontWeight: 'bold', marginTop: hp('1%') }}>
                                    {StudentData.membershipid.membershipname}  |  Roll no: {StudentData.property.streetnumber} </Text>
                                <TouchableOpacity style={{ width: wp('35%'), height: hp('4.5%'), alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: hp('1%'), borderRadius: hp('2%') }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#6184C7', fontWeight: 'bold', }}>{moment(StudentData.membershipstart).format('YYYY') + '-' + moment(StudentData.membershipend).format('YYYY')} </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Myprofile', { StudentData }) }}>
                                <Image source={{ uri: studentProfile && studentProfile !== null ? studentProfile : ProfileURL }} style={{ height: 90, width: 90, borderRadius: hp('10%') }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={STYLES.styles.inputView}>
                            <View style={{ marginTop: hp('-6%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardview} onPress={() => { this.props.navigation.navigate('AttendanceScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_attendance_mzthkn.png' }} style={{ height: 80, width: 80, borderRadius: hp('10%'), marginTop: hp('1%') }}
                                    />
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>{attendencePercent} %</Text>
                                    </View>
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%') }}>Attendance</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardview} onPress={() => { this.props.navigation.navigate('FeesScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451582/school%20Images/ic_fees_due_ksr4t7.png' }} style={{ height: 80, width: 80, borderRadius: hp('10%'), marginTop: hp('1%') }}
                                    />
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}> ₹{StudentData.paymentterms[0].amount} </Text>
                                    </View>
                                    <View style={{ marginTop: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2.5%') }}> {StudentData.paymentterms[0].period == 'Once' ? 'Year' : 'Fees Due'} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => this.props.navigation.navigate(PLAYQUIZLISTSCREEN)}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451582/school%20Images/ic_quiz_kb6cld.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Play Quiz</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('AssignmentScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_assignment_izzt7a.png' }} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Assignment </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('HolidayScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_holiday_u8m9dr.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>School Holiday</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('TimeTableScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_calendra_nqdpkm.png' }} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Time Table </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('QuizResultScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_results_yiabkk.png' }} style={{ height: 50, width: 45, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Result</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('DateSheetScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_date_sheet_gg77cp.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Date Sheet </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('SchoolGalleryScreen') }}>
                                    <Image source={require('../../assets/image/ic_gallery.png')} style={{ height: 45, width: 42, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>School Gallery</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('ChangePasswordScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451586/school%20Images/ic_password_dudhjb.png' }} style={{ height: 60, width: 40, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Change Password</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('LeaveApplicationScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_gallery_jjdlhu.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Leave Application</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('AskDoubtsScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_doubts_lkdtha.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Ask Doubts</Text>
                                    </View>
                                </TouchableOpacity>
                            </View> */}
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('SupportScreen') }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_doubts_lkdtha.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Support</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate('MeetingScreen') }}>
                                    <MaterialCommunityIcons name="video-box" size={60} color="#3c62aa" style={{ marginLeft: hp('2%'), marginTop: hp('2%') }} />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Meeting</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row', marginBottom: hp('3%') }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(EVENTSCREEN) }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_event_mo9h2g.png' }} style={{ height: 50, width: 50, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Events</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => this.onPressLogout()}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_logout_imrsqf.png' }} style={{ height: 50, width: 45, marginTop: hp('2%'), marginLeft: hp('2.5%') }}
                                    />
                                    <View style={{ marginTop: hp('3%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.5%') }}>Logout</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    : <Loader />}
            </SafeAreaView>
        );
    }
}

export default HomeScreen;

