import React, { Component } from 'react'
import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';
import { timeTableService } from '../../Services/TimeTableService/TimeTableService'
import Loader from '../../Components/Loader/Loader'

export default class TimeTableScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeTable: [],
            loader: true,
            refreshing: false,
            status: 'MON',
            listTab: [
                {
                    _id: '1',
                    status: 'MON'
                },
                {
                    _id: '2',
                    status: 'TUE'
                },
                {
                    _id: '3',
                    status: 'WED'
                },
                {
                    _id: '4',
                    status: 'THU'
                },
                {
                    _id: '5',
                    status: 'FRI'
                },
                {
                    _id: '6',
                    status: 'SAT'
                }
            ]
        };
    }

    gettimeTable() {
        timeTableService().then(response => {
            this.setState({ timeTable: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });

    }

    componentDidMount() {
        this.gettimeTable();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.gettimeTable()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    rendertimeTable = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), fontWeight: 'bold', color: '#313131' }}>{item.lessonid.subjectid.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>{(item.starttime) + '-' + (item.endtime)}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#777777' }}>{item.trainerid[0].property.fullname}</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%'), fontWeight: 'bold' }}>{item.lessonid.title}</Text>
                </View>
            </View>
        </View>
    )
    render() {
        const { timeTable, loader, refreshing } = this.state
        this.wait(3000).then(() => this.setState({ refreshing: false }));
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={STYLES.styles.listTab}>
                        {
                            this.state.listTab.map(e => (
                                <TouchableOpacity
                                    style={[STYLES.styles.btnTab]} onPress={() => { }}
                                >
                                    <Text style={STYLES.styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    {(timeTable == null) || (timeTable && timeTable.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Time Table Available</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <View style={{}}>
                                <FlatList
                                    data={timeTable}
                                    renderItem={this.rendertimeTable}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </View>
                        </ScrollView>
                    }
                </View>
            </SafeAreaView >
        )
    }
}


