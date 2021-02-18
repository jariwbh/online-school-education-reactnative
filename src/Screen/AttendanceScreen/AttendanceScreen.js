import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AttendenceService } from '../../Services/AttendenceService/AttendenceService';
import { HodidayService } from '../../Services/HodidayService/HodidayService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import { Calendar } from 'react-native-calendars';
import * as STYLES from './Styles';
import moment from 'moment';

export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.studentDetails = null;
        this.startDate = moment().clone().startOf('month').format('YYYY-MM-DD');
        this.endDate = moment().clone().endOf('month').format('YYYY-MM-DD');
        this.today = moment().format('YYYY-MM-DD');
        this.endDate = this.today;
        this.currentMonth = moment().clone().startOf('month').format('M');
        this.state = {
            postData: null,
            loader: true,
            attendenceList: [],
            holidaysList: [],
            refreshing: false,
            renderList: {}
        };
        this.onRefresh = this.onRefresh.bind(this);
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN);
            }, 3000);
        } else {
            this.studentDetails = JSON.parse(getUser);
            let data = {
                id: this.studentDetails._id,
                datRange: { "$gte": this.startDate, "$lte": this.today }
            }
            await this.getHolidayService();
            await this.getAttendenceService(data);
            await this.setState({ postData: data });
            await this.renderCalendar()
        }
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = async () => {
        const { postData } = this.state;
        this.setState({ refreshing: true });
        await this.getHolidayService();
        await this.getAttendenceService(postData);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    async getHolidayService() {
        //console.log("1 getHolidayService called");
        return HodidayService().then(response => {

            this.setState({ holidaysList: response.data });
            //console.log("1.....getHolidayService data", this.state.holidaysList)
            return;
        })
    }

    async getAttendenceService(data) {
        //console.log("2..... getAttendenceService called");
        return AttendenceService(data).then(response => {
            this.setState({ attendenceList: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
            //console.log("2..... getAttendenceService data..", this.state.attendenceList);
            return;
        })
    }

    componentDidMount() {
        this.getdata();
    }

    async renderCalendar() {

        var dateArray = await this.getDateRange(this.startDate, this.endDate)
        let combineArray = [];

        this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {
                combineArray.push(moment(element.property.date).format('YYYY-MM-DD'))
            }
        });

        this.state.attendenceList.forEach(element => {
            if (element && element.checkin) combineArray.push(moment(element.checkin).format('YYYY-MM-DD'))
        });

        var absent = dateArray.filter(function (item) {
            return !combineArray.includes(item)
        })

        this.state.renderList = {};

        absent.forEach(element => {
            if (element) {
                this.dateConversion(moment(element).format('YYYY-MM-DD'), '#ffcccb')
            }
        });

        this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {
                this.dateConversion(moment(element.property.date).format('YYYY-MM-DD'), '#D4E2FF')
            }
        });

        this.state.attendenceList.forEach(element => {
            if (element && element.checkin) {
                this.dateConversion(moment(element.checkin).format('YYYY-MM-DD'), '#90EE90')
            }
        });

        return;
    }

    dateConversion(date, color) {
        if (!this.state.renderList[date]) {
            this.state.renderList[date] = {};
        }
        this.state.renderList[date] = {
            customStyles: {
                container: { backgroundColor: color },
                text: { color: '#000000' }
            }
        };
    }

    async getDateRange(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={{ marginTop: hp('5%') }} />
                    <Calendar
                        markedDates={this.state.renderList}
                        markingType={'custom'}
                    />
                </View>
            </SafeAreaView>
        )
    }
}


