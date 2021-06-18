import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BackButton(props) {
    return (
        <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
            <Ionicons name="arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryIcon: {
        borderRadius: 100,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


