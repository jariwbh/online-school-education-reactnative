import React, { Component } from 'react'
import { Text, SafeAreaView, View, FlatList, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';
import { EventListService } from '../../Services/EventsService/EventsService'
import moment from 'moment'
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
const serviceicon = 'https://res.cloudinary.com/dphukth24/image/upload/v1613462857/dp_bg_vsci5n.png'

export default class EventsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventList: [],
            loader: true
        };
    }

    getEventList() {
        EventListService().then(response => {
            console.log("response", response.data);
            this.setState({ EventList: response.data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        });

    }

    componentDidMount() {
        this.getEventList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    renderEventListService = ({ item }) => (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={STYLES.styles.innercardview} onPress={() => this.props.navigation.navigate('FeedsDetailsScreen', { item })}>
                <View style={{ flexDirection: 'column', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#313131' }}>{item.eventname}</Text>
                </View>
                <View style={{ marginLeft: hp('3%'), flexDirection: 'row', marginTop: hp('2%') }} >
                    <Image source={{ uri: item.gallery[0] ? (item.gallery[0] ? item.gallery : serviceicon) : serviceicon }} style={{ height: hp('15%'), width: wp('25%'), borderRadius: hp('2%') }}
                    />
                    <View style={{ marginLeft: hp('2%'), flexDirection: 'column', marginBottom: hp('0%') }}>
                        <View style={{ marginLeft: hp('2%'), flexDirection: 'row' }}>
                            <Fontisto name="clock" size={20} color="#6789CA" />
                            <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: '#6789CA' }}>{moment(item.startdate).format('LLL')}</Text>
                        </View>
                        <View style={{ marginRight: hp('20%'), }}>
                            <HTML baseFontStyle={{ fontSize: hp('2%'), textTransform: 'capitalize' }} html={`<html> ${item.description.length < 100 ? `${item.description}` : `${item.description.substring(0, 100)}...`} </html>`} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )

    render() {
        const { EventList, loader, } = this.state

        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={STYLES.styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Events & Programs</Text>
                    </View>

                    <View style={STYLES.styles.cardview}>
                        {(EventList == null) || (EventList && EventList.length == 0) ?
                            (loader == false ?
                                <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Service Available</Text>
                                : <Loader />
                            )
                            :
                            <FlatList
                                data={EventList}
                                renderItem={this.renderEventListService}
                                keyExtractor={item => `${item._id}`}
                            />
                        }
                    </View>

                </ImageBackground>
            </SafeAreaView >
        )
    }
}
