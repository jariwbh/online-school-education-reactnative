import React, { Component } from 'react'
import { Text, SafeAreaView, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native'
import { ExamDatesheet } from '../../Services/DateSheetService/DateSheetService'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AUTHUSER, DATESHEETSCREEN, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import * as STYLES from './Styles';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

export default class ExamScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentClassId: null,
            examSchedule: [],
            loader: true,
            refreshing: false
        };
    }

    //get local storage fetch infomation 
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userData = JSON.parse(getUser);
            this.getexamSchedule(userData.membershipid._id);
            this.wait(1000).then(() => this.setState({ studentClassId: userData.membershipid._id }));
        }
    }

    //get exam schedule api
    getexamSchedule(id) {
        ExamDatesheet(id).then(response => {
            this.setState({ examSchedule: response.data, loader: false })
        });
    }

    componentDidMount() {
        this.getStudentData();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { studentClassId } = this.state;
        this.setState({ refreshing: true });
        this.getexamSchedule(studentClassId);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render exam schedule using flatlist
    renderexamSchedule = ({ item }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(DATESHEETSCREEN, { item })}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 16, marginLeft: 15, color: '#313131', textAlign: 'center', textTransform: 'capitalize' }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 0, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
            </View>
        </View>
    )

    render() {
        const { examSchedule, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(examSchedule == null) || (examSchedule && examSchedule.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Exams List Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 0 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                                    </View>
                                    <FlatList
                                        data={examSchedule}
                                        renderItem={this.renderexamSchedule}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
