import React, { Component } from 'react'
import { Text, View, SafeAreaView, RefreshControl, ScrollView, Linking, FlatList, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { meetingService } from '../../Services/MeetingService/MeetingService'
import Loader from '../../Components/Loader/Loader'
import * as STYLES from './Styles';
import moment from 'moment'

export default class MeetingScreen extends Component {
    constructor(props) {
        super(props);
        this.today = moment().format('YYYY-MM-DD');
        this.state = {
            meetingList: [],
            loader: true,
            refreshing: false,
        };
    }

    //call Meeting API
    getMeeting() {
        meetingService().then(response => {
            this.setState({ meetingList: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    componentDidMount() {
        this.getMeeting();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getMeeting()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    renderMeeting = ({ item }) => (
        <View style={STYLES.styles.innercardview}>
            <View style={{ marginTop: hp('1%'), flex: 1, width: wp('35%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%') }}>
                <Text style={{ fontSize: hp('2%'), flex: 1, marginLeft: hp('2%'), color: '#6789CA', }}>{item.property.courseid}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%'), }}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), textTransform: 'capitalize', fontWeight: 'bold' }}>{item.property.title}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Today Date </Text>
                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.property.date).format('ll')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Start Time </Text>
                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.property.starttime).format('LT')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>End Time </Text>
                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.property.endtime).format('LT')}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={moment(item.property.date).format('YYYY-MM-DD') == this.today ? STYLES.styles.meetingbtn : STYLES.styles.meetingErrorbtn}
                    onPress={() => { Linking.openURL(item.property.url) }}
                    disabled={moment(item.property.date).format('YYYY-MM-DD') == this.today ? false : true}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%'), fontWeight: 'bold' }}>Join Meeting </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    render() {
        const { meetingList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(meetingList == null) || (meetingList && meetingList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Events & Programs Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: ('2%') }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <View>
                                    <FlatList
                                        data={meetingList}
                                        renderItem={this.renderMeeting}
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
