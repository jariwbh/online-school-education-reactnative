import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100 %'),
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('7%'),

    },
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderColor: '#2855AE',
        borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        width: wp('90%'),
        marginTop: hp('2%')
    },
    TextInput: {
        width: wp('40%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('0%'),
        marginTop: hp('-1%'),
    },
    TextInput1: {
        width: wp('90%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('3%'),
        marginTop: hp('-1%'),
    },
})
export { styles };