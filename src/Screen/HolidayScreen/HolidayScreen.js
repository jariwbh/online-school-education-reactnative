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
        this.state = {
            holidaysList: [],
            renderList: null,
            loader: true,
        };
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

    //render Calendar Holidays using Calendar
    renderCalendarHolidays() {
        let holidayDate = {}
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
        console.log("holidayDate", holidayDate);
        this.setState({ renderList: holidayDate });
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
                            <Calendar
                                markedDates={this.state.renderList}
                                markingType={'custom'}
                            />
                            <View>
                                <Text style={{ fontSize: hp('3%'), marginLeft: hp('3%'), color: '#313131', marginTop: hp('2%'), marginBottom: hp('1%') }}>List of Holiday</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
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


