import React from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './Styles';

export default function ViewFullPicture(props) {
    const studentProfile = props.route.params.studentProfileImage;
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View>
                <Image source={{ uri: studentProfile }} resizeMode='cover' style={{ height: hp('80%'), width: wp('100%'), borderRadius: hp('1%') }} />
            </View>
        </SafeAreaView>
    )
}
