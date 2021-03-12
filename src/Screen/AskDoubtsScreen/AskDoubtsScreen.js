import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { Picker } from '@react-native-picker/picker';
import * as STYLES from './Styles';

export default class AskDoubtsScreen extends Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         visible: false

    //     };
    // }
    // componentDidMount() {
    //     var self = this;
    //     setInterval(() => {
    //         self.setState({
    //             visible: !this.state.visible
    //         });
    //     }, 5000);
    // }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    {/* <View style={
                        visible = this.state.visible,
                        isModal = true,
                        isHUD = true,
                        hudColor = "#000000",
                        color = "#FFFFFF"} > */}
                    <View style={STYLES.styles.cardview}>
                        <View style={{ marginTop: hp('5%'), marginLeft: hp('5%') }}>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Select Teacher</Text>
                        </View>
                        <Picker
                            //  selectedValue={this.state.language}
                            style={{ height: hp('5%'), width: wp('85%'), marginLeft: hp('4%') }}
                            // onValueChange={(itemValue, itemIndex) =>
                            //     this.setState({ language: itemValue })
                            underlineColorAndroid="#A5A5A5" >
                            <Picker.Item label="Aalexa Clark" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <View resizeMode="" style={{ alignItems: 'center', marginTop: hp('0%'), flexDirection: 'row', marginLeft: hp('5%'), marginRight: hp('6%') }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                        </View>
                        <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Select Subject</Text>
                        </View>
                        <Picker
                            //  selectedValue={this.state.language}
                            style={{ height: hp('5%'), width: wp('85%'), marginLeft: hp('4%') }}
                            // onValueChange={(itemValue, itemIndex) =>
                            //     this.setState({ language: itemValue })
                            underlineColorAndroid="#A5A5A5" >

                            <Picker.Item label="Math" value="java" />
                            <Picker.Item label="English" value="js" />
                        </Picker>
                        <View style={{ alignItems: 'center', marginTop: hp('0%'), flexDirection: 'row', marginLeft: hp('5%'), marginRight: hp('6%') }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                        </View>
                        <View>
                            <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Title</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="Factoring a sum or difference of two cubes"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Doubt Description</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                            <TouchableOpacity style={STYLES.styles.sendBtn} onPress={() => { }} >
                                <Text style={STYLES.styles.sendText}>SEND </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/1.png')} style={{ width: wp('100%'), height: hp('22%'), marginTop: hp('4%') }} />
                        </View>
                    </View>
                    {/* </View> */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}


