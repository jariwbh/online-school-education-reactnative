import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { AttendenceService } from '../../Services/AttendenceService/AttendenceService';
import { HodidayService } from '../../Services/HodidayService/HodidayService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader'
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
            absentList: [],
            renderList: {}
        };
        this.onChangeMonth = this.onChangeMonth.bind(this);
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
                id: this.studentDetails._id,
                datRange: { "$gte": this.startDate, "$lte": this.today }
            }
            await this.getHolidayService();
            await this.getAttendenceService(data);
            await this.setState({ postData: data });
            await this.renderCalendar(this.startDate, this.endDate)
        }
    }

    // wait function
    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //get holiday list api
    async getHolidayService() {
        return HodidayService().then(response => {
            this.setState({ holidaysList: response.data });
            return;
        })
    }

    //get Attendence list api
    async getAttendenceService(data) {
        return AttendenceService(data).then(response => {
            this.setState({ attendenceList: response.data });
            this.wait(1000).then(() => this.setState({ attendenceList: response.data, loader: false }));
            return;
        })
    }

    componentDidMount() {
        this.getUserData();
    }

    //calculate calender date and post data to calender compoment  
    async renderCalendar() {
        var dateArray = await this.getDateRange(this.startDate, this.endDate)
        let combineArray = [];

        await this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {
                combineArray.push(moment(element.property.date).format('YYYY-MM-DD'))
            }
        });

        await this.state.attendenceList.forEach(element => {
            if (element && element.checkin) combineArray.push(moment(element.checkin).format('YYYY-MM-DD'))
        });

        var checkMonthvalidation = moment(this.startDate).isBefore(this.today);
        if (checkMonthvalidation == true) {
            var absent = dateArray.filter(function (item) {
                return !combineArray.includes(item)
            })
            this.setState({ absentList: absent });
            this.state.renderList = {};
            await absent.forEach(element => {
                if (element) {
                    this.dateConversion(moment(element).format('YYYY-MM-DD'), '#ffcccb')
                }
            });
        } else {
            this.setState({ absentList: 0 });
        }

        await this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {
                this.dateConversion(moment(element.property.date).format('YYYY-MM-DD'), '#D4E2FF')
            }
        });

        await this.state.attendenceList.forEach(element => {
            if (element && element.checkin) {
                this.dateConversion(moment(element.checkin).format('YYYY-MM-DD'), '#90EE90')
            }
        });
        return;
    }

    //date convert to object of list 
    async dateConversion(date, color) {
        if (!this.state.renderList[date]) {
            this.state.renderList[date] = {};
        }
        this.state.renderList[date] = {
            customStyles: {
                container: { backgroundColor: this.getDayColor(date, color) },
                text: { color: '#000000' }
            }
        };
    }

    //get color with Sunday days Only
    getDayColor(date, color) {
        var dt = moment(date, "YYYY-MM-DD").format('dddd');
        if (dt == "Sunday") return "#F0E68C"
        return color;
    }

    //get current month and fetch to start and end date 
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

    //change month to call funation
    async onChangeMonth(month) {
        console.log("month", month)

        this.startDate = moment().month(month - 1, 'months').startOf('month').format('YYYY-MM-DD');

        if (this.currentMonth == month) {
            this.endDate = this.today;
        } else {
            this.endDate = moment().month(month - 1, 'months').endOf('month').format('YYYY-MM-DD');
        }

        let data = {
            id: this.studentDetails._id,
            datRange: { "$gte": this.startDate, "$lte": this.endDate }
        }
        await this.getAttendenceService(data);
        await this.getHolidayService();
        await this.renderCalendar();
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {this.state.loader == false ?
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginTop: hp('5%') }} />
                            <Calendar
                                markedDates={this.state.renderList}
                                markingType={'custom'}
                                onMonthChange={(month) => this.onChangeMonth(month.month)}
                                hideExtraDays={true}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                                <View style={STYLES.styles.cardViewAbsent}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), marginBottom: hp('2%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Absent</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#313131' }}>{this.state.absentList.length > 0 ? this.state.absentList.length : 0}</Text>
                                    </View>
                                </View>
                                <View style={STYLES.styles.cardViewAttendDays}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), marginBottom: hp('2%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>Present</Text>
                                        <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#000000' }}>{this.state.attendenceList.length > 0 ? this.state.attendenceList.length : 0}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        : <Loader />
                    }
                </View>
            </SafeAreaView>
        )
    }
}


