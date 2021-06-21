import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ToastAndroid, BackHandler, StatusBar, Platform } from 'react-native';
import { AttendenceCalculateService } from '../../Services/AttendenceService/AttendenceService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AUTHUSER } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment';
import * as SCREENNAME from '../../Action/Type'
import { getStudentService } from '../../Services/StudentService/StudentService';
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

    //add local storage Records
    authenticateUser = (student) => (
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(student))
    )

    //get student Attendence Calculate Service
    async getStudent(id) {
        return getStudentService(id).then(response => {
            this.authenticateUser(response.data);
        })
    }

    //get local storage fetch infomation 
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER)
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(SCREENNAME.LOGINSCREEN)
            }, 3000);
        } else {
            var userData;
            userData = JSON.parse(getUser);
            this.getAttendenceCalculateService(userData._id);
            this.getStudent(userData._id);
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
        if (Platform.OS === 'android') {
            ToastAndroid.show("Log Out Success!", ToastAndroid.LONG);
        } else {
            alert("Log Out Success!");
        }
        this.props.navigation.replace(SCREENNAME.LOGINSCREEN);
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
                <StatusBar barStyle="light-content" backgroundColor="#345FB4" />
                {loader == false ?
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 22, color: '#FFFFFF', fontWeight: 'bold', textTransform: 'capitalize', flex: 1 }}>{StudentData.fullname} </Text>
                                <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', marginTop: 5 }}>
                                    {StudentData.membershipid.membershipname}  |  Roll no: {StudentData.property.roll_number} </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 100, height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: 5, borderRadius: 100 }}>
                                        <Text style={{ fontSize: 14, color: '#6184C7', fontWeight: 'bold', }}>{moment(StudentData.membershipstart).format('YYYY') + '-' + moment(StudentData.membershipend).format('YYYY')} </Text>
                                    </View>
                                    <MaterialCommunityIcons name="barcode-scan" size={25} color="#FFFFFF" style={{ marginTop: 5, marginLeft: 20 }} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate(SCREENNAME.MYPROFILE) }}>
                                <Image source={{ uri: studentProfile && studentProfile !== null ? studentProfile : ProfileURL }} style={{ height: 90, width: 90, borderRadius: 100 }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={STYLES.styles.inputView}>
                            <View style={{ marginTop: -40, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardview} onPress={() => { this.props.navigation.navigate(SCREENNAME.ATTENDANCESCREEN) }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_attendance_mzthkn.png' }}
                                        style={{ height: 80, width: 80, borderRadius: 10, marginTop: 5 }}
                                    />
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>{attendencePercent} %</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#000000' }}>Attendance</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardview} onPress={() => { this.props.navigation.navigate(SCREENNAME.FEESSCREEN) }}>
                                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451582/school%20Images/ic_fees_due_ksr4t7.png' }}
                                        style={{ height: 80, width: 80, borderRadius: 10, marginTop: 5 }}
                                    />
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}> ₹{StudentData.paymentterms[0].amount} </Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#000000' }}> {StudentData.paymentterms[0].period == 'Once' ? 'Year' : 'Fees Due'} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => this.props.navigation.navigate(SCREENNAME.PLAYQUIZLISTSCREEN)}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451582/school%20Images/ic_quiz_kb6cld.png' }}
                                            style={{ height: 50, width: 50 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Play Quiz</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.ASSIGNMENTSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_assignment_izzt7a.png' }}
                                            style={{ height: 60, width: 40 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Assignment </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.HOLIDAYSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_holiday_u8m9dr.png' }}
                                            style={{ height: 50, width: 80 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>School Holiday</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.TIMETABLESCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451580/school%20Images/ic_calendra_nqdpkm.png' }}
                                            style={{ height: 60, width: 54 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Time Table </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.QUIZRESULTSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_results_yiabkk.png' }}
                                            style={{ height: 50, width: 42 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Result</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.DATESHEETSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_date_sheet_gg77cp.png' }}
                                            style={{ height: 50, width: 50 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Date Sheet </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.SCHOOLGALLERYSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={require('../../assets/image/ic_gallery.png')}
                                            style={{ height: 50, width: 50 }} />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>School Gallery</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.CHANGEPASSWORDSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451586/school%20Images/ic_password_dudhjb.png' }}
                                            style={{ height: 60, width: 40 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Change Password</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.SUPPORTSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_doubts_lkdtha.png' }}
                                            style={{ height: 50, width: 50 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Support</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.MEETINGSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <MaterialCommunityIcons name="video-box" size={60} color="#3c62aa" />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Meeting</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => { this.props.navigation.navigate(SCREENNAME.EVENTSCREEN) }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_event_mo9h2g.png' }}
                                            style={{ height: 50, width: 50 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Events</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={STYLES.styles.cardView} onPress={() => this.onPressLogout()}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                                        <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451583/school%20Images/ic_logout_imrsqf.png' }}
                                            style={{ height: 50, width: 45 }}
                                        />
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={{ fontSize: 16, color: '#000000' }}>Logout</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }} />
                        </View>
                    </ScrollView>
                    : <View style={STYLES.styles.loaderView}><Loader /></View>
                }
            </SafeAreaView>
        );
    }
}

export default HomeScreen;

