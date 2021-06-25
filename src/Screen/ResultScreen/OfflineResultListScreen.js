import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import { getOfflineExamResult } from '../../Services/PlayQuizService/PlayQuizService';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN, RESULTSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader';
import * as STYLES from './Styles';

export default function OfflineResultListScreen(props) {
    const [loading, setLoading] = useState(false);
    const [courseID, setCourseID] = useState(null);
    const [studentID, setStudentID] = useState(null);
    const [oflineResultList, setOflineResultList] = useState(null);
    const [refreshing, setrefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        getStudentData();
    }, []);

    useEffect(() => {
    }, [loading, courseID, studentID, oflineResultList, refreshing]);

    //get local storage fetch infomation 
    const getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);
        } else {
            var userData;
            userData = JSON.parse(getUser);
            setStudentID(userData._id);
            setCourseID(userData.membershipid._id);
            onlineResult(userData.membershipid._id, userData._id);
        }
    }

    // wait function
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //refresh function
    const onRefresh = () => {
        setrefreshing(true);
        getOfflineExamResult(courseID);
        wait(3000).then(() => setrefreshing(false));
    }

    const onlineResult = async (courseID, studentID) => {
        const response = await getOfflineExamResult(courseID);
        setLoading(false);
        filterdata(response.data, studentID)
    }

    const filterdata = (resultlist, studentID) => {
        let arrayresult = [];
        if (resultlist) {
            resultlist.forEach(element => {
                if (element && element.result && element.result.length > 0) {
                    element.result.forEach(ele => {
                        if (studentID == ele.studentid) {
                            ele['examid'] = element.examid;
                            arrayresult.push(ele);
                        }
                    });
                }
            });
        }
        setOflineResultList(arrayresult);
    }

    //render TimeTable Using flatlist
    const renderOffileExamResult = ({ item }) => (
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.navigate(RESULTSCREEN, { result: item })}>
            <View style={STYLES.styles.innercardview}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: 'bold', color: '#313131', textTransform: 'capitalize' }}>{item.examid.title}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 15, flexDirection: 'row' }}>
                    <View style={{ marginLeft: 15, marginRight: 15, flex: 1, height: 1, backgroundColor: '#EEEEEE' }} />
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5, marginBottom: 10, marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, marginRight: 15, fontWeight: 'bold', textTransform: 'capitalize', color: item.grade == 'F' ? '#FF0000' : '#359D2A' }}>
                        {item.grade == 'F' ? 'Sorry! You have not cleared this exam' : 'Congratulations!! You have Pass this exam'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={STYLES.styles.cardview}>
                {(oflineResultList == null) || (oflineResultList && oflineResultList.length == 0) ?
                    (loading == false ?
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 150 }}>No Exam Result</Text>
                        : <Loader />
                    )
                    :
                    <View style={{ marginTop: 10 }}>
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing}
                            title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6"
                            colors={["#5D81C6"]} onRefresh={onRefresh} />}
                            showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={oflineResultList}
                                renderItem={renderOffileExamResult}
                                keyExtractor={item => `${item._id}`}
                            />
                            <View style={{ marginBottom: 50 }}></View>
                        </ScrollView>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}
