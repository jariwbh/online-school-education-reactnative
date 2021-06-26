import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Entypo from 'react-native-vector-icons/Entypo';
const WIDTH = Dimensions.get('window').width;

const WebViewScreen = (props) => {
    const URI = props.route.params.data;
    const [title, settitle] = useState('');

    const _onNavigationStateChange = (webViewState) => {
        settitle(webViewState.url);
    }

    useEffect(() => {
    }, [title]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 15 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                        <Entypo name='cross' size={28} color='#000000' />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: WIDTH / 5 }} >
                    <Text style={{ color: '#34A853' }}>{title}</Text>
                </View>
            </View>
            <WebView
                style={{ flex: 1 }}
                source={{ uri: URI }}
                onNavigationStateChange={_onNavigationStateChange}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={false}
            />
        </SafeAreaView>
    )
}

export default WebViewScreen;


