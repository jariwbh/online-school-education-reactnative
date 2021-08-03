import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, Dimensions } from 'react-native'
import { ExamDatesheet } from '../../Services/DateSheetService/DateSheetService'
import AsyncStorage from '@react-native-community/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ScrollView } from 'react-native-gesture-handler';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader'
import * as STYLES from './Styles';
import moment from 'moment'
const WIDTH = Dimensions.get('window').width;

export default class DateSheetScreen extends Component {
    constructor(props) {
        super(props);
        this.examSchedule = this.props.route.params.item;
        this.state = {
            studentClassId: null,
            examSchedule: this.examSchedule.examschedule,
            loader: true,
            refreshing: false
        };
    }

    componentDidMount() {
        this.wait(1000).then(() => this.setState({ loader: false }));
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //render exam schedule using flatlist
    renderexamSchedule = ({ item }) => (
        <View style={{ alignItems: 'flex-start', marginTop: 15 }}>
            <View style={{ alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, marginLeft: 15, color: '#3A3A3A', fontWeight: 'bold' }}>{moment(item.date).format('DD')}</Text>
                        <Text style={{ fontSize: 14, marginLeft: 15, fontWeight: 'bold', color: '#313131', }}>{moment(item.date).format('MMM')}</Text>
                    </View>
                    <View style={{ marginLeft: 35 }}>
                        <Text style={{ fontSize: 16, color: '#000000' }}>{item.subjectid.property.title}</Text>
                        <Text style={{ fontSize: 14, color: '#A5A5A5' }}>{moment(item.date).format('dddd')}</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'flex-end', marginTop: -30 }}>
                <View style={{ marginRight: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                    <Text style={{ fontSize: 14, marginLeft: 5, color: '#A5A5A5' }}>{moment(item.starttime).format('LT')}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
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
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Exam Schedule Available</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <View style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                            </View>
                            <FlatList
                                data={examSchedule}
                                renderItem={this.renderexamSchedule}
                                keyExtractor={item => `${item._id}`}
                            />
                            <View style={{ marginBottom: 50 }}></View>
                        </ScrollView>
                    }
                    <View style={{ position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/image/1.png')}
                            style={{ width: WIDTH, height: 100 }} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
