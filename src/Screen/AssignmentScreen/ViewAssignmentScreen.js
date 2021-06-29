import React, { Component } from 'react'
import { Text, View, SafeAreaView, ToastAndroid, ScrollView, TouchableOpacity, Image } from 'react-native'
import Loader from '../../Components/Loader/Loader'
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLES from './Styles';
import moment from 'moment'

export default class ViewAssignmentScreen extends Component {
    constructor(props) {
        super(props);
        this.assignmentObject = this.props.route.params.assignmentView;
        console.log(`this.assignmentObject`, this.assignmentObject)
        this.state = {
            assignment: this.assignmentObject,
            loader: true
        };
        this.onPressDownloadFile = this.onPressDownloadFile.bind(this);
    }

    componentDidMount() {
        this.setState({ loader: false });
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
                if (Platform.OS === 'ios') {
                    alert("File Downloaded");
                } else {
                    ToastAndroid.show("File Downloaded", ToastAndroid.LONG);
                }
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
                        this.assignmentObject &&
                        <View style={{ marginTop: 15 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={STYLES.styles.AssignmentCardview}>
                                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                                            <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', textTransform: 'capitalize', marginLeft: 15 }}>{assignment.refid.templateid.title}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>Assign Date :</Text>
                                            <Text style={{ fontSize: 14, color: '#000000', marginRight: 15 }}>{moment(assignment.createdAt).format('LL')}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>Last Submission Date :</Text>
                                            <Text style={{ fontSize: 14, color: '#000000', marginRight: 15 }}>{moment(assignment.createdAt).format('LL')}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>My Submission </Text>
                                            <Text style={{ fontSize: 14, color: '#000000', marginRight: 15 }}>{moment(assignment.createdAt).format('LL')}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 14, color: '#000000', marginLeft: 15 }}>Remarks :</Text>
                                            <Text style={{ fontSize: 14, color: '#000000', marginRight: 15, flex: 0.5 }}>{assignment.property.remark}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <TouchableOpacity style={STYLES.styles.downloadButton}
                                                onPress={() => this.onPressDownloadFile(assignment.property.attachment)}>
                                                <Text style={{ fontSize: 14, color: '#FFFFFF', paddingRight: 5 }}>DONWLOAD ASSIGNMENT</Text>
                                                <Image source={require('../../assets/image/downloadicon.png')} style={{ height: 15, width: 15 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginBottom: 25 }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
