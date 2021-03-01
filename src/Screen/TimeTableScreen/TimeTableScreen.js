import React, { Component } from 'react'
import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { timeTableService } from '../../Services/TimeTableService/TimeTableService'
import AsyncStorage from '@react-native-community/async-storage'
import Loader from '../../Components/Loader/Loader'
import * as STYLES from './Styles';
import moment from 'moment';
import { AUTHUSER, LOGINSCREEN } from "../../Action/Type";

export default class TimeTableScreen extends Component {
    constructor(props) {
        super(props);
        this.studentDetails = null;
        this.state = {
            timeTable: [],
            loader: true,
            refreshing: false,
            postData: null,
            listTab: [],
            status: `${moment().format('ddd')}`
        };
        this.dayClick = this.dayClick.bind(this);
    }

    //get Current week Days
    getCurrentweekDays() {
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

        for (var i = 0; i <= 6; i++) {
            var last = first + i;
            var date = new Date(curr.setDate(last)).toUTCString();
            if (moment(date).format('ddd').toLowerCase() !== "sun") {
                let obj = { day: moment(date).format('ddd'), date: date, _id: i }
                this.state.listTab.push(obj);
            }
        }
    }

    //get login user infomation and api
    getUserData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN);
            }, 3000);
        } else {
            this.studentDetails = JSON.parse(getUser);
            let data = {
                classid: this.studentDetails.classid,
                date: moment().format('YYYY-MM-DD')
            }
            await this.getTimeTable(data);
            await this.setState({ postData: data });
        }
    }

    //Get Time Table Api
    getTimeTable(data) {
        timeTableService(data).then(response => {
            this.setState({ timeTable: response.data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    //click days and get data
    dayClick(item) {
        this.setState({ loader: true, status: `${moment(item.date).format('ddd')}` })
        let data = {
            classid: this.studentDetails.classid,
            date: moment(item.date).format('YYYY-MM-DD')
        }
        this.getTimeTable(data);
    }

    componentDidMount() {
        this.getUserData();
        this.getCurrentweekDays();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { postData } = this.state;
        this.setState({ refreshing: true });
        this.getTimeTable(postData);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render TimeTable Using flatlist
    renderTimeTable = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', textTransform: 'capitalize' }}>{item.lessonid.subjectid.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>{(item.starttime) + '-' + (item.endtime)}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777', textTransform: 'capitalize' }}>{item.trainerid[0].property.fullname}</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold', textTransform: 'capitalize' }}>{item.lessonid.title}</Text>
                </View>
            </View>
        </View>
    )
    render() {
        const { timeTable, loader, refreshing, status } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {/* <View style={STYLES.styles.listTab}>
                        {
                            this.state.listTab.map(e => (
                                <TouchableOpacity
                                    style={[STYLES.styles.btnTab, status == e.day && STYLES.styles.btnTabActive]} onPress={() => this.dayClick(e)}
                                >
                                    <Text style={[STYLES.styles.textTab, status == e.day ? STYLES.styles.textTabActive : STYLES.styles.textTabInActive]}>{e.day}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View> */}
                    {(timeTable == null) || (timeTable && timeTable.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Time Table Available</Text>
                            : <Loader />
                        )
                        :
                        <View>
                            <View style={STYLES.styles.listTab}>
                                {
                                    this.state.listTab.map(e => (
                                        <TouchableOpacity
                                            style={[STYLES.styles.btnTab, status == e.day && STYLES.styles.btnTabActive]} onPress={() => this.dayClick(e)}
                                        >
                                            <Text style={[STYLES.styles.textTab, status == e.day ? STYLES.styles.textTabActive : STYLES.styles.textTabInActive]}>{e.day}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={timeTable}
                                    renderItem={this.renderTimeTable}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: hp('5%') }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}


