import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Image, ToastAndroid, Platform } from 'react-native';
import { UpdateStudentProfilePicService } from '../../Services/StudentService/StudentService'
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
                this.setState({ spinner: false });
                console.log('User cancelled image picker');
            } else if (response.error) {
                this.setState({ spinner: false });
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                this.setState({ spinner: false });
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({ spinner: true });
                this.onPressUploadFile(response);

            }
        });
    };

    //UPDATE PROFILE PICTURE API CALL
    async UpdateStudentService() {
        const { studentId, newProfilePath, studentInfo } = this.state;
        let profileObj = studentInfo;
        profileObj.profilepic = newProfilePath;
        try {
            await UpdateStudentProfilePicService(studentId, profileObj).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    this.authenticateUser(profileObj);
                    if (Platform.OS === 'ios') {
                        alert("Your Profile Update");
                    } else {
                        ToastAndroid.show("Your Profile Update", ToastAndroid.LONG);
                    }
                    this.props.navigation.replace(HOMESCREEN);
                }
            })
        }
        catch (error) {
            this.setState({ spinner: false })
            if (Platform.OS === 'ios') {
                alert("Your Profile Not Update!");
            } else {
                ToastAndroid.show("Your Profile Not Update!", ToastAndroid.LONG);
            }
        }
    }

    //submitted button click to upload file
    onPressUploadFile = async (fileObj) => {
        if (fileObj != null) {
            const realPath = Platform.OS === 'ios' ? fileObj.uri.replace('file://', '') : fileObj.uri;
            await RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dlopjt9le/upload', { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: Platform.OS === 'ios' ? fileObj.fileSize : fileObj.fileName, type: fileObj.type, data: RNFetchBlob.wrap(decodeURIComponent(realPath)) },
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
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>Opps Server Error!</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={STYLES.styles.innercardview}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
                                        <View style={{ marginLeft: 5, flexDirection: 'row' }}>
                                            <View>
                                                <TouchableOpacity onPress={() => this.onTouchViewProfile()}>
                                                    <Image source={{ uri: studentProfile && studentProfile !== null ? studentProfile : ProfileURL }}
                                                        style={{ height: 80, width: 80, borderRadius: 10, borderColor: '#000000', borderWidth: 0.5 }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => this.onChangeProfilePic()} style={{ marginLeft: -10, marginTop: 65, position: 'absolute' }}>
                                                    <FontAwesome name="camera" size={20} color="#000000" />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginTop: 8, width: '65%' }}>
                                                <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: 'bold', textTransform: 'capitalize', color: '#000000' }}>{studentInfo.fullname}</Text>
                                                <Text style={{ fontSize: 14, marginLeft: 15, fontWeight: 'bold', color: '#777777', marginTop: 5 }}>{studentInfo.membershipid.membershipname}  |  Roll no: {studentInfo.property.roll_number}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Academic Year</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={moment(studentInfo.membershipstart).format('YYYY') + '-' + moment(studentInfo.membershipend).format('YYYY')}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Admission Class</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.membershipid.membershipname}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Date of Addmission</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={moment(studentInfo.membershipstart).format('DD MMM YYYY')}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Date of Birth</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={moment(studentInfo.property.dob).format('DD MMM YYYY')}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Gender</Text>
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
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Mail ID</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.primaryemail}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Mobile Number</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.mobile}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>Address</Text>
                                </View>
                                <View pointerEvents="none" style={{ flexDirection: 'row' }}>
                                    <TextInput
                                        defaultValue={studentInfo.property.address}
                                        style={STYLES.styles.TextInput1}
                                        placeholder="--"
                                        placeholderTextColor="#323643"
                                        underlineColorAndroid="#A5A5A5"
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: 15, marginLeft: 24 }}>
                                    <Text style={{ color: '#A5A5A5', fontSize: 14 }}>City</Text>
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
                                            <FontAwesome name="lock" size={24} color="#5D81C6" style={{ marginLeft: -25, marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginBottom: 30 }}></View>
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


