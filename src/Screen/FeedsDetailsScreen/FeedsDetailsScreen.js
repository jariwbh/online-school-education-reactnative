import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import * as STYLES from './Styles';
import moment from 'moment'

export default class FeedsDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.eventDetails = this.props.route.params.item;
        this.state = {
            eventImage: this.eventDetails.gallery,
            eventDate: this.eventDetails.startdate,
            eventTitle: this.eventDetails.eventname,
            eventDescription: this.eventDetails.description,
            loader: true
        };
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.wait(1000).then(() => this.setState({ loader: false }));
    }

    render() {
        const { eventImage, eventDate, eventTitle, eventDescription } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                {this.state.loader == false ?
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Image source={{ uri: eventImage }} resizeMode="stretch" style={{ height: hp('50%'), width: wp('100%') }} />
                            <AntDesign name="left" size={30} color="#FFFFFF" style={{ position: 'absolute', marginTop: hp('5%'), marginLeft: hp('2%') }} />
                        </View>
                        <View style={{ marginLeft: hp('2%'), flexDirection: 'row', marginTop: hp('1%') }}>
                            <Fontisto name="clock" size={20} color="#6789CA" />
                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA', fontWeight: 'bold' }}>{moment(eventDate).format('LLL')}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131', fontWeight: 'bold' }}>{eventTitle}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: hp('1%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>
                            <HTML baseFontStyle={{ fontSize: hp('2%'), textTransform: 'capitalize' }} source={{ html: eventDescription }} />
                        </View>
                    </ScrollView>
                    : <Loader />
                }
            </SafeAreaView>
        )
    }
}
