import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
// import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from '@react-native-picker/picker';
export default class AskDoubtsScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
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
                            style={{ height: 50, width: 100 }}
                            // onValueChange={(itemValue, itemIndex) =>
                            //     this.setState({ language: itemValue })
                            underlineColorAndroid="#A5A5A5">

                            < Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>

                    </View>
                </ImageBackground>
            </View >
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

