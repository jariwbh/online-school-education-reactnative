import React, { Component } from 'react'
import { Text, View, SafeAreaView, Linking, RefreshControl, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';
import Loader from '../../Components/Loader/Loader'
import { assignmentListService } from '../../Services/AssignmentService/AssignmentService'
import HTML from 'react-native-render-html';
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AssignmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignmentList: [],
            loader: true,
            refreshing: false
        };
    }

    getassignmentList() {
        assignmentListService().then(response => {
            console.log('response', response.data);
            this.setState({ assignmentList: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });

    }

    componentDidMount() {
        this.getassignmentList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getassignmentList()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    renderassignmentList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ marginTop: hp('1%'), flex: 1, width: wp('35%'), height: hp('4%'), backgroundColor: '#E6EFFF', marginLeft: hp('2%'), borderRadius: hp('1%') }}>
                    <Text style={{ fontSize: hp('2%'), flex: 1, marginLeft: hp('2%'), color: '#6789CA', }}>{item.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%'), }}>
                    <HTML baseFontStyle={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }} html={`<html> ${item.description.length < 100 ? `${item.description}` : `${item.description.substring(0, 100)}...`} </html>`} />
                    <TouchableOpacity onPress={() => Linking.openURL()}>
                        <FontAwesome name="file-pdf-o" size={20} color="#6789CA" style={{ marginRight: hp('2%') }} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Assign Date </Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.startdate).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: hp('0%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Last Submission Date </Text>
                    <Text style={{ fontSize: hp('2.5%'), marginRight: hp('2%') }}>{moment(item.duedate).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: wp('60%'), backgroundColor: '#2855AE', alignItems: 'center', marginTop: hp('5%'), height: hp('6%'), marginLeft: hp('0%'), marginBottom: hp('3%'), borderRadius: hp('2%') }} onPress={() => { }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF', marginTop: hp('1%') }}>TO BE SUBMITTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    render() {
        const { assignmentList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(assignmentList == null) || (assignmentList && assignmentList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Assignment Available</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <View>
                                <FlatList
                                    data={assignmentList}
                                    renderItem={this.renderassignmentList}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </View>
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
