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
        this.state = {
            studentClassId: null,
            examSchedule: [],
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
            this.getexamSchedule(userData.membershipid._id);
            this.wait(1000).then(() => this.setState({ studentClassId: userData.membershipid._id }));
        }
    }

    //get exam schedule api
    getexamSchedule(id) {
        ExamDatesheet(id).then(response => {
            console.log(`response.data[0].examschedule`, response.data[0].examschedule);
            this.setState({ examSchedule: response.data[0] && response.data[0].examschedule })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });
    }

    componentDidMount() {
        this.getStudentData();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { studentClassId } = this.state;
        this.setState({ refreshing: true });
        this.getexamSchedule(studentClassId);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render exam schedule using flatlist
    renderexamSchedule = ({ item }) => (
        <View>
            <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 20, marginLeft: 15, color: '#3A3A3A', fontWeight: 'bold' }}>{moment(item.date).format('DD')}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 15, fontWeight: 'bold', color: '#313131', }}>{moment(item.date).format('MMM')}</Text>
                </View>
                <View >
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>{item.subjectid.title}</Text>
                    <Text style={{ fontSize: 16, color: '#A5A5A5' }}>{moment(item.date).format('dddd')}</Text>
                </View>
                <View style={{ marginRight: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Fontisto name="clock" size={20} color="#A5A5A5" />
                    <Text style={{ fontSize: 14, marginLeft: 5, color: '#A5A5A5' }}>{moment(item.starttime).format('LT')}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
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
