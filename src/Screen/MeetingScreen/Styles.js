import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native'


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
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: hp('2%'),
        shadowOpacity: 2,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
        width: wp('90%'),
        marginTop: hp('1%'),
        marginBottom: hp('2%')
    }, meetingbtn: {
        width: wp('60%'),
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: hp('5%'),
        height: hp('6%'),
        marginLeft: hp('0%'),
        marginBottom: hp('3%'),
        borderRadius: hp('2%')
    },
    meetingErrorbtn: {
        width: wp('60%'),
        backgroundColor: '#82a2e3',
        alignItems: 'center',
        marginTop: hp('5%'),
        height: hp('6%'),
        marginLeft: hp('0%'),
        marginBottom: hp('3%'),
        borderRadius: hp('2%')
    }
})


export { styles };