import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { HodidayService } from '../../Services/HodidayService/HodidayService';
import Spinner from 'react-native-loading-spinner-overlay';
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
            currentMonthHolidays: [],
            spinner: false
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
        let holidayDate = {};
        this.state.holidaysList.forEach(element => {
            if (element && element.property && element.property.date) {

                var date = moment(element.property.date).format('YYYY-MM-DD');
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

        var holidays = this.state.holidaysList.filter(function (item) {
            return dateArray.includes(moment(item.property.date).format('YYYY-MM-DD'))
        })

        this.setState({ renderList: holidayDate, currentMonthHolidays: holidays, spinner: false });
    }

    //change month to call funation
    async onChangeMonth(month) {
        this.setState({ spinner: true });
        this.startDate = moment().month(month - 1, 'months').startOf('month').format('YYYY-MM-DD');
        this.endDate = moment().month(month - 1, 'months').endOf('month').format('YYYY-MM-DD');
        this.renderCalendarHolidays();
    }

    //render Holidays List using FlatList
    renderHolidaysList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#313131', textTransform: 'capitalize' }}>{item.property.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#313131' }}>{moment(item.property.date).format('Do MMMM')}</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#313131' }}>{moment(item.property.date).format('dddd')}</Text>
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
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Holiday Available</Text>
                            : <Loader />
                        )
                        :
                        <>
                            <View style={{ marginTop: 25 }} />
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Calendar
                                    markedDates={this.state.renderList}
                                    onMonthChange={(month) => this.onChangeMonth(month.month)}
                                    markingType={'custom'}
                                    hideExtraDays={true}
                                />
                                <View>
                                    <Text style={{ fontSize: 18, marginLeft: 20, color: '#313131', marginTop: 15, marginBottom: 5 }}>List of Holiday</Text>
                                </View>
                                {(this.state.currentMonthHolidays == null) || (this.state.currentMonthHolidays && this.state.currentMonthHolidays.length == 0) ?
                                    <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 25 }}>No Holidays Current Month</Text>
                                    :
                                    <FlatList
                                        data={this.state.currentMonthHolidays}
                                        renderItem={this.renderHolidaysList}
                                        keyExtractor={item => item._id}
                                    />
                                }
                                <View style={{ marginBottom: 20 }}></View>
                                <Spinner
                                    visible={this.state.spinner}
                                    textStyle={{ color: '#2855AE' }}
                                />
                            </ScrollView></>
                    }
                </View>
            </SafeAreaView>
        )
    }
}


