import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native'
import { getExamResult } from '../../Services/PlayQuizService/PlayQuizService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';
import moment from 'moment';
const WIDTH = Dimensions.get('window').width;

export default class QuizResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizResultList: [],
            loader: true
        }
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
            this.getExamResultService(userData._id);
        }
    }

    //get exam result List API
    getExamResultService(id) {
        getExamResult(id).then(response => {
            this.setState({ quizResultList: response.data, loader: false });
        })
    }

    componentDidMount() {
        this.getStudentData();
    }

    //get Exam Result Render method funcation
    renderExamResult = ({ item }) => (
        <View style={STYLES.styles.innerCardview}>
            <View style={{ borderRadius: 100, marginLeft: WIDTH / 3 + 10, justifyContent: 'center', marginTop: 5, backgroundColor: '#2855AE', width: 70, height: 70, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: '#FFFFFF' }}>{item.percentage}%</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20, marginTop: 5 }}>
                <Text style={{ fontSize: 14, flex: 1, color: '#000000', textTransform: 'capitalize' }}>{item.examid.title}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5, padding: 5 }}>
                <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Exam Date</Text>
                <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{moment(item.starttime).format('LT')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Start Time</Text>
                <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{moment(item.starttime).format('LT')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>End Time</Text>
                <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{moment(item.endtime).format('LT')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Duration</Text>
                <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{item.timetaken + ' ' + 'Minutes'}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                <Text style={{ fontSize: 14, marginLeft: 15, color: '#777777' }}>Total Marks </Text>
                <Text style={{ fontSize: 14, marginRight: 15, color: '#3A3A3A' }}>{item.totalpositivemarks + ' ' + 'Marks'}</Text>
            </View>
        </View>
    )

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardView}>
                    {(this.state.quizResultList == null) || (this.state.quizResultList && this.state.quizResultList.length == 0) ?
                        (this.state.loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}> Result Not Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 15 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <FlatList
                                        data={this.state.quizResultList}
                                        renderItem={this.renderExamResult}
                                        keyExtractor={item => item._id}
                                    />
                                </View>
                                <View style={{ marginBottom: 20 }}></View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        );
    };
}
