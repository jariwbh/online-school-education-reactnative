import React, { Component } from 'react';
import { TouchableOpacity, Text, Pressable, BackHandler, SafeAreaView, View, Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';
import * as SCREENNAME from '../../Action/Type'
import moment from 'moment';
import { addAttendenceService } from '../../Services/AttendenceService/AttendenceService';
import Ionicons from 'react-native-vector-icons/Ionicons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = { torchon: RNCamera.Constants.FlashMode.off, branchID: null, StudentID: null };
    }

    componentWillMount() {
        this.getStudentData();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate(SCREENNAME.HOMESCREEN);
        return true;
    }

    //get local storage fetch infomation 
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(SCREENNAME.AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(SCREENNAME.LOGINSCREEN)
            }, 3000);
        } else {
            var userData;
            userData = JSON.parse(getUser);
            this.setState({ branchID: userData.branchid._id, StudentID: userData._id });
        }
    }

    onSuccess = (e) => {
        let barcode = e.data.replace(/\\/g, "");
        let DECODE = JSON.parse(barcode);
        const { branchID } = this.state;
        if (branchID == DECODE.branchid) {
            this.addAttendence(DECODE.branchid);
        } else {
            alert('OR-CODE Not Valid');
        }
    };

    addAttendence = async (barcode) => {
        try {
            let body = {
                checkin: moment().format(),
                checkout: moment().format(),
                membrozid: this.state.StudentID,
                onModel: 'Member'
            }
            console.log(`body`, body);
            const response = await addAttendenceService(body);
            console.log(`response`, response);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                this.props.navigation.navigate(SCREENNAME.HOMESCREEN);
                this.setState({ torchon: RNCamera.Constants.FlashMode.off });
            } else {
                this.setState({ torchon: RNCamera.Constants.FlashMode.off });
                alert('OR-CODE Not Valid');
            }
        } catch (error) {
            console.log(`error`, error);
            this.setState({ torchon: RNCamera.Constants.FlashMode.off });
            alert('OR-CODE Not Valid');
        }
    }

    onTouchFlashMode = (val) => {
        let tstate = this.state.torchon;
        if (tstate == RNCamera.Constants.FlashMode.off) {
            tstate = RNCamera.Constants.FlashMode.torch;
        } else {
            tstate = RNCamera.Constants.FlashMode.off;
        }
        this.setState({ torchon: tstate });
    }

    render() {
        const { torchon } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#5D81C6', height: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }} >
                    <TouchableOpacity style={{ marginLeft: 20, alignItems: 'flex-start', justifyContent: 'flex-start' }}
                        onPress={() => this.props.navigation.navigate(SCREENNAME.HOMESCREEN)} >
                        <Ionicons name="arrow-back" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: WIDTH / 2, justifyContent: 'flex-end', alignItems: 'flex-end' }}
                        onPress={() => this.onTouchFlashMode()}>
                        <Text style={{ margin: 10, marginRight: 0, fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>
                            {torchon == RNCamera.Constants.FlashMode.torch ? 'FLASH ON' : 'FLASH OFF'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <QRCodeScanner
                    showMarker={true}
                    onRead={this.onSuccess}
                    flashMode={torchon}
                    checkAndroid6Permissions={true}
                    topViewStyle={{ height: 0, flex: 0 }}
                    cameraStyle={{ height: HEIGHT }}
                />
            </SafeAreaView>
        );
    }
}

export default ScanScreen;