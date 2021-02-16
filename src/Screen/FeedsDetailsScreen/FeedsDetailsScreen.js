import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as STYLES from './Styles';
import HTML from 'react-native-render-html';
import moment from 'moment'

export default class FeedsDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.EventDetails = this.props.route.params.item;
        this.state = {
            EventID: this.EventDetails._id,
            EventImage: this.EventDetails.gallery,
            Eventdate: this.EventDetails.startdate,
            Eventtitle: this.EventDetails.eventname,
            Eventdescription: this.EventDetails.description,
        };
    }
    render() {
        const { EventID, EventImage, Eventdate, Eventtitle, Eventdescription, serviceDetails } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView>
                    <View>
                        {/* <Image source={require('../../assets/image/dp_bg.png')} style={{ height: hp('50 %'), width: wp('140%'), }}
                    /> */}
                        <Image source={{ uri: EventImage }} resizeMode="stretch" style={{ height: 350, width: 360, }}
                        />
                        <AntDesign name="left" size={30} color="#FFFFFF" style={{ position: 'absolute', marginTop: hp('5%'), marginLeft: hp('2%') }} />
                    </View>
                    <View style={{ marginLeft: hp('2%'), flexDirection: 'row', marginTop: hp('1%') }}>
                        <Fontisto name="clock" size={20} color="#6789CA" />
                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA', fontWeight: 'bold' }}>{moment(Eventdate).format('LLL')}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131', fontWeight: 'bold' }}>{Eventtitle}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: hp('1%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>
                        <HTML baseFontStyle={{ fontSize: hp('2%'), textTransform: 'capitalize' }} source={{ html: Eventdescription }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
