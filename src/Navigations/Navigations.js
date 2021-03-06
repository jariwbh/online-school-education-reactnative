import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import FeesScreen from "../Screen/FeesScreen/FeesScreen";
import AssignmentScreen from "../Screen/AssignmentScreen/AssignmentScreen";
import ViewAssignmentScreen from "../Screen/AssignmentScreen/ViewAssignmentScreen";
import Playquiz from "../Screen/Playquiz/Playquiz";
import QuizResultScreen from "../Screen/ResultScreen/QuizResultScreen";
import Myprofile from "../Screen/Myprofile/Myprofile";
import DateSheetScreen from "../Screen/DateSheetScreen/DateSheetScreen";
import ChangePasswordScreen from "../Screen/ChangePasswordScreen/ChangePasswordScreen";
import EventsScreen from "../Screen/EventsScreen/EventsScreen";
import FeedsDetailsScreen from "../Screen/FeedsDetailsScreen/FeedsDetailsScreen";
import SupportScreen from "../Screen/SupportScreen/SupportScreen";
import SchoolGalleryScreen from "../Screen/SchoolGalleryScreen/SchoolGalleryScreen";
import ResultScreen from "../Screen/ResultScreen/ResultScreen";
import AttendanceScreen from "../Screen/AttendanceScreen/AttendanceScreen";
import HolidayScreen from "../Screen/HolidayScreen/HolidayScreen";
import TimeTableScreen from "../Screen/TimeTableScreen/TimeTableScreen";
import SplashScreen from '../Screen/SplashScreen/splashScreen';
import MeetingScreen from '../Screen/MeetingScreen/MeetingScreen';
import Playquizstart from '../Screen/Playquiz/Playquizstart';
import PlayQuizList from '../Screen/Playquiz/PlayQuizList';
import BackButton from '../Components/BackButton/BackButton';
import ViewFullPicture from '../Screen/Myprofile/ViewFullPicture';
import ViewImage from '../Screen/SchoolGalleryScreen/ViewImage';
import ScanScreen from '../Screen/HomeScreen/ScanScreen';
import ForgetPasswordScreen from '../Screen/ForgetPasswordScreen/ForgetPasswordScreen';
import NewPasswordScreen from '../Screen/ForgetPasswordScreen/NewPasswordScreen';
import SelectResult from '../Screen/ResultScreen/SelectResult';
import OfflineResultListScreen from '../Screen/ResultScreen/OfflineResultListScreen';
import MeetingWebViewScreen from '../Screen/MeetingScreen/MeetingWebViewScreen';
import WebViewScreen from '../Screen/WebViewScreen/WebViewScreen';

import { HOMESCREEN, ASSIGNMENTSCREEN, PLAYQUIZLISTSCREEN, PLAYQUIZSTARTSCREEN, MYPROFILE, SCHOOLGALLERYSCREEN, SELECTRESULT } from '../Action/Type';

const Stack = createStackNavigator();
export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
                <Stack.Screen name="MainScreen" component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeStack = createStackNavigator();
function MainNavigation({ navigation }) {
    return (
        <HomeStack.Navigator headerMode='screen' initialRouteName='HomeScreen'>
            <HomeStack.Screen name="HomeScreen" options={{ title: '', headerShown: false }} component={HomeScreen} />
            <HomeStack.Screen name="ScanScreen" options={{ title: "", headerShown: false }} component={ScanScreen} />
            <HomeStack.Screen name="MeetingWebViewScreen" options={{ title: "", headerShown: false }} component={MeetingWebViewScreen} />
            <HomeStack.Screen name="WebViewScreen" options={{ title: "", headerShown: false }} component={WebViewScreen} />

            <HomeStack.Screen name="OfflineResultListScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Result',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(SELECTRESULT)} />
            }} component={OfflineResultListScreen} />

            <HomeStack.Screen name="SelectResult" options={{
                headerTintColor: '#FFFFFF', title: 'Result',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={SelectResult} />

            <HomeStack.Screen name="FeesScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Fees Due',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={FeesScreen} />

            <HomeStack.Screen name="ViewImage" options={{
                headerTintColor: '#FFFFFF', title: 'School Gallery',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(SCHOOLGALLERYSCREEN)} />
            }} component={ViewImage} />

            <HomeStack.Screen name="AssignmentScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Assignment',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={AssignmentScreen} />

            <HomeStack.Screen name="ViewAssignmentScreen" options={{
                headerTintColor: '#FFFFFF', title: 'View Assignment',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(ASSIGNMENTSCREEN)} />
            }} component={ViewAssignmentScreen} />

            <HomeStack.Screen name="Playquiz" options={{
                headerTintColor: '#FFFFFF', title: 'Play Quiz',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(PLAYQUIZSTARTSCREEN)} />
            }} component={Playquiz} />

            <HomeStack.Screen name="QuizResultScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Result',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(SELECTRESULT)} />
            }} component={QuizResultScreen} />

            <HomeStack.Screen name="PlayQuizList" options={{
                headerTintColor: '#FFFFFF', title: 'Play Quiz',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={PlayQuizList} />

            <HomeStack.Screen name="Playquizstart" options={{
                headerTintColor: '#FFFFFF', title: 'Play Quiz',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(PLAYQUIZLISTSCREEN)} />
            }} component={Playquizstart} />

            <HomeStack.Screen name="Myprofile" options={{
                headerTintColor: '#FFFFFF', title: 'My Profile',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={Myprofile} />

            <HomeStack.Screen name="DateSheetScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Exam Schedule',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={DateSheetScreen} />

            <HomeStack.Screen name="ChangePasswordScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Change Password',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={ChangePasswordScreen} />

            <HomeStack.Screen name="EventsScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Events & Programs',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={EventsScreen} />

            <HomeStack.Screen name="FeedsDetailsScreen" options={{ title: '', headerShown: false }} component={FeedsDetailsScreen} />

            <HomeStack.Screen name="SupportScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Support',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={SupportScreen} />

            <HomeStack.Screen name="MeetingScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Meetting',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={MeetingScreen} />

            <HomeStack.Screen name="SchoolGalleryScreen" options={{
                headerTintColor: '#FFFFFF', title: 'School Gallery',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={SchoolGalleryScreen} />

            <HomeStack.Screen name="ResultScreen" options={{ title: '', headerShown: false }} component={ResultScreen} />

            <HomeStack.Screen name="AttendanceScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Attendance',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={AttendanceScreen} />

            <HomeStack.Screen name="HolidayScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Holiday',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={HolidayScreen} />

            <HomeStack.Screen name="TimeTableScreen" options={{
                headerTintColor: '#FFFFFF', title: 'TimeTable',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={TimeTableScreen} />

            <HomeStack.Screen name="ViewFullPicture" options={{
                headerTintColor: '#FFFFFF', title: 'Profile Photo',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(MYPROFILE)} />
            }} component={ViewFullPicture} />

        </HomeStack.Navigator>
    );
};