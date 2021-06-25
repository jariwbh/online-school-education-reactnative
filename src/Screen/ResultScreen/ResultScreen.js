import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, Image, Dimensions, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import * as STYLES from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
const WIDTH = Dimensions.get('window').width;
import Loader from '../../Components/Loader/Loader'
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';

export default function ResultScreen(props) {
    const result = props.route.params.result;
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

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
            setUserInfo(userData);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        getStudentData();
    }, []);

    useEffect(() => {
    }, [userInfo, loading]);

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <Image source={require('../../assets/image/vector2.png')} style={{ resizeMode: "cover", width: '100%', height: '40%' }} />
            <View style={{ marginTop: 20, position: 'absolute' }}>
                <View style={{ flexDirection: 'row' }}>
                    <BackButton onPress={() => props.navigation.navigate('OfflineResultListScreen')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: WIDTH / 3 }}>
                    <Image source={require('../../assets/image/grey_circle.png')} style={{ width: 120, height: 120, }} />
                    <Image source={require('../../assets/image/circle_bg.png')} style={{ width: 100, height: 100, position: 'absolute' }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -85, marginLeft: WIDTH / 3 }}>
                    <Text style={{ fontSize: 26, color: '#000000', fontWeight: 'bold' }}>{result.percentage + '%'}</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold' }}>{'GRADE' + ' ' + result.grade}</Text>
                </View>
                <View>
                    <Image source={require('../../assets/image/star_bg.png')} style={{ width: 40, height: 40, marginLeft: WIDTH / 3 }} />
                    <Image source={require('../../assets/image/ic_star.png')} style={{ width: 30, height: 30, position: 'absolute', marginLeft: WIDTH / 3 + 3, top: 3 }} />
                </View>
            </View>
            <View style={STYLES.styles.cardviewResult}>
                {loading ? <Loader /> :
                    <ScrollView>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                            {result && result.grade == 'A+' ? <Text style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>You are Excellent, </Text> : null}
                            {result && result.grade == 'A' ? <Text style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>You are Excellent, </Text> : null}
                            {result && result.grade == 'B' ? <Text style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>You are Average, </Text> : null}
                            {result && result.grade == 'C' ? <Text style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>You are Average, </Text> : null}
                            {result && result.grade == 'D' ? <Text style={{ fontSize: 14, color: '#313131', fontWeight: 'bold' }}>You are Poor, </Text> : null}
                            {result && result.grade == 'F' ? <Text style={{ fontSize: 14, color: '#FF0000', fontWeight: 'bold' }}>You are Failed, </Text> : null}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, color: '#313131', fontWeight: 'bold' }}>{userInfo && userInfo.fullname}!! </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH - 30, borderColor: '#555555', borderWidth: 0.5, borderRadius: 10, backgroundColor: '#EEEEEE' }}>
                            {
                                result.subjectresult.map((ele) => (
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 5 }}>
                                        <View style={STYLES.styles.innercardview1}>
                                            <View style={{ backgroundColor: '#EEEEEE' }}>
                                                <Text style={{ fontSize: 16, margin: 5, color: '#000000', marginLeft: 20 }}>{ele.subjectid.property.title}</Text>
                                            </View>
                                        </View>
                                        <View style={STYLES.styles.innercardview2}>
                                            <View style={{ backgroundColor: '#EEEEEE' }}>
                                                <Text style={{ fontSize: 16, textAlign: 'center', margin: 5, color: '#000000' }}>{ele.totalmarks}</Text>
                                            </View>
                                        </View>
                                        <View style={STYLES.styles.innercardview3}>
                                            <View style={{ backgroundColor: '#EEEEEE' }}>
                                                <Text style={{ fontSize: 16, textAlign: 'center', margin: 5, color: '#000000' }}>{ele.markesobtained + (ele.grade ? ' - ' + ele.grade : null)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
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
