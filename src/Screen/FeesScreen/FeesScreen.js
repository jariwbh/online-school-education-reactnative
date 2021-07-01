import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, FlatList, Dimensions, Image } from 'react-native';
import { getPaymentService, getPaymentSchedulesService, BillPaymentService } from '../../Services/PaymentService/PaymentService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, FEESSCREEN, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment';
const WIDTH = Dimensions.get('window').width;
import getCurrency from '../../Services/getCurrency/getCurrency';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RazorpayCheckout from 'react-native-razorpay';
import Spinner from 'react-native-loading-spinner-overlay';
const noProfile = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';

export class FeesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: null,
            paymentList: [],
            paymentScheduleList: [],
            loader: true,
            refreshing: false,
            currencySymbol: null,
            studentDetails: null,
            loader: false
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
            const response = getCurrency(userData.branchid.currency)
            this.setState({ currencySymbol: response });
            await this.getPaymentSchedulesService(userData._id);
            await this.getPaymentService(userData._id);
            this.setState({ studentId: userData._id, studentDetails: userData });
        }
    }

    //razorpay function
    razorPay = (options, res) => {
        this.setState({ loader: false });
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            this.genratebill(data, res);
        }).catch((error) => {
            // handle failure
            this.setState({ loader: false });
            this.props.navigation.replace(FEESSCREEN);
        });
    }

    //generate bill function
    genratebill = async (data, res) => {
        this.setState({ loader: true });
        try {
            let billpayment = {
                memberid: this.state.studentId,
                item: res._id,
                paidamount: res.amount,
                mode: "Online",
                paymentdate: moment().format(),
                property: data
            }
            const billPaymentResponse = await BillPaymentService(billpayment);
            if (billPaymentResponse.data != null && billPaymentResponse.data != 'undefind' && billPaymentResponse.status == 200) {
                this.onRefresh();
                this.setState({ loader: false });
                this.props.navigation.replace(FEESSCREEN);
            }
        } catch (error) {
            this.setState({ loader: false });
        }
    }

    //open Payment Screen
    openPaymentScreen = async (item) => {
        const { studentDetails } = this.state;
        this.setState({ loader: true });
        try {
            var options = {
                description: 'Pay Fees',
                image: studentDetails && studentDetails.profilepic ? studentDetails.profilepic : noProfile,
                currency: 'INR',
                key: 'rzp_test_xeCP8q3tddi8nS', // Your api key
                amount: item.amount,
                name: studentDetails.fullname,
                prefill: {
                    email: studentDetails.property.primaryemail,
                    contact: studentDetails.property.mobile,
                    name: studentDetails.fullname
                },
                theme: { color: '#5D81C6' }
            }
            this.razorPay(options, item)
        } catch (error) {
            this.setState({ loader: false });
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
            <View style={STYLES.styles.innercardview2}>
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
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{moment(item.scheduledate).format('DD MMM YYYY')}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Total Pending Amount</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{this.state.currencySymbol + item.amount}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <TouchableOpacity style={{
                    width: WIDTH - 30, backgroundColor: '#FF1A1A', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                    height: 38, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                }}
                    onPress={() => this.openPaymentScreen(item)}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', textAlign: 'center', paddingRight: 5 }}>PAY NOW</Text>
                    <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    )

    //get bill Recipt function 
    getBillRecipt = () => {
        alert('Coming Soon!!');
    }

    //render Paid Payment List using flatlist
    renderPaidPaymentList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#555555' }}>Receipt No.</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>#{item.docnumber}</Text>
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
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#000000' }}>{this.state.currencySymbol + item.paidamount}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <TouchableOpacity style={{
                    width: WIDTH - 30, backgroundColor: '#2855AE', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                    height: 38, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                }}
                    onPress={() => this.getBillRecipt(item)}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', textAlign: 'center', paddingRight: 5 }}>DOWNLOAD NOW</Text>
                    <Image source={require('../../assets/image/downloadicon.png')} style={{ height: 15, width: 15 }} />
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        const { paymentList, paymentScheduleList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(((paymentScheduleList == null) || (paymentScheduleList && paymentScheduleList.length == 0)) && ((paymentList == null) || (paymentList && paymentList.length == 0)))
                        ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}> fees Details Not Available</Text>
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
                <Spinner
                    visible={this.state.loader}
                    textStyle={{ color: '#2855AE' }}
                />
            </SafeAreaView>
        )
    }
}

export default FeesScreen

