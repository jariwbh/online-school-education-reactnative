import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BackButton(props) {
    return (
        <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
            <AntDesign name="left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryIcon: {
        width: 20,
        height: 10,
        borderRadius: 100,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


