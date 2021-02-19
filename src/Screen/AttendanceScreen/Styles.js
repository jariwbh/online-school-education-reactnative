import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D81C6'
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('4%'),

    },
    cardViewAbsent: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        width: wp('90%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        borderWidth: 3,
        borderColor: '#E92020'
    },
    cardViewHolidays: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        width: wp('90%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        borderWidth: 3,
        borderColor: '#D4E2FF'
    },
    cardViewAttendDays: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        width: wp('90%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        borderWidth: 3,
        borderColor: '#0BAC00'
    },
})

export { styles };