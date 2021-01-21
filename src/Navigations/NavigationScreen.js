import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import TabNavigation from './TabNavigation';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import ClassDetails from "../Screen/ClassDetails/ClassDetails";
import ReportDetails from "../Screen/ReportDetails/ReportDetails";
import Myprofile from "../Screen/Myprofile/Myprofile";


const Stack = createStackNavigator();



export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='LoginScreen'>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ClassDetails" component={ClassDetails} />
                <Stack.Screen name="ReportDetails" component={ReportDetails} />
                <Stack.Screen name="Myprofile" component={Myprofile} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};