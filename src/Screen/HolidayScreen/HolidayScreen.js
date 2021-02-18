import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { Calendar } from 'react-native-calendars';
import * as STYLES from './Styles';
import { HodidayService } from '../../Services/HodidayService/HodidayService';
import moment from 'moment';

export default class HolidayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holidaysList: null,
            renderList: null
        };
    }

    getHolidayService() {
        HodidayService().then(response => {
            this.setState({ holidaysList: response.data });
            this.renderHolidays();
        })
    }

    componentDidMount() {
        this.getHolidayService();
    }

    renderHolidays() {
        let datedata = {}

        //console.log("this.state.holidaysList", this.state.holidaysList);

        this.state.holidaysList.forEach(element => {


            if (element && element.property && element.property.date) {

                var date = moment(element.property.date).format('YYYY-MM-DD');
                if (!datedata[date]) {
                    datedata[date] = {};
                }

                datedata[date] = {
                    customStyles: {
                        container: { backgroundColor: '#ffa500' },
                        text: { color: 'white' }
                    }
                };
            }
        });
        console.log('datedata', datedata)
        this.setState({ renderList: datedata });
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


