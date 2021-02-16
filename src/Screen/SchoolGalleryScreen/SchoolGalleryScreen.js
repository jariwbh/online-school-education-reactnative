import React, { Component } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import SchoolGalleryService from '../../Services/SchoolGalleryService/SchoolGalleryService';
import { Text, View, SafeAreaView, Image, FlatList, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as STYLES from './Styles';

export default class SchoolGalleryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SchoolGalleryList: [],
            loader: true
        };
    }

    renderGallery({ item }) {
        <View style={{ marginTop: hp('3%'), alignItems: 'center' }}>
            <Image source={{ uri: item.property.documents[0].attachment }}
                style={{ height: hp('30%'), width: wp('30%'), borderRadius: hp('2%') }} />
        </View>
    }

    getSchoolGalleryService() {
        SchoolGalleryService().then(response => {
            if (response.status == 200 && response.data != null) {
                this.setState({ SchoolGalleryList: response.data })
            }
        })
    }

    componentDidMount() {
        this.getSchoolGalleryService();
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                    <AntDesign name="left" size={24} color="#FFFFFF" />
                    <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>School Gallery</Text>
                </View>
                <View style={STYLES.styles.cardview}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                            <FlatList
                                numColumns={2}
                                data={this.state.SchoolGalleryList}
                                renderItem={this.renderGallery}
                                keyExtractor={item => item._id}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
