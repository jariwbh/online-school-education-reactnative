import React, { Component } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import SchoolGalleryService from '../../Services/SchoolGalleryService/SchoolGalleryService';
import { View, SafeAreaView, Image, FlatList, ScrollView } from 'react-native'
import Loader from '../../Components/Loader/Loader'
import * as STYLES from './Styles';

export default class SchoolGalleryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SchoolGalleryList: [],
            loader: true
        };
    }

    //Render SchoolGallery using FlatList
    renderSecondRoute = ({ item }) => (
        <View style={{ marginTop: hp('2%'), justifyContent: "space-between", margin: 15 }}>
            <Image source={{ uri: item.property.documents[0].attachment }}
                style={{ height: hp('30%'), width: wp('40%'), borderRadius: hp('2%') }} />
        </View>
    )

    //SchoolGallery Service Api
    getSchoolGalleryService() {
        SchoolGalleryService().then(response => {
            if (response.status == 200 && response.data != null) {
                this.setState({ SchoolGalleryList: response.data })
                this.wait(1000).then(() => this.setState({ loader: false }));
            }
        })
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.getSchoolGalleryService();
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(this.state.SchoolGalleryList == null) || (this.state.SchoolGalleryList && this.state.SchoolGalleryList.length == 0) ?
                        (this.state.loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: hp('2.5%'), color: '#747474', marginTop: hp('10%') }}>No Events & Programs Available</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignItems: 'center', marginBottom: hp('1%') }}>
                                <FlatList
                                    numColumns={2}
                                    data={this.state.SchoolGalleryList}
                                    renderItem={this.renderSecondRoute}
                                    keyExtractor={item => item._id}
                                />
                            </View>
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        )
    }
}
