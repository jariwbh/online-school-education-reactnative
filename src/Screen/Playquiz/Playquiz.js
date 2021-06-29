import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, ToastAndroid, Platform, Dimensions } from 'react-native'
import { addExamResultService } from '../../Services/PlayQuizService/PlayQuizService';
import { AUTHUSER, LOGINSCREEN, HOMESCREEN } from '../../Action/Type';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';
import HTML from 'react-native-render-html';
import * as STYLES from './Styles';
const WIDTH = Dimensions.get('window').width;

export default class Playquiz extends Component {
    answers = [];
    examObject = {};
    starttime = new Date();
    IsTimerStart = true;
    currentQuestionObject = {};
    currentQuestionId = null;
    counterTemp = 0;

    constructor(props) {
        super(props);
        this.currentExamDetails = this.props.route.params.selectedExamDeatils;
        this.state = {
            currentExamData: [],
            questionArray: [],
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            minutes: 0,
            seconds: 0,
            studentId: null,
            spinner: false
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

    //get calculate Minutes
    get_Diff_minutes() {
        let maintDate = new Date();
        let dt1 = new Date(new Date(maintDate.getFullYear(), maintDate.getMonth(), maintDate.getDate()).getTime() + this.state.currentExamData.property.time * 60000);
        let dt2 = new Date(new Date(maintDate.getFullYear(), maintDate.getMonth(), maintDate.getDate()).getTime() + this.state.minutes * 60000 + this.state.seconds * 1000);
        let difference = dt1.getTime() - dt2.getTime(); // This will give difference in milliseconds
        let resultInMinutes = Math.round(difference / 60000);
        let resultInSeconds = Math.round(difference / 1000);
        return resultInMinutes;
    }

    //button click to submit details
    onPressSumbit() {
        this.prepareResultObjectonSumbit();
    }

    // call api add exam Result
    addExamResult(data) {
        this.setState({ spinner: true });
        addExamResultService(data).then(response => {
            this.setState({ spinner: false });
            if (Platform.OS === 'ios') {
                alert("Your Exam Submitted");
            } else {
                ToastAndroid.show('Your Exam Submitted', ToastAndroid.LONG);
            }
            this.props.navigation.navigate(HOMESCREEN);
        }).catch(error => {
            this.setState({ spinner: false });
            // console.log(error);
        });

    }

    componentDidMount() {
        this.getStudentData();
        this.setState({
            currentExamData: this.currentExamDetails,
            questionArray: this.currentExamDetails.questions,
            minutes: this.currentExamDetails.property.time
        });

        if (this.IsTimerStart) {
            this.setState({
                questionArray: this.currentExamDetails.questions,
                minutes: this.currentExamDetails.property.time
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

    // exam over function
    examTimeOver() {
        alert("Time is over!");
        this.prepareResultObjectonSumbit();
    }

    //time set and start exam to count time
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

    //miliseconde to count and refresh time secode
    receivedData() {
        this.myInterval = setInterval(() => {
            if (this.IsTimerStart) {
                this.startTimer()
            }
        }, 1000)
    }

    //prepare object to submit button click and time is over to call
    prepareResultObjectonSumbit() {
        this.IsTimerStart = false;
        let correctanswers = 0;
        let incorrectanswers = 0;
        let markesobtained = 0;
        let totalmarks = 0;

        if (this.state.questionArray && this.state.questionArray.length > 0) {
            this.state.questionArray.forEach(element => {

                totalmarks = totalmarks + element.mark
                let answerObj = this.answers.find(p => p.questionid == element._id);
                if (answerObj) {
                    if (element && element.options && element.options.length > 0) {

                        if (element.questiontype == 'Multi Select') {
                            let CorrectOptions = [];
                            element.options.forEach(x => { if (x.iscorrect == true) CorrectOptions.push(x) });
                            let isValidTotal = 0;
                            answerObj.answerid.forEach(Optionval => {
                                let isCorrectOpt = CorrectOptions.find(x => x._id == Optionval);
                                if (isCorrectOpt) {
                                    isValidTotal += 1;
                                }
                            });

                            if ((answerObj.answerid.length == CorrectOptions.length) && (isValidTotal == CorrectOptions.length)) {
                                markesobtained = markesobtained + element.mark;
                                correctanswers = correctanswers + 1;
                            } else {
                                incorrectanswers = incorrectanswers + 1;
                            }

                        } else {
                            var optionObj = element.options.find(x => x.iscorrect == true);

                            if (optionObj._id == answerObj.answerid[0]) {
                                markesobtained = markesobtained + element.mark;
                                correctanswers = correctanswers + 1;
                            } else {
                                incorrectanswers = incorrectanswers + 1;
                            }
                        }
                    }
                }

            });
        }

        this.examObject = {};
        if (this.answers) {
            let answersData = [];
            this.examObject.attemptedquestions = this.answers.length;
            this.answers.forEach(element => {
                let obj = {
                    questionid: element.questionid,
                    answerid: element.option
                };
                answersData.push(obj);
            });
            this.examObject.answers = answersData;
        }
        this.examObject.unattemptedquestions = this.state.questionArray.length - this.answers.length;
        this.examObject.examid = this.currentExamDetails._id;
        this.examObject.studentid = this.state.studentId;
        this.examObject.correctanswers = correctanswers;
        this.examObject.incorrectanswers = incorrectanswers;
        this.examObject.totalpositivemarks = markesobtained;
        this.examObject.totalnegativemarks = 0;
        this.examObject.markesobtained = markesobtained;
        this.examObject.totalmarks = totalmarks;
        this.examObject.percentage = ((markesobtained * 100) / totalmarks).toFixed(2);
        this.examObject.starttime = this.starttime;
        this.examObject.endtime = new Date();
        this.examObject.timetaken = this.get_Diff_minutes();
        this.addExamResult(this.examObject);
    }

    //select option click to call and next ,prev to call
    selectedQuestionOption(question, answer) {
        if (this.answers && this.answers.length > 0) {
            var checkAnswerObj = this.answers.find(x => x.questionid == question._id);
            if (checkAnswerObj) {

                if (checkAnswerObj && checkAnswerObj.answerid && checkAnswerObj.answerid.length > 0) {
                    var answerObj = checkAnswerObj.answerid.find(p => p == answer._id);
                    if (question.questiontype && question.questiontype == "Multi Select") {
                        if (answerObj) {
                            this.remove(answer._id, checkAnswerObj.answerid);
                            this.remove(answer.option, checkAnswerObj.option);
                        } else {
                            checkAnswerObj.answerid.push(answer._id);
                            checkAnswerObj.option.push(answer.option);
                        }
                    } else {

                        checkAnswerObj.answerid = [];
                        checkAnswerObj.option = [];

                        if (!answerObj) {
                            checkAnswerObj.answerid.push(answer._id);
                            checkAnswerObj.option.push(answer.option);
                        }
                    }

                } else {

                    checkAnswerObj.answerid = [];
                    checkAnswerObj.option = [];

                    checkAnswerObj.answerid.push(answer._id);
                    checkAnswerObj.option.push(answer.option);

                }
            } else {
                let obj = {
                    questionid: question._id,
                    answerid: [answer._id],
                    option: [answer.option]
                }
                this.answers.push(obj);
            }
        } else {
            let obj = {
                questionid: question._id,
                answerid: [answer._id],
                option: [answer.option]
            }
            this.answers.push(obj);
            this.checkAnswerColor(answer._id)
        }
    }

    //check question and remove answerid
    remove(id, array) {
        for (const i in array) {
            if (array[i] == id) {
                array.splice(i, 1);
            }
        }
    }

    //select option to change color
    checkAnswerColor(answerid) {
        if (this.currentQuestionObject && this.currentQuestionObject._id && this.answers && this.answers.length > 0) {
            var answerObj = this.answers.find(p => p.questionid == this.currentQuestionObject._id);
            if (answerObj && answerObj.answerid && answerObj.answerid.length > 0) {
                if (answerObj.answerid.includes(answerid)) {
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
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        {/* exam timer Compoment */}
                        <View style={{ width: WIDTH - 30, height: 40, borderRadius: 100, flexDirection: 'row', backgroundColor: '#05518B', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, marginLeft: 15 }}>
                                {minutes === 0 && seconds === 0
                                    ? <Text>Busted!</Text>
                                    : <>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</>
                                }
                            </Text>
                            <View>
                                <AntDesign name="clockcircleo" size={24} color="#FFFFFF" style={{ marginRight: 15 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 22, }}>Question {index + 1}</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 5 }}> / {this.currentExamDetails.questions.length} </Text>
                        </View>
                        <TouchableOpacity style={{ width: 100, backgroundColor: "#2855AE", height: 30, borderRadius: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}> Mark </Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}> {currentQuestion && currentQuestion.mark} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, flex: 1 }}>
                        <View style={{ width: WIDTH - 50, backgroundColor: "#FFFFFF", borderRadius: 20, alignItems: 'center', flex: 1 }}>
                            <HTML baseFontStyle={{ fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold', color: '#000000' }}
                                html={`<html>${currentQuestion && currentQuestion.question} </html>`} />

                            {currentQuestionOptions && currentQuestionOptions.map(val => (
                                <TouchableOpacity onPress={() => this.selectedQuestionOption(currentQuestion, val)}
                                    style={[STYLES.styles.optionbtn, this.checkAnswerColor(val._id) && STYLES.styles.optionselectedbtn]}>
                                    <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center' }}>
                                        <HTML baseFontStyle={{ fontSize: 16, textTransform: 'capitalize', color: '#000000' }}
                                            html={`<html>${val.option + '. '} </html>`} />
                                        <HTML baseFontStyle={{ fontSize: 14, textTransform: 'capitalize', color: '#000000' }}
                                            html={`<html>${val.value}  </html>`} />
                                    </View>
                                </TouchableOpacity>
                            ))}

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    disabled={index == 0}
                                    style={index == 0 ? STYLES.styles.prevButtonDisable : STYLES.styles.prevButton}
                                    onPress={() => this.togglePrev()}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>PREVIOUS</Text>
                                </TouchableOpacity>
                                {
                                    (index + 1) === (this.currentExamDetails.questions.length) == true
                                        ? <TouchableOpacity
                                            style={STYLES.styles.nextButton}
                                            onPress={() => this.onPressSumbit()}>
                                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>SUBMIT</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity
                                            disabled={(index + 1) === (this.currentExamDetails.questions.length)}
                                            style={STYLES.styles.nextButton}
                                            onPress={() => this.toggleNext()}>
                                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>NEXT</Text>
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                    <Spinner
                        visible={this.state.spinner}
                        textStyle={{ color: '#2855AE' }}
                    />
                    <View style={{ marginBottom: 25 }}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
