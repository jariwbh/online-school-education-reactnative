import React, { Component } from 'react'
import {
    Text, View, SafeAreaView, ToastAndroid, RefreshControl, FlatList, ScrollView,
    TouchableOpacity, Button, StyleSheet, Modal, TextInput, Dimensions
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { assignmentListService } from '../../Services/AssignmentService/AssignmentService'
import MyPermissionController from '../../Helpers/appPermission';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLES from './Styles';
import moment from 'moment'
// Import Document Picker
import DocumentPicker from 'react-native-document-picker';
const { width } = Dimensions.get("window");

export default class AssignmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignmentList: [],
            loader: true,
            refreshing: false,
            newComment: null,
            isModalVisible: false,
            Description: null,
            singleFile: null
        };
        this.onPressDownloadFile = this.onPressDownloadFile.bind(this);
        this.onPressUploadFile = this.onPressUploadFile.bind(this);
        //this.selectFile = this.selectFile.bind(this);
    }

    getAssignmentList() {
        assignmentListService().then(response => {
            this.setState({ assignmentList: response.data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    componentDidMount() {
        this.checkPermission();
        this.getAssignmentList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.getAssignmentList();
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //check permission 
    checkPermission() {
        setTimeout(
            () =>
                MyPermissionController.checkAndRequestStoragePermission()
                    .then((granted) => console.log('>Storage Permission Granted'))
                    .catch((err) => console.log(err)),
            500,
        );
    }

    //pdf image icon click to download file 
    onPressDownloadFile(item) {
        const REMOTE_IMAGE_PATH = `${item.attachmenturl}`;
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
                    `/${item.title}_` +
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
                ToastAndroid.show("File Downloaded Successfully", ToastAndroid.LONG);
            });
    }

    // Getting the extention of the file
    getExtention = (filename) => {
        // To get the file extension
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };

    selectFile = async () => {
        // Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            //let selectFile = JSON.stringify(res);
            console.log('selectFile.size', res.size);
            // if (res.size <= 10000) {
            console.log('selectFile', res.uri);
            this.onPressUploadFile(res.uri);
            //this.setState({ singleFile: res.uri });
            //}
            // Setting the state to show single file attributes
        } catch (err) {
            console.log('err', err)
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
            } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    //submitted button click to upload file
    onPressUploadFile = (singleFile) => {
        console.log('file', singleFile)
        if (singleFile != null) {
            const data = new FormData()
            data.append('file', singleFile)
            data.append('upload_preset', 'gs95u3um')
            data.append("cloud_name", "dlopjt9le")
            fetch("https://api.cloudinary.com/v1_1/dlopjt9le/upload", {
                method: "post", body: data, headers: { 'Content-Type': 'multipart/form-data; ' },
            }).then(res => res.json()).
                then(data => {
                    console.log('data', data);
                    this.toggleModalVisibility();
                }).catch(err => {
                    alert("An Error Occured While Uploading")
                })
        } else {
            alert('Please Select File first');
        }
    }

    onPressSubmit() {
        this.selectFile();
        //this.toggleModalVisibility()
    }

    toggleModalVisibility() {
        this.setState({ isModalVisible: false })
    }

    UploadFileController() {
        this.setState({ isModalVisible: true })
    }

    //render AssignmentList using flatlist
    renderAssignmentList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ marginTop: hp('1%'), flex: 1, width: wp('35%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%') }}>
                    <Text style={{ fontSize: hp('2%'), flex: 1, marginLeft: hp('2%'), color: '#6789CA', }}>{item.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%'), }}>
                    <HTML baseFontStyle={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }} html={`<html> ${item.description.length < 100 ? `${item.description}` : `${item.description.substring(0, 100)}...`} </html>`} />
                    <TouchableOpacity onPress={() => this.onPressDownloadFile(item)}>
                        <FontAwesome name="file-pdf-o" size={20} color="#6789CA" style={{ marginRight: hp('2%') }} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date </Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.startdate).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission Date </Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.duedate).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ width: wp('60%'), backgroundColor: '#2855AE', alignItems: 'center', marginTop: hp('5%'), height: hp('6%'), marginBottom: hp('3%'), borderRadius: hp('2%') }}
                        onPress={() => this.UploadFileController()}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>TO BE SUBMITTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    render() {
        const { assignmentList, loader, refreshing } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(assignmentList == null) || (assignmentList && assignmentList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Assignment Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: hp('2%') }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={assignmentList}
                                    renderItem={this.renderAssignmentList}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: hp('5%') }}></View>
                            </ScrollView>
                            {/** This button is responsible to open the modal */}
                            <Modal animationType="fade"
                                transparent visible={this.state.isModalVisible ? true : false}
                                presentationStyle="overFullScreen"
                                onDismiss={() => this.toggleModalVisibility()}>
                                <View style={styles.viewWrapper}>
                                    <View style={styles.modalView}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginTop: hp('1%') }}>Submit Assignment</Text>
                                        </View>
                                        <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity
                                                style={{ width: wp('60%'), backgroundColor: '#2855AE', alignItems: 'center', marginTop: hp('5%'), height: hp('6%'), marginBottom: hp('3%'), borderRadius: hp('2%') }}
                                                onPress={() => { this.selectFile() }}>
                                                <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>Select Document</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: wp('7%') }}>
                                            <Text style={{ fontSize: hp('2.5%'), marginBottom: hp('1%') }}>Remarks :</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput
                                                value={this.state.Description} style={styles.textInput}
                                                onChangeText={(value) => { }} />
                                        </View>
                                        {/** This button is responsible to close the modal */}
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Button color="#2855AE" title="SUBMIT" style onPress={() => this.onPressSubmit()} />
                                            <Button color="#2855AE" title="CANCEL" onPress={() => this.toggleModalVisibility()} />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}

// These are user defined styles 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        position: "absolute",
        top: "30%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 350,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        height: 100,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
});
