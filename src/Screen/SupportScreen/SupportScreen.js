import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { AUTHUSER, LOGINSCREEN } from '../../Action/Type';
import React, { Component } from 'react';
import * as STYLES from './Styles';

export default class SupportScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supportnumber: null,
            supportemail: null
        };
    }

    //get student information api
    getStudentData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var userData = JSON.parse(getUser);
            this.setState({
                supportnumber: userData.branchid.companyphone ? userData.branchid.companyphone : null,
                supportemail: userData.branchid.supportemail ? userData.branchid.supportemail : null
            });
        }
    }

    componentDidMount() {
        this.getStudentData();
    }

    render() {
        const { supportnumber, supportemail } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/image/blob.png')} style={{ height: 120, width: 120, }}
                        />
                        <Image source={require('../../assets/image/support_.png')} style={{ height: 120, width: 120, position: 'absolute' }}
                        />
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#313131', fontSize: 22 }}>Get Support</Text>
                    </View>
                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#A5A5A5', fontSize: 14 }}>For any support request regards your</Text>
                        <Text style={{ color: '#A5A5A5', fontSize: 14 }}>  orders or deliveries please feel free to</Text>
                        <Text style={{ color: '#A5A5A5', fontSize: 14 }}>  speak with us at below.</Text>
                    </View>
                    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#313131', fontSize: 18 }}>Call us - {supportnumber}</Text>
                        <Text style={{ color: '#313131', fontSize: 18 }}>Mail us - {supportemail}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

