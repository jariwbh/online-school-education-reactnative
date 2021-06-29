import React, { Component } from 'react'
import { Text, SafeAreaView, View, FlatList, RefreshControl, TouchableOpacity, Image, ScrollView } from 'react-native'
import { EventListService } from '../../Services/EventsService/EventsService'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { FEEDSDETAILSSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import * as STYLES from './Styles';
import moment from 'moment'
const Eventicon = 'https://res.cloudinary.com/dphukth24/image/upload/v1613462857/dp_bg_vsci5n.png'

export default class EventsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventList: [],
            loader: true
        };
    }

    //get Event Api
    getEventList() {
        EventListService().then(response => {
            this.setState({ EventList: response.data })
            this.setState({ loader: false });
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

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getEventList()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render EventList using FlateList
    renderEventListService = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={STYLES.styles.innercardview} onPress={() => this.props.navigation.navigate(FEEDSDETAILSSCREEN, { item })}>
                <View style={{ flexDirection: 'column', marginTop: 5 }}>
                    <Text style={{ fontSize: 16, marginLeft: 15, color: '#313131', textTransform: 'capitalize' }}>{item.title}</Text>
                </View>
                <View style={{ marginLeft: 20, flexDirection: 'row', marginTop: 15 }} >
                    <Image source={{ uri: item.property.gallery ? item.property.gallery : Eventicon }} style={{ height: 80, width: 80, borderRadius: 10 }} />
                    <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Fontisto name="clock" size={15} color="#6789CA" />
                            <Text style={{ fontSize: 12, marginLeft: 5, color: '#6789CA' }}>{moment(item.property.startdate).format('LLL')}</Text>
                        </View>
                        <View style={{ marginRight: 100, width: '70%', marginTop: 5 }}>
                            <HTML baseFontStyle={{ fontSize: 12, textTransform: 'capitalize', color: '#555555' }} html={`<html> ${item.property.description.length < 100 ? `${item.property.description}` : `${item.property.description.substring(0, 100)}...`} </html>`} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { EventList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(EventList == null) || (EventList && EventList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Events & Programs Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 15 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <View>
                                    <FlatList
                                        data={EventList}
                                        renderItem={this.renderEventListService}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
