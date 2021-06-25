import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as SCREENNAME from '../../Action/Type'
import * as STYLES from './Styles';

const SelectResult = (props) => {
    return (
        <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
            <TouchableOpacity style={STYLES.styles.boxview} onPress={() => props.navigation.navigate(SCREENNAME.QUIZRESULTSCREEN)}>
                <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_results_yiabkk.png' }}
                        style={{ height: 50, width: 42 }}
                    />
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 16, color: '#000000' }}>Online Result</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={STYLES.styles.boxview} onPress={() => props.navigation.navigate(SCREENNAME.OFFLINERESULTLISTSCREEN)}>
                <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 0, flex: 1, top: 0 }}>
                    <Image source={{ uri: 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613451581/school%20Images/ic_results_yiabkk.png' }}
                        style={{ height: 50, width: 42 }}
                    />
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 16, color: '#000000' }}>Offlie Result</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SelectResult;


