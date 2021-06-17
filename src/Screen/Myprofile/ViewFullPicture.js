import React from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import * as STYLES from './Styles';

export default function ViewFullPicture(props) {
    const studentProfile = props.route.params.studentProfileImage;
    return (
        <SafeAreaView style={STYLES.styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: studentProfile }} resizeMode='cover' style={{ height: '80%', width: '100%', borderRadius: 5 }} />
            </View>
        </SafeAreaView>
    )
}
