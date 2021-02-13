import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'

export default class SupportScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
                    <View style={{ marginTop: hp('8%'), flexDirection: 'row', marginLeft: hp('3%') }}>
                        <AntDesign name="left" size={24} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: hp('3%'), fontWeight: 'bold', marginLeft: hp('3%') }}>Support</Text>
                    </View>
                    <View style={styles.cardview}>
                        <View style={{ marginTop: hp('7%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/image/blob.png')} style={{ height: 120, width: 120, }}
                            />
                            <Image source={require('../../../assets/image/support_.png')} style={{ height: 120, width: 120, position: 'absolute' }}
                            />
                        </View>
                        <View style={{ marginTop: hp('4%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#313131', fontSize: hp('4%') }}>Get Support</Text>
                        </View>
                        <View style={{ marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>For any support request regards your</Text>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>  orders or deliveries please feel free to</Text>
                            <Text style={{ color: '#A5A5A5', fontSize: hp('2.5%'), marginLeft: hp('0%'), marginRight: hp('0%') }}>  speak with us at below.</Text>
                        </View>
                        <View style={{ marginTop: hp('15%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#313131', fontSize: hp('3%') }}>Call us - +91 7838XXXXXX</Text>
                            <Text style={{ color: '#313131', fontSize: hp('3%') }}>Mail us - syalfreelance@gmail.com</Text>
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
})