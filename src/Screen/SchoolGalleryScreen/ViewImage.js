import React from 'react'
import { View, Image, SafeAreaView } from 'react-native'

export default function ViewImage(props) {
    const viewimage = props.route.params.viewimage;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#5D81C6' }}>
            <View style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 20
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: viewimage }} resizeMode='cover' style={{ height: '80%', width: '100%', borderRadius: 10 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}
