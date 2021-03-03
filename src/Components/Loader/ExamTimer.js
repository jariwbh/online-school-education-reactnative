import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ExamTimer extends Component {
    IsTimerStart = false;
    constructor() {
        super();
        this.state = { minutes: 1, seconds: 0 }
    }

    componentDidMount() {
        if (this.IsTimerStart) {
            this.receivedData();
        }
    }

    componentWillUnmount() {
        if (this.IsTimerStart) {
            clearInterval(this.receivedData)
        }
    }

    examTimeOver() {
        //alert("Time is over!");
    }

    startTimer() {
        const { seconds, minutes } = this.state
        console.log(minutes, seconds);
        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
                this.examTimeOver();
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        }
    }

    receivedData() {
        this.myInterval = setInterval(() => {
            if (this.IsTimerStart) {
                this.startTimer()
            }

        }, 1000)
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <View>
                <View style={{ width: wp('90%'), height: hp('7%'), borderRadius: hp('3%'), flexDirection: 'row', backgroundColor: '#05518B', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), marginLeft: hp('2%') }}>
                        {minutes === 0 && seconds === 0
                            ? <Text>Busted!</Text>
                            : <>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</>
                        }
                    </Text>
                    <View>
                        <AntDesign name="clockcircleo" size={24} color="#FFFFFF" style={{ marginRight: hp('2%') }} />
                    </View>
                </View>
            </View>
        );
    }
}
