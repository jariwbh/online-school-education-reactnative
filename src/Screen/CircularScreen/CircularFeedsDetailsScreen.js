import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Loader from '../../Components/Loader/Loader'
import { CIRCULARSCREEN } from '../../Action/Type';
import HTML from 'react-native-render-html';
import * as styles from './Styles';
import moment from 'moment'

export default class CircularFeedsDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.eventDetails = this.props.route.params.item;
        this.state = {
            eventImage: this.eventDetails.property.gallery,
            eventDate: this.eventDetails.property.startdate,
            eventTitle: this.eventDetails.property.title,
            eventDate: this.eventDetails.property.date,
            eventDescription: this.eventDetails && this.eventDetails.property && this.eventDetails.property.description ? this.eventDetails.property.description : null,
            loader: true
        };
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.setState({ loader: false });
    }

    render() {
        const { eventDate, eventTitle, eventDescription } = this.state
        return (
            <SafeAreaView style={styles.styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(CIRCULARSCREEN)}>
                        <Ionicons name="arrow-back" size={25} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, marginLeft: 15, color: '#FFFFFF', fontWeight: 'bold', textTransform: 'capitalize' }}>{eventTitle}</Text>
                </View>
                <View style={styles.styles.cardviewFeeds}>
                    {this.state.loader == false ?
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                                <Fontisto name="clock" size={15} color="#6789CA" />
                                <Text style={{ fontSize: 12, marginLeft: 5, color: '#6789CA', fontWeight: 'bold' }}>{moment(eventDate).format('LLL')}</Text>
                            </View>
                            {
                                eventDescription &&
                                <View style={{ flexDirection: 'column', marginTop: 5, marginLeft: 15, marginRight: 15 }}>
                                    <HTML baseFontStyle={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }} source={{ html: eventDescription }} />
                                </View>
                            }
                        </ScrollView>
                        : <Loader />
                    }
                </View>
            </SafeAreaView>
        )
    }
}
