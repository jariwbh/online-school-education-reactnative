import React, { Component } from 'react'
import { Text, View, SafeAreaView, RefreshControl, ScrollView, Linking, FlatList, TouchableOpacity } from 'react-native'
import * as STYLES from './Styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { meettingService } from '../../Services/MeettingService/MeettingService'
import moment from 'moment'
import Loader from '../../Components/Loader/Loader'


export default class MeettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetting: [],
            loader: true,
            refreshing: false,
            buttondisabled: false,
        };
    }

    getmeetting() {
        meettingService().then(response => {
            console.log('response', response.data);
            this.setState({ meetting: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });

    }

    componentDidMount() {
        this.getmeetting();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getmeetting()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    rendermeetting = ({ item }) => (
        <View>
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
                <TouchableOpacity style={{ width: wp('60%'), backgroundColor: '#2855AE', alignItems: 'center', marginTop: hp('5%'), height: hp('6%'), marginLeft: hp('0%'), marginBottom: hp('3%'), borderRadius: hp('2%') }}
                    onPress={() => { Linking.openURL(item.property.url) }}
                    disabled={this.state.buttondisabled == false ? true : false}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%'), fontWeight: 'bold' }}>Join Meeting </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    render() {
        const { meetting, loader, refreshing, } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={STYLES.styles.innercardview}>
                            {(meetting == null) || (meetting && meetting.length == 0) ?
                                (loader == false ?
                                    <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Events & Programs Available</Text>
                                    : <Loader />
                                )
                                :
                                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                    <View style={{}}>
                                        <FlatList
                                            data={meetting}
                                            renderItem={this.rendermeetting}
                                            keyExtractor={item => `${item._id}`}
                                        />
                                    </View>
                                </ScrollView>
                            }
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
