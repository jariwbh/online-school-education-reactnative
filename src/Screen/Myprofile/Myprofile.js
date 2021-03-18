import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Image, ToastAndroid } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { UpdateStudentService } from '../../Services/StudentService/StudentService'
import { AUTHUSER, HOMESCREEN, LOGINSCREEN, VIEWFULLPICTURESCREEN } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../Helpers/appPermission';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePicker from 'react-native-image-picker';
import Loader from '../../Components/Loader/Loader'
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLES from './Styles';
import moment from 'moment';
const ProfileURL = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';

export default class Myprofile extends Component {
    constructor(props) {
        super(props);
        this.sInfo = null;
        this.state = {
            studentInfo: null,
            studentProfile: null,
            loader: true,
            newProfilePath: null,
            spinner: false,
            studentId: null
        };
    }

    //TIMER FUNCTION 
    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    authenticateUser = (user) => {
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //get student information api
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userData = JSON.parse(getUser);
            await this.setState({
                studentInfo: userData,
                studentId: userData._id,
                studentProfile: userData.profilepic
            });
        }
    }

    //check permission 
    checkPermission() {
        setTimeout(
            () => {
                MyPermissionController.checkAndRequestStoragePermission()
                    .then((granted) => console.log('>Storage Permission Granted'))
                    .catch((err) => console.log(err))
            },
            500
        );
    }

    componentDidMount() {
        this.getStudentData();
        this.checkPermission();
        this.wait(1000).then(() => this.setState({ loader: false }));
    }

    //IMAGE CLICK TO GET CALL FUNCTION
    handlePicker = () => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({ spinner: true });
                this.onPressUploadFile(response);

            }
        });
    };

    //UPDATE PROFILE PICTURE API CALL
    async UpdateStudentService() {
        let profileObj = {
            _id: this.state.studentId,
            profilepic: this.state.newProfilePath
        }
        try {
            await UpdateStudentService(profileObj).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    this.state.studentInfo.profilepic = this.state.newProfilePath;
                    this.authenticateUser(this.state.studentInfo);
                    ToastAndroid.show("Your Profile Update!", ToastAndroid.CENTER);
                    this.props.navigation.replace(HOMESCREEN);
                }
            })
        }
        catch (error) {
            this.setState({ spinner: false })
            ToastAndroid.show("Your Profile Not Update!", ToastAndroid.CENTER);
        }
    }

    //submitted button click to upload file
    onPressUploadFile = async (fileObj) => {
        if (fileObj != null) {
            await RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dlopjt9le/upload', { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: fileObj.fileName, type: fileObj.type, data: RNFetchBlob.wrap(fileObj.uri) },
                { name: 'upload_preset', data: 'gs95u3um' }])
                .then(response => response.json())
                .then(data => {
                    this.wait(1000).then(() => { this.setState({ spinner: false }) });
                    if (data && data.url) {
                        this.setState({ newProfilePath: data.url });
                        this.UpdateStudentService();
                    }
                }).catch(error => {
                    alert("Uploading Failed!");
                })
        } else {
            alert('Please Select File');
        }
    }

    //PROFILE PICTURE CLICK TO CALL FUNCTION
    onChangeProfilePic() {
        this.handlePicker();
    }

    onTouchViewProfile() {
        const { studentProfile } = this.state;
        let studentProfileImage
        if (studentProfile) {
            studentProfileImage = studentProfile;
            this.props.navigation.navigate(VIEWFULLPICTURESCREEN, { studentProfileImage });
        } else {
            studentProfileImage = ProfileURL;
            this.props.navigation.navigate(VIEWFULLPICTURESCREEN, { studentProfileImage });
        }
    }

    render() {
        const { studentInfo, studentProfile, loader } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(studentInfo == null) || (studentInfo && studentInfo.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>Opps Server Error!</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('2%') }}>
                                        <View style={{ marginLeft: hp('1%'), flexDirection: 'row' }}>
                                            <View>
                                                <TouchableOpacity onPress={() => this.onTouchViewProfile()}>
                                                    <Image source={{ uri: studentProfile && studentProfile !== null ? studentProfile : ProfileURL }} style={{ height: hp('12%'), width: wp('20%'), borderRadius: hp('2%') }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => this.onChangeProfilePic()} style={{ marginLeft: hp('-2%'), marginTop: hp('10%'), position: 'absolute' }}>
                                                    <FontAwesome name="camera" size={20} color="#000000" />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginTop: hp('1.5%') }}>
                                                <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), fontWeight: 'bold', textTransform: 'capitalize' }}>{studentInfo.property.fullname}</Text>
                                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#777777', marginTop: hp('1%') }}>{studentInfo.membershipid.membershipname}  |  Roll no: {studentInfo.property.roll_number}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('4%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Admission Class</Text>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('12%') }}>Academic Year</Text>
                                </View>
                                <View pointerEvents="none" style={{ marginTop: hp('0%'), marginLeft: hp('0%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.membershipid.membershipname}
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <TextInput
                                        defaultValue={moment(studentInfo.membershipstart).format('YYYY') + '-' + moment(studentInfo.membershipend).format('YYYY')}
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                </View>
                            </View>
                            <View >
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('0%'), justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('3%') }}>Date of Addmission</Text>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('8%') }}>Date of Birth</Text>
                                </View>
                                <View pointerEvents="none" style={{ marginTop: hp('0%'), marginLeft: hp('2%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={moment(studentInfo.membershipstart).format('DD MMM YYYY')}
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput
                                        defaultValue={moment(studentInfo.property.dob).format('DD MMM YYYY')}
                                        style={STYLES.styles.TextInput}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-5%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Gender</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.gender}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mail ID</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.email}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Mobile Number</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.mobile_number}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>City</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.city}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>State</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.state}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: hp('-4%'), marginTop: hp('1%') }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: hp('5%') }}></View>
                            <Spinner
                                visible={this.state.spinner}
                                textStyle={{ color: '#2855AE' }}
                            />
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        );
    }
}


