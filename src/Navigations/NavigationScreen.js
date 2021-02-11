import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import FeesScreen from "../Screen/FeesScreen/FeesScreen";
import PayonlineScreen from "../Screen/PayonlineScreen/PayonlineScreen";
import AssignmentScreen from "../Screen/AssignmentScreen/AssignmentScreen"
import Playquiz from "../Screen/Playquiz/Playquiz"
import Myprofile from "../Screen/Myprofile/Myprofile";
import DateSheetScreen from "../Screen/DateSheetScreen/DateSheetScreen"
import AskDoubtsScreen from "../Screen/AskDoubtsScreen/AskDoubtsScreen"
import ChangePasswordScreen from "../Screen/ChangePasswordScreen/ChangePasswordScreen"
import EventsScreen from "../Screen/EventsScreen/EventsScreen"
import FeedsDetailsScreen from "../Screen/FeedsDetailsScreen/FeedsDetailsScreen"
import SupportScreen from "../Screen/SupportScreen/SupportScreen"
import SchoolGalleryScreen from "../Screen/SchoolGalleryScreen/SchoolGalleryScreen"
import ResultScreen from "../Screen/ResultScreen/ResultScreen"
import LeaveApplicationScreen from "../Screen/LeaveApplicationScreen/LeaveApplicationScreen"
import AttendanceScreen from "../Screen/AttendanceScreen/AttendanceScreen"
import TimeTableScreen from "../Screen/TimeTableScreen/TimeTableScreen"

const Stack = createStackNavigator();



export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='LoginScreen'>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="FeesScreen" component={FeesScreen} />
                <Stack.Screen name="PayonlineScreen" component={PayonlineScreen} />
                <Stack.Screen name="AssignmentScreen" component={AssignmentScreen} />
                <Stack.Screen name="Playquiz" component={Playquiz} />
                <Stack.Screen name="Myprofile" component={Myprofile} />
                <Stack.Screen name="DateSheetScreen" component={DateSheetScreen} />
                <Stack.Screen name="AskDoubtsScreen" component={AskDoubtsScreen} />
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
                <Stack.Screen name="EventsScreen" component={EventsScreen} />
                <Stack.Screen name="FeedsDetailsScreen" component={FeedsDetailsScreen} />
                <Stack.Screen name="SupportScreen" component={SupportScreen} />
                <Stack.Screen name="SchoolGalleryScreen" component={SchoolGalleryScreen} />
                <Stack.Screen name="ResultScreen" component={ResultScreen} />
                <Stack.Screen name="LeaveApplicationScreen" component={LeaveApplicationScreen} />
                <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
                <Stack.Screen name="TimeTableScreen" component={TimeTableScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};