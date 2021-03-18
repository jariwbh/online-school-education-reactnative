import React, { Component } from 'react'
import { Text, View, SafeAreaView, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import Loader from '../../Components/Loader/Loader'
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLES from './Styles';
import moment from 'moment'

export default class ViewAssignmentScreen extends Component {
    constructor(props) {
        super(props);
        this.assignmentObject = this.props.route.params.assignmentView;
        this.state = {
            assignment: this.assignmentObject,
            loader: true
        };
        this.onPressDownloadFile = this.onPressDownloadFile.bind(this);
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.wait(1000).then(() => this.setState({ loader: false }));
    }

    //Download file function
    onPressDownloadFile(assignment) {
        const REMOTE_IMAGE_PATH = `${assignment.objectid.attachmenturl[0]}`;
        // To add the time suffix in filename
        let date = new Date();
        // Image URL which we want to download
        let image_URL = REMOTE_IMAGE_PATH;
        // Getting the extention of the file
        let ext = this.getExtention(image_URL);
        ext = '.' + ext[0];
        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                // Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    `/${assignment.objectid.title}_` +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    ext,
                description: 'file',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                // Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                ToastAndroid.show("File Downloaded", ToastAndroid.LONG);
            });
    }

    // Getting the extention of the file
    getExtention = (filename) => {
        // To get the file extension
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };

    render() {
        const { assignment } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {this.state.loader == true ?
                        <Loader />
                        :
                        <View style={{ marginTop: hp('2%') }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={STYLES.styles.AssignmentCardview}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{assignment.objectid.title}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date :</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(assignment.objectid.createdAt).format('LL')}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission </Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Date :</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(assignment.objectid.duedate).format('LL')}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>My Submission </Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Date :</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(assignment.property.submitteddate).format('LL')}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Remarks :</Text>
                                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), flex: 0.5 }}>{assignment.property.remark}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={STYLES.styles.downloadButton}
                                                onPress={() => this.onPressDownloadFile(assignment)}>
                                                <Text style={{ fontSize: hp('2.3%'), color: '#FFFFFF', marginTop: hp('1%') }}>DONWLOAD ASSIGNMENT</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginBottom: hp('5%') }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
