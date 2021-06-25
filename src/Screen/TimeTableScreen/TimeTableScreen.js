import React, { Component } from 'react'
import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
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
                couresid: this.studentDetails.membershipid._id,
                date: moment().format('YYYY-MM-DD')
            }
            await this.getTimeTable(data);
            await this.setState({ postData: data });
        }
    }

    //Get Time Table Api
    getTimeTable(data) {
        timeTableService(data).then(response => {
            this.setState({ timeTable: response.data, loader: false });
        });
    }

    //click days and get data
    dayClick(item) {
        this.setState({ loader: true, status: `${moment(item.date).format('ddd')}` })
        let data = {
            couresid: this.studentDetails.membershipid._id,
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
    renderTimeTable = ({ item, index }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, fontWeight: 'bold', color: '#313131', textTransform: 'capitalize' }}>{item.property.subjectid}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>{moment(item.timeslot.starttime).format('LT') + ' - ' + moment(item.timeslot.endtime).format('LT')}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ marginLeft: 15, marginRight: 15, flex: 1, height: 1, backgroundColor: '#EEEEEE', }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777', textTransform: 'capitalize' }}>{item.staffid.property.fullname}</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, fontWeight: 'bold', textTransform: 'capitalize', color: '#000000' }}>{'Period ' + (index + 1)}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        const { timeTable, loader, refreshing, status } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
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
                    {(timeTable == null) || (timeTable && timeTable.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Time Table Available</Text>
                            : <Loader />
                        )
                        :
                        <View>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={timeTable}
                                    renderItem={this.renderTimeTable}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: 50 }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}


