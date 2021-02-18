import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ScrollView } from 'react-native-gesture-handler';
import * as STYLES from './Styles';
import { ExamDatesheet } from '../../Services/DateSheetService/DateSheetService'
import Loader from '../../Components/Loader/Loader'
import moment from 'moment'

export default class DateSheetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examSchedule: [],
            loader: true,
            refreshing: false
        };
    }

    //get exam schedule api
    getexamSchedule() {
        ExamDatesheet().then(response => {
            this.setState({ examSchedule: response.data[0].examschedule })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    componentDidMount() {
        this.getexamSchedule();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.getexamSchedule();
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render exam schedule using flatlist
    renderexamSchedule = ({ item }) => (
        <View>
            <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row', marginLeft: hp('12%'), marginRight: hp('3%') }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
            </View>
            <View style={{ alignItems: 'center', marginTop: hp('2%'), marginLeft: hp('0%'), marginRight: hp('0%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: hp('2%'), }}>
                    <Text style={{ fontSize: hp('3%'), marginLeft: hp('2%'), color: '#3A3A3A', fontWeight: 'bold' }}>{moment(item.date).format('DD')}</Text>
                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131', }}>{moment(item.date).format('MMM')}</Text>
                </View>
                <View style={{ marginLeft: hp('0%') }}>
                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>{item.subjectid.title}</Text>
                    <Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>{moment(item.date).format('dddd')}</Text>
                </View>
                <View style={{ marginLeft: hp('0%'), marginRight: hp('2%'), flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#A5A5A5' }}>{moment(item.starttime).format('LT')}</Text>
                </View>
            </View>
        </View>
    )

    render() {
        const { examSchedule, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(examSchedule == null) || (examSchedule && examSchedule.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Exam Schedule Available</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={examSchedule}
                                renderItem={this.renderexamSchedule}
                                keyExtractor={item => `${item._id}`}
                            />
                        </ScrollView>
                    }
                    <View>
                        <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('4%') }} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
