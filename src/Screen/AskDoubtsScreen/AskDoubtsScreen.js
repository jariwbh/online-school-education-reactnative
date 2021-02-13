import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
// import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from '@react-native-picker/picker';
export default class AskDoubtsScreen extends Component {
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Ask Doubt</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Select Teacher</Text>
                        </View>
                        <Picker
                            //  selectedValue={this.state.language}
                            style={{ height: hp('5%'), width: wp('85%'), marginLeft: hp('4%') }}
                            // onValueChange={(itemValue, itemIndex) =>
                            //     this.setState({ language: itemValue })
                            underlineColorAndroid="#A5A5A5" >

                            < Picker.Item label="Aalexa Clark" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <View resizeMode="" style={{ alignItems: 'center', marginTop: hp('0%'), flexDirection: 'row', marginLeft: hp('5%'), marginRight: hp('6%') }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#AAAAAA' }} />
                        </View>
                        <View style={{ marginTop: hp('7%'), marginLeft: hp('5%') }}>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Select Subject</Text>
                        </View>
                        <Picker
                            //  selectedValue={this.state.language}
                            style={{ height: hp('5%'), width: wp('85%'), marginLeft: hp('4%') }}
                            // onValueChange={(itemValue, itemIndex) =>
                            //     this.setState({ language: itemValue })
                            underlineColorAndroid="#A5A5A5" >

                            < Picker.Item label="Math" value="java" />
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
                                    style={styles.TextInput}
                                    placeholder="Factoring a sum or difference of two cubes"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: hp('3%'), marginLeft: hp('5%') }}>
                                <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%') }}>Doubt Description</Text>
                            </View>
                            <View >
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="--"
                                    placeholderTextColor="#323643"
                                    underlineColorAndroid="#A5A5A5"
                                />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('8%'), }}>
                            <TouchableOpacity style={styles.sendBtn} onPress={() => { }} >
                                <Text style={styles.sendText}>SEND </Text>
                                {/* <MaterialIcons name="arrow-right-alt" size={24} color="#FFFFFF" /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100%'),
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('7%'),

    },
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('2.5%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    sendBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    sendText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})

