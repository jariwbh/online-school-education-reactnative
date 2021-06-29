import React, { Component } from 'react'
import { Text, View, SafeAreaView, RefreshControl, ScrollView, Linking, FlatList, TouchableOpacity } from 'react-native'
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
            this.setState({ meetingList: response.data, loader: false });
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ marginTop: 10, flex: 1, width: 100, height: 25, backgroundColor: '#E6EFFF', marginLeft: 15, borderRadius: 5 }}>
                    <Text style={{ fontSize: 14, flex: 1, marginLeft: 15, color: '#6789CA' }}>{item.property.course.membershipname}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 15, marginTop: 5, }}>
                    <Text style={{ fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold', color: '#000000' }}>{item.property.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Today Date </Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.property.date).format('ll')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Start Time </Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.property.starttime).format('LT')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>End Time </Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.property.endtime).format('LT')}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={moment(item.property.date).format('YYYY-MM-DD') == this.today ? STYLES.styles.meetingbtn : STYLES.styles.meetingErrorbtn}
                        onPress={() => this.props.navigation.navigate('MeetingWebViewScreen', { data: item.property.url })}
                        disabled={moment(item.property.date).format('YYYY-MM-DD') == this.today ? false : true}>
                        <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Join Meeting </Text>
                    </TouchableOpacity>
                </View>
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
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Events & Programs Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
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
