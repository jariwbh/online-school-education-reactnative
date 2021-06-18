import React from 'react';
import { StyleSheet, View, ActivityIndicator, SafeAreaView } from 'react-native';

const Loader = (props) => {
    return (
        <SafeAreaView style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator
                    animating={true}
                    color="#2855AE"
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
        </SafeAreaView>
    );
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    }
});
