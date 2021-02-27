import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, RefreshControl, FlatList } from 'react-native'
import { getPaymentService, getPaymentSchedulesService } from '../../Services/PaymentService/PaymentService';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';

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
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Receipt No.</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>#sadsd</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Month</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>October</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Payment Date</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>10 oct 20</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Total Pending Amount</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>$999</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>

                <TouchableOpacity style={{ width: wp('89.5%'), backgroundColor: '#2855AE', height: hp('5.5%'), borderBottomLeftRadius: hp('1.5%'), borderBottomRightRadius: hp('1.5%'), }}
                    onPress={() => { }}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', textAlign: 'center', marginTop: hp('1%') }}>PAY NOW</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

    render() {
        const { paymentScheduleList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(paymentScheduleList == null) || (paymentScheduleList && paymentScheduleList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('20%') }}>No Exam Schedule Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: hp('2%') }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={paymentScheduleList}
                                    renderItem={this.renderPaymentSchedule}
                                    keyExtractor={item => `${item._id}`}
                                />
                                <View style={{ marginBottom: hp('2%') }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}

export default FeesScreen

