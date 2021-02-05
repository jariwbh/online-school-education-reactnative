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
//import Myprofile from "../Screen/Myprofile/Myprofile";


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



            </Stack.Navigator>

        </NavigationContainer>
    );
};