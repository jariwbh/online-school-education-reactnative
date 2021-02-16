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
import SplashScreen from '../Screen/SplashScreen/splashScreen';
import BackButton from '../Components/BackButton/BackButton';
import { HOMESCREEN } from '../Action/Type';

const Stack = createStackNavigator();
export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
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

            <HomeStack.Screen name="FeesScreen" component={FeesScreen} />
            <HomeStack.Screen name="PayonlineScreen" component={PayonlineScreen} />
            <HomeStack.Screen name="AssignmentScreen" component={AssignmentScreen} />
            <HomeStack.Screen name="Playquiz" component={Playquiz} />
            <HomeStack.Screen name="Myprofile" component={Myprofile} />
            <HomeStack.Screen name="DateSheetScreen" component={DateSheetScreen} />
            <HomeStack.Screen name="AskDoubtsScreen" component={AskDoubtsScreen} />
            <HomeStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />

            <HomeStack.Screen name="EventsScreen" options={{
                headerTintColor: '#FFFFFF', title: 'Events & Programs',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={EventsScreen} />

            <HomeStack.Screen name="FeedsDetailsScreen" component={FeedsDetailsScreen} />
            <HomeStack.Screen name="SupportScreen" component={SupportScreen} />

            <HomeStack.Screen name="SchoolGalleryScreen" options={{
                headerTintColor: '#FFFFFF', title: 'School Gallery',
                headerStyle: {
                    backgroundColor: '#5D81C6', elevation: 0,
                    shadowOpacity: 0, borderBottomWidth: 0
                }, headerLeft: () => <BackButton onPress={() => navigation.navigate(HOMESCREEN)} />
            }} component={SchoolGalleryScreen} />

            <HomeStack.Screen name="ResultScreen" component={ResultScreen} />
            <HomeStack.Screen name="LeaveApplicationScreen" component={LeaveApplicationScreen} />
            <HomeStack.Screen name="AttendanceScreen" component={AttendanceScreen} />
            <HomeStack.Screen name="TimeTableScreen" component={TimeTableScreen} />
        </HomeStack.Navigator>
    );
};