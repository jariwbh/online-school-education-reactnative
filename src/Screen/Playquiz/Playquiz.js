import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import { addExamResultService } from '../../Services/PlayQuizService/PlayQuizService';
import * as STYLES from './Styles';
import HTML from 'react-native-render-html';

export default class Playquiz extends Component {
    answers = [];
    examObject = {};
    starttime = new Date();
    IsTimerStart = true;
    currentOptionId = null;
    currentQuestionObject = {};
    currentQuestionId = null;
    counterTemp = 0;

    constructor(props) {
        super(props);
        this.currentExamDetails = this.props.route.params.selectedExamDeatils;
        this.state = {
            currentExamData: [],
            addedby: [],
            property: [],
            questionArray: [],
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            minutes: 0,
            seconds: 0,
            questionanswers: [],
            studentId: null,
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
            this.wait(1000).then(() => this.setState({ studentId: userData._id }));
        }
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    get_Diff_minutes() {
        let maintDate = new Date();
        let dt1 = new Date(new Date(maintDate.getFullYear(), maintDate.getMonth(), maintDate.getDate()).getTime() + this.state.currentExamData.time * 60000);
        let dt2 = new Date(new Date(maintDate.getFullYear(), maintDate.getMonth(), maintDate.getDate()).getTime() + this.state.minutes * 60000 + this.state.seconds * 1000);
        let difference = dt1.getTime() - dt2.getTime(); // This will give difference in milliseconds
        let resultInMinutes = Math.round(difference / 60000);
        return resultInMinutes;
    }

    onSumbitClick() {
        alert("Once Sumbit, you will not be able to recover this mock test!");
        this.onPressSumbit();
    }

    onPressSumbit() {

    }

    addExamResult(data) {
        addExamResultService(data).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    }

    componentDidMount() {
        this.setState({
            currentExamData: this.currentExamDetails,
            addedby: this.currentExamDetails.addedby,
            property: this.currentExamDetails.addedby.property,
            questionArray: this.currentExamDetails.questions,
            minutes: this.currentExamDetails.time
        });

        if (this.IsTimerStart) {
            this.setState({
                questionArray: this.currentExamDetails.questions,
                minutes: this.currentExamDetails.time
            });
            if (this.currentExamDetails.questions.length == 1) {
                this.setState({ disabledNext: true })
            }
            this.receivedData();
        }
    }

    componentWillUnmount() {
        if (this.IsTimerStart) {
            clearInterval(this.receivedData)
        }
    }

    examTimeOver() {
        alert("Time is over!");
        this.onPressSumbit();
    }

    startTimer() {
        const { seconds, minutes } = this.state
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

    //select option click to call and next ,prev to call
    selectedQuestionOption(question, answer) {
        if (this.answers && this.answers.length > 0) {
            var checkAnswerObj = this.answers.find(x => x.questionId == question._id);
            if (checkAnswerObj) {
                // Changes Value if Record is Exists.
                checkAnswerObj.answerId = answer._id;
            } else {
                // Add Record if Record is not exists.
                let obj = {
                    questionId: question._id,
                    answerId: answer._id
                }
                this.answers.push(obj);
            }
        } else {
            // Add Recored if Array is Empty
            let obj = {
                questionId: question._id,
                answerId: answer._id
            }
            this.answers.push(obj);
            this.checkAnswerColor(answer._id)
        }
    }

    //select option to change color
    checkAnswerColor(answerid) {
        if (this.currentQuestionObject && this.currentQuestionObject._id && this.answers && this.answers.length > 0) {
            var answerObj = this.answers.find(p => p.questionId == this.currentQuestionObject._id);
            if (answerObj) {
                if (answerObj.answerId == answerid) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    //prev btn click to call funtion
    togglePrev() {
        const index = this.state.index - 1;
        if (this.state.questionArray[index]) {
            this.currentQuestionObject = this.state.questionArray[index]
        }
        //this.selectedQuestionOption();
        this.setState({ index: index, disabledPrev: false, disabledNext: false });
    }

    //next btn click to call funtion
    toggleNext() {
        const index = this.state.index + 1;
        const disabledNext = (index === (this.state.questionArray.length));
        if (this.state.questionArray[index]) {
            this.currentQuestionObject = this.state.questionArray[index]
        }
        //this.selectedQuestionOption();
        this.setState({ index: index, disabledNext: disabledNext });
    }

    render() {
        const { minutes, seconds, index, disabledNext, disabledPrev, questionArray } = this.state;
        const currentQuestion = questionArray ? questionArray[index] : null;
        var currentQuestionOptions;
        if (currentQuestion) {
            this.currentQuestionId = currentQuestion._id;
            currentQuestion.itemindex = index;
            currentQuestionOptions = currentQuestion.options;
        }
        if (this.state.questionArray && this.state.questionArray.length > 0 && this.counterTemp == 0) {
            this.currentQuestionObject = this.state.questionArray[0];
            this.counterTemp++;
        }
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%') }}>
                        {/* exam timer Compoment */}
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
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), justifyContent: 'space-around' }}>
                        <View style={{ marginLeft: hp('0%'), flexDirection: 'row' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('4%'), }}>Question {index + 1}</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), marginTop: hp('1%') }}> / {this.currentExamDetails.questions.length} </Text>
                        </View>
                        <TouchableOpacity style={{ width: hp('15%'), backgroundColor: "#2855AE", height: hp('5%'), borderRadius: hp('3%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), }}> Mark </Text>
                            <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), }}> {currentQuestion && currentQuestion.mark} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'), flex: 1 }}>
                        <View style={{ width: hp('50%'), backgroundColor: "#FFFFFF", borderRadius: hp('3%'), alignItems: 'center', flex: 1 }}>
                            <HTML baseFontStyle={{ fontSize: hp('2%'), textTransform: 'capitalize', fontWeight: 'bold' }}
                                html={`<html>${currentQuestion && currentQuestion.question} </html>`} />

                            {currentQuestionOptions && currentQuestionOptions.map(val => (
                                <TouchableOpacity onPress={() => this.selectedQuestionOption(currentQuestion, val)}
                                    style={[STYLES.styles.optionbtn, this.checkAnswerColor(val._id) && STYLES.styles.optionselectedbtn]}>

                                    <View style={{ flexDirection: 'row', marginLeft: wp('3%'), alignItems: 'center' }}>
                                        <HTML baseFontStyle={{ fontSize: hp('3%'), textTransform: 'capitalize', }}
                                            html={`<html>${val.option + '. '} </html>`} />
                                        <HTML baseFontStyle={{ fontSize: hp('3%'), textTransform: 'capitalize' }}
                                            html={`<html>${val.value} </html>`} />
                                    </View>
                                </TouchableOpacity>
                            ))}

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    disabled={index == 0}
                                    style={index == 0 ? STYLES.styles.prevButtonDisable : STYLES.styles.prevButton}
                                    onPress={() => this.togglePrev()}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>PREVIOUS</Text>
                                </TouchableOpacity>
                                {
                                    (index + 1) === (this.currentExamDetails.questions.length) == true
                                        ? <TouchableOpacity
                                            style={STYLES.styles.nextButton}
                                            onPress={() => this.onPressSumbit()}>
                                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>SUBMIT</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity
                                            disabled={(index + 1) === (this.currentExamDetails.questions.length)}
                                            style={STYLES.styles.nextButton}
                                            onPress={() => this.toggleNext()}>
                                            <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>NEXT</Text>
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: hp('5%') }}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
