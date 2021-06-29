import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList, RefreshControl } from 'react-native'
import { getAllPlayQuizService } from '../../Services/PlayQuizService/PlayQuizService';
import { AUTHUSER, LOGINSCREEN, PLAYQUIZSTARTSCREEN } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment'

export default class PlayQuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: null,
            playQuizList: [],
            loader: true,
            refreshing: false,
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
            let courseId = userData.membershipid._id;
            await this.getPlayQuizService(courseId);
            this.wait(1000).then(() => this.setState({ courseId: courseId }));
        }
    }

    //get Play Quiz api
    getPlayQuizService(id) {
        getAllPlayQuizService(id).then(response => {
            if (response.status == 200 && response.data != null) {
                this.setState({ playQuizList: response.data })
                this.wait(1000).then(() => this.setState({ loader: false }));
            }
        })
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
        const { courseId } = this.state;
        this.setState({ refreshing: true })
        this.getPlayQuizService(courseId);
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render Play Quiz using flatlist
    renderPlayQuizList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
                    <Text style={{ fontSize: 14, flex: 1, color: '#000000', textTransform: 'capitalize' }}>{item.title}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Exam Date</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{moment(item.property.startdatetime).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>End Date</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{moment(item.property.enddatetime).format('LL')}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Duration</Text>
                    <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{item.property.time + ' ' + 'Minutes'}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={STYLES.styles.viewButton}
                        onPress={() => { this.props.navigation.navigate(PLAYQUIZSTARTSCREEN, { item }) }}>
                        <Text style={{ fontSize: 14, color: '#FFFFFF' }}>VIEW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    render() {
        const { playQuizList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.inputView}>
                    {(playQuizList == null) || (playQuizList && playQuizList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>Play Quiz Not Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 25 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={playQuizList}
                                    renderItem={this.renderPlayQuizList}
                                    keyExtractor={item => item._id}
                                />
                                <View style={{ marginBottom: 25 }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
