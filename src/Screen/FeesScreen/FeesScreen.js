import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, FlatList, Dimensions } from 'react-native';
import { getPaymentService, getPaymentSchedulesService } from '../../Services/PaymentService/PaymentService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment';
const WIDTH = Dimensions.get('window').width;

export class FeesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: null,
            paymentList: [],
            paymentScheduleList: [],
            loader: true,
            refreshing: false
        };
    }

    //get local storage fetch infomation 
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userData = JSON.parse(getUser);
            await this.getPaymentSchedulesService(userData._id);
            await this.getPaymentService(userData._id);
            this.wait(1000).then(() => this.setState({ studentId: userData._id }));
        }
    }

    componentDidMount() {
        this.getStudentData();
    }

    //get Payment api
    async getPaymentService(id) {
        await getPaymentService(id).then(response => {
            this.setState({ paymentList: response.data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    //get Payment Schedules api
    async getPaymentSchedulesService(id) {
        await getPaymentSchedulesService(id).then(response => {
            this.setState({ paymentScheduleList: response.data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { studentId } = this.state;
        this.setState({ refreshing: true });
        this.getPaymentSchedulesService(studentId);
        this.getPaymentService(studentId);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render Payment Schedule using flatlist
    renderPaymentSchedule = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Period</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{item.paymentterms.period}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Month</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.scheduledate).format('MMMM')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Payment Date</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#555555' }}>{moment(item.scheduledate).format('DD MMM YYYY')}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Total Pending Amount</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>₹{item.amount}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <TouchableOpacity style={{ width: WIDTH - 30, backgroundColor: '#2855AE', height: 38, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}
                    onPress={() => { }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}>PAY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    //render Paid Payment List using flatlist
    renderPaidPaymentList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Receipt No.</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>#{item.receiptnumberprefix + '-' + item.receiptnumber}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Month</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.paymentdate).format('MMMM')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Payment Date</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.paymentdate).format('DD MMM YYYY')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Pay Mode</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, textTransform: 'capitalize', color: '#000000' }}>{item.mode}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Total Paid Amount</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>₹{item.paidamount}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <TouchableOpacity style={{ width: WIDTH - 30, backgroundColor: '#2855AE', height: 38, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                    onPress={() => { }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}>DOWNLOAD NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        const { paymentList, paymentScheduleList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {((paymentScheduleList == null) || (paymentScheduleList && paymentScheduleList.length == 0) && (paymentList == null) || (paymentList && paymentList.length == 0))
                        ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}> Data Not Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 15 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={paymentScheduleList}
                                    renderItem={this.renderPaymentSchedule}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <FlatList
                                    data={paymentList}
                                    renderItem={this.renderPaidPaymentList}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: 20 }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}

export default FeesScreen

