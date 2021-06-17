import React, { Component } from 'react'
import {
    Text, View, SafeAreaView, ToastAndroid, RefreshControl, FlatList, ScrollView,
    TouchableOpacity, Button, StyleSheet, Modal, TextInput, Dimensions, Platform
} from 'react-native'
import { assignmentListService, submitAssignmentListService, uploadAssignmentService } from '../../Services/AssignmentService/AssignmentService'
import { AUTHUSER, LOGINSCREEN, VIEWASSIGNMENTSCREEN } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import MyPermissionController from '../../Helpers/appPermission';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import DocumentPicker from 'react-native-document-picker';
import axiosConfig from "../../Helpers/axiosConfig";
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import RNFetchBlob from 'rn-fetch-blob';
import * as STYLES from './Styles';
import moment from 'moment'
const { width } = Dimensions.get("window");

export default class AssignmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentInfo: null,
            studentId: null,
            assignmentList: [],
            loader: true,
            refreshing: false,
            isModalVisible: false,
            assignmentRemarks: null,
            singleFile: null,
            fileURL: null,
            contextId: null,
            spinner: false
        };
        this.submitAssignmentList = [];
        this.onPressDownloadFile = this.onPressDownloadFile.bind(this);
        this.onPressUploadFile = this.onPressUploadFile.bind(this);
    }

    //get assignment list api
    async getAssignmentList() {
        const { studentId } = this.state;
        await assignmentListService().then(response => {
            let newAssignment = []
            if (response.data && response.data.length != 0) {
                response.data.forEach(element => {
                    element.viewResult = false;
                    if (element.memberids && element.memberids.length != 0) {
                        var check = element.memberids.indexOf(studentId);
                        if (check != -1) {
                            this.submitAssignmentList.forEach(ele => {
                                if (ele.objectid && ele.objectid._id == element._id && ele.userid._id == studentId) {
                                    element.viewResult = true;
                                    element.viewResultID = ele._id;
                                }
                            });
                            newAssignment.push(element);
                        }
                    } else {  // All Student of Particular Membership
                        this.submitAssignmentList.forEach(ele => {
                            if (ele.objectid && ele.objectid._id == element._id && ele.userid._id == studentId) {
                                element.viewResult = true;
                                element.viewResultID = ele._id;
                            }
                        });
                        newAssignment.push(element);
                    }
                });
            }
            this.setState({ assignmentList: newAssignment });
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    async getSubmitAssignmentList(studentId) {
        await submitAssignmentListService(studentId).then(response => {
            this.submitAssignmentList = response.data;
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
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
            await this.setState({ studentInfo: userData, studentId: userData._id });
            await this.getSubmitAssignmentList(userData._id);
            await this.getAssignmentList();
        }
    }

    componentDidMount() {
        this.getStudentData();
        this.checkPermission();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = async () => {
        const { studentId } = this.state;
        this.setState({ refreshing: true });
        await this.getAssignmentList();
        await this.getSubmitAssignmentList(studentId);
        await this.wait(3000).then(() => this.setState({ refreshing: false }));
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

    // Opening Document Picker to select one file
    selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                // DocumentPicker.types.allFiles
                type: [DocumentPicker.types.allFiles],
            });
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            if (res.size <= 30000) {
                this.setState({ spinner: true });
                this.onPressUploadFile(res);
                this.setState({ singleFile: res });
            } else {
                alert('The Maximum size for the upload is 10 MB');
            }
            // Setting the state to show single file attributes
        } catch (err) {
            console.log(`err`, err);
            // Handling any exception (If any)
            this.setState({ spinner: true });
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                this.setState({ spinner: true });
                alert('Attachment Canceled');
            }
        }
    };

    //submitted button click to upload file
    onPressUploadFile = async (singleFile) => {
        if (singleFile != null) {
            await RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/dlopjt9le/upload', { 'Content-Type': 'multipart/form-data' },
                [{ name: 'file', filename: singleFile.name, type: singleFile.type, data: RNFetchBlob.wrap(singleFile.uri) },
                { name: 'upload_preset', data: 'gs95u3um' }])
                .then(response => response.json())
                .then(data => {
                    this.wait(3000).then(() => { this.setState({ spinner: false }) });
                    if (data && data.url) {
                        if (Platform.OS === 'ios') {
                            alert("Uploading File Success");
                        } else {
                            ToastAndroid.show("Uploading File Success", ToastAndroid.LONG);
                        }
                        this.setState({ fileURL: data.url });
                    }
                }).catch(error => {
                    console.log(`error`, error);
                    alert("Uploading Failed!");
                })
        } else {
            alert('Please Select File');
        }
    }

    //model popup submit button to submit assignment
    async onSubmitAssignment() {
        const { studentInfo, contextId, assignmentRemarks, fileURL, studentId } = this.state;
        let body = {
            status: "done",
            dispositionid: "5def2f78686b1901582ff6c7", //dispositions api id
            formdispositionid: "5def3054686b1901582ff6cf",
            formid: "5a3366a50861a9670928e5c9", //static
            contextid: contextId, //membertask api id 
            property: {
                remark: assignmentRemarks,
                attachment: [fileURL],
                submitteddate: moment().format('YYYY-MM-DD'),
                followupdate: moment().format('YYYY-MM-DD')
            },
            userid: studentId,
            onUser: "Member",
            objectid: contextId, //membertask api id
            onObject: "Membertask",
            onModel: "Formdata",
        }

        if (!fileURL) {
            alert('Please Select File');
            return;
        }

        if (!assignmentRemarks) {
            alert('Please Enter Remarks');
            return;
        }

        try {
            if (studentInfo) {
                await axiosConfig(studentId);
                //Upload Assignment Service
                await uploadAssignmentService(body).then(response => {
                    if (response.data != null && response.data != 'undefind' && response.status == 200) {
                        if (Platform.OS === 'ios') {
                            alert("Assignment Sumitted");
                        } else {
                            ToastAndroid.show("Assignment Sumitted", ToastAndroid.LONG);
                        }
                        let token = studentInfo.addedby;
                        axiosConfig(token);
                        this.toggleModalVisibility();
                        return;
                    }
                })
            }
        }
        catch (error) {
            this.props.navigation.replace(LOGINSCREEN);
            if (Platform.OS === 'ios') {
                alert("User Invalid!");
            } else {
                ToastAndroid.show("User Invalid!", ToastAndroid.LONG)
            }
        };
    }

    //cancel button click to reset data
    resetButton() {
        this.setState({
            assignmentRemarks: null,
            singleFile: null,
            fileURL: null,
        })
    }

    //student input type comment set data
    assignmentRemarks(value) {
        this.setState({ assignmentRemarks: value });
    }

    //model pop hide function
    toggleModalVisibility() {
        this.setState({ isModalVisible: false });
        this.resetButton();
    }

    //model popup show funaction
    UploadFileController(item) {
        this.setState({ contextId: item._id })
        this.setState({ isModalVisible: true });
        this.resetButton();
    }

    //View Assignment function
    viewAssignment(item) {
        let assignmentView = this.submitAssignmentList.find(x => x._id === item.viewResultID);
        if (assignmentView) {
            this.props.navigation.replace(VIEWASSIGNMENTSCREEN, { assignmentView });
        } else {
            if (Platform.OS === 'ios') {
                alert("View Assignment Problem");
            } else {
                ToastAndroid.show("View Assignment Problem", ToastAndroid.LONG);
            }
        }
    }

    //render AssignmentList using flatlist
    renderAssignmentList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ marginTop: 5, flex: 1, width: 100, height: 25, backgroundColor: '#E6EFFF', marginLeft: 15, borderRadius: 5 }}>
                    <Text style={{ fontSize: 14, flex: 1, marginLeft: 15, color: '#6789CA', }}>{item.membershipid.membershipname}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 15, marginTop: 5, }}>
                    <HTML baseFontStyle={{ fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold', color: '#000000' }} html={`<html> ${item.description.length < 100 ? `${item.description}` : `${item.description.substring(0, 100)}...`} </html>`} />
                    <TouchableOpacity onPress={() => this.onPressDownloadFile(item)}>
                        <FontAwesome name="file-pdf-o" size={20} color="#6789CA" style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#000000' }}>Assign Date </Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.createdAt).format('MMM DD, YYYY')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#000000' }}>Last Submission Date </Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.duedate).format('MMM DD, YYYY')}</Text>
                </View>
                {item.viewResult == false &&
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity disabled={moment().format('YYYY-MM-DD') >= moment(item.duedate).format('YYYY-MM-DD') ? true : false}
                            style={moment().format('YYYY-MM-DD') >= moment(item.duedate).format('YYYY-MM-DD') ? STYLES.styles.submitButtonDisable : STYLES.styles.submitButton}
                            onPress={() => this.UploadFileController(item)}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF', marginTop: 5 }}>TO BE SUBMITTED</Text>
                        </TouchableOpacity>
                    </View>
                }
                {item.viewResult == true &&
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={STYLES.styles.submitButton}
                            onPress={() => this.viewAssignment(item)}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF', marginTop: 5 }}>VIEW ASSIGNMENT</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )

    render() {
        const { assignmentList, loader, refreshing, singleFile, } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(assignmentList == null) || (assignmentList && assignmentList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 100 }}>No Assignment Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 15 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={assignmentList}
                                    renderItem={this.renderAssignmentList}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: 25 }}></View>
                            </ScrollView>
                            {/** This button is responsible to open the modal */}
                            <Modal animationType="fade"
                                transparent visible={this.state.isModalVisible ? true : false}
                                presentationStyle="overFullScreen"
                                onDismiss={() => this.toggleModalVisibility()}>
                                <View style={styles.viewWrapper}>
                                    <View style={styles.modalView}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 14, marginTop: 5, color: '#000000' }}>Submit Assignment</Text>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></View>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity disabled={singleFile == null ? false : true}
                                                style={singleFile == null ? STYLES.styles.selectFilebtn : STYLES.styles.selectFilebtnDisable}
                                                onPress={() => { this.selectFile() }}>
                                                <Text style={{ fontSize: 14, color: '#FFFFFF', marginTop: 5 }}>Select Document</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 30 }}>
                                            <Text style={{ fontSize: 14, marginBottom: 5, color: '#000000' }}>Remarks :</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <TextInput
                                                value={this.state.remarks} style={styles.textInput}
                                                onChangeText={(value) => this.assignmentRemarks(value)} />
                                        </View>
                                        {/** This button is responsible to close the modal */}
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Button color="#2855AE" title="SUBMIT" style onPress={() => this.onSubmitAssignment()} />
                                            <Button color="#2855AE" title="CANCEL" onPress={() => this.toggleModalVisibility()} />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <Spinner
                                visible={this.state.spinner}
                                textStyle={{ color: '#2855AE' }}
                            />
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
    }
});
