import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Loader from '../../Components/Loader/Loader'
import { EVENTSCREEN } from '../../Action/Type';
import HTML from 'react-native-render-html';
import * as STYLES from './Styles';
import moment from 'moment'
const WIDTH = Dimensions.get('window').width;
const HEIGH = Dimensions.get('window').height;

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
                            <Image source={{ uri: eventImage }} resizeMode="stretch" style={{ height: HEIGH / 2, width: WIDTH }} />
                            <TouchableOpacity style={{ position: 'absolute', marginTop: 25, marginLeft: 20 }}
                                onPress={() => this.props.navigation.navigate(EVENTSCREEN)}>
                                <AntDesign name="left" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 20, flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                            <Fontisto name="clock" size={15} color="#6789CA" />
                            <Text style={{ fontSize: 12, marginLeft: 5, color: '#6789CA', fontWeight: 'bold' }}>{moment(eventDate).format('LLL')}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 5 }}>
                            <Text style={{ fontSize: 14, marginLeft: 15, color: '#313131', fontWeight: 'bold' }}>{eventTitle}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 5, marginLeft: 15, marginRight: 15 }}>
                            <HTML baseFontStyle={{ fontSize: 14, textTransform: 'capitalize', color: '#555555' }} source={{ html: eventDescription }} />
                        </View>
                    </ScrollView>
                    : <Loader />
                }
            </SafeAreaView>
        )
    }
}
