import React, { Component } from 'react'
import { Text, SafeAreaView, View, FlatList, RefreshControl, TouchableOpacity, Image, ScrollView } from 'react-native'
import { CircularListService } from '../../Services/EventsService/EventsService'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CIRCULARFEEDSDETAILSSCREEN } from '../../Action/Type';
import Loader from '../../Components/Loader/Loader'
import HTML from 'react-native-render-html';
import * as styles from './Styles';
import moment from 'moment'

export default class CircularScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CircularList: [],
            loader: true
        };
    }

    //get Circular Api
    getCircularList() {
        CircularListService().then(response => {
            this.setState({ CircularList: response.data })
            this.setState({ loader: false });
        });
    }

    componentDidMount() {
        this.getCircularList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.getCircularList()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    //render CircularList using FlateList
    renderCircularListService = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.styles.innercardview} onPress={() => this.props.navigation.navigate(CIRCULARFEEDSDETAILSSCREEN, { item })}>
                <View style={{ flexDirection: 'column', marginTop: 5 }}>
                    <Text style={{ fontSize: 16, marginLeft: 15, color: '#313131', textTransform: 'capitalize' }}>{item.property.title}</Text>
                </View>
                <View style={{ marginLeft: 20, flexDirection: 'row', marginTop: 10 }} >
                    <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Fontisto name="clock" size={15} color="#6789CA" />
                            <Text style={{ fontSize: 12, marginLeft: 5, color: '#6789CA' }}>{moment(item.property.date).format('LLL')}</Text>
                        </View>
                        {
                            item.property && item.property.description && item.property.description.length ?
                                <View style={{ marginRight: 100, width: '70%', marginTop: 5, marginBottom: 5 }}>
                                    <HTML baseFontStyle={{ fontSize: 12, textTransform: 'capitalize', color: '#555555' }}
                                        html={`<html> ${item.property.description.length < 100 ? `${item.property.description}` : `${item.property.description.substring(0, 100)}...`} </html>`} />
                                </View>
                                : null
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { CircularList, loader, refreshing } = this.state
        return (
            <SafeAreaView style={styles.styles.container}>
                <View style={styles.styles.cardview}>
                    {(CircularList == null) || (CircularList && CircularList.length == 0) ?
                        (loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Circulars List Available</Text>
                            : <Loader />
                        )
                        :
                        <View style={{ marginTop: 15 }}>
                            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5D81C6" titleColor="#5D81C6" colors={["#5D81C6"]} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                                <View>
                                    <FlatList
                                        data={CircularList}
                                        renderItem={this.renderCircularListService}
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
