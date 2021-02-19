import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { HodidayService } from '../../Services/HodidayService/HodidayService';
import Loader from '../../Components/Loader/Loader';
import { Calendar } from 'react-native-calendars';
import * as STYLES from './Styles';
import moment from 'moment';

export default class HolidayScreen extends Component {
    constructor(props) {
        super(props);
        this.startDate = moment().clone().startOf('month').format('YYYY-MM-DD');
        this.endDate = moment().clone().endOf('month').format('YYYY-MM-DD');
        this.currentMonth = moment().clone().startOf('month').format('M');
        this.state = {
            holidaysList: [],
            renderList: null,
            loader: true,
        };
        this.onChangeMonth = this.onChangeMonth.bind(this);
    }

    //get Holiday Api
    getHolidayService() {
        HodidayService().then(response => {

            this.setState({ holidaysList: response.data });
            this.wait(1000).then(() => this.setState({ loader: false }));
            this.renderCalendarHolidays();
        })
    }

    componentDidMount() {
        this.getHolidayService();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
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

    //render Calendar Holidays using Calendar
    async renderCalendarHolidays() {

        var dateArray = await this.getDateRange(this.startDate, this.endDate);

        let combineArray = [];
        let holidayDate = {};

        this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {

                var date = moment(element.property.date).format('YYYY-MM-DD');
                combineArray.push(date)
                if (!holidayDate[date]) {
                    holidayDate[date] = {};
                }
                holidayDate[date] = {
                    customStyles: {
                        container: { backgroundColor: '#D4E2FF' },
                        text: { color: '#000000' }
                    }
                };
            }
        });

        var holidays = dateArray.filter(function (item) {
            return combineArray.includes(item)
        })
        console.log("holidayDate", holidays);
        this.setState({ renderList: holidayDate });
    }

    async onChangeMonth(month) {
        this.startDate = moment().month(month - 1, 'months').startOf('month').format('YYYY-MM-DD');
        this.endDate = moment().month(month - 1, 'months').endOf('month').format('YYYY-MM-DD');
        this.renderCalendarHolidays();
    }

    //render Holidays List using FlatList
    renderHolidaysList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131', textTransform: 'capitalize' }}>{item.property.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%'), marginBottom: hp('2%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>{moment(item.property.date).format('Do MMMM')}</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), color: '#313131' }}>{moment(item.property.date).format('dddd')}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(this.state.holidaysList == null) || (this.state.holidaysList && this.state.holidaysList.length == 0) ?
                        (this.state.loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Holiday Available</Text>
                            : <Loader />
                        )
                        :
                        <>
                            <View style={{ marginTop: hp('5%') }} />
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Calendar
                                    markedDates={this.state.renderList}
                                    onMonthChange={(month) => this.onChangeMonth(month.month)}
                                    markingType={'custom'}
                                    hideExtraDays={true}
                                />
                                <View>
                                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#313131', marginTop: hp('2%'), marginBottom: hp('1%') }}>List of Holiday</Text>
                                </View>
                                <FlatList
                                    data={this.state.holidaysList}
                                    renderItem={this.renderHolidaysList}
                                    keyExtractor={item => item._id}
                                />
                            </ScrollView></>
                    }
                </View>
            </SafeAreaView>
        )
    }
}


