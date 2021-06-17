import React, { Component } from 'react'
import SchoolGalleryService from '../../Services/SchoolGalleryService/SchoolGalleryService';
import { View, SafeAreaView, Image, FlatList, ScrollView, Text, Dimensions, TouchableOpacity } from 'react-native'
import Loader from '../../Components/Loader/Loader'
import * as STYLES from './Styles';
import * as SCREEN from '../../Action/Type';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
        <TouchableOpacity onPress={() => this.viewImage(item)}
            style={{ marginTop: 15, justifyContent: "space-between", margin: 15 }}>
            <Image source={{ uri: item.property.documents[0].attachment }}
                style={{ height: HEIGHT / 3, width: WIDTH / 3 + 20, borderRadius: 10 }} />
        </TouchableOpacity>
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

    viewImage(val) {
        let viewimage;
        if (val.property.documents[0].attachment != null) {
            viewimage = val.property.documents[0].attachment
            this.props.navigation.navigate(SCREEN.VIEWIMAGE, { viewimage })
        }
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.getSchoolGalleryService();
        this.wait(3000).then(() => this.setState({ loader: false }));
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={STYLES.styles.cardview}>
                    {(this.state.SchoolGalleryList == null) || (this.state.SchoolGalleryList && this.state.SchoolGalleryList.length == 0) ?
                        (this.state.loader == false ?
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#747474', marginTop: 50 }}>No Data Found</Text>
                            : <Loader />
                        )
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignItems: 'center', marginBottom: 5 }}>
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
