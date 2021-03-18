import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D81C6'
    },
    inputView: {
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
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        marginBottom: hp('2%')
    },
    viewButton: {
        width: wp('60%'),
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: hp('5%'),
        height: hp('6%'),
        marginBottom: hp('3%'),
        borderRadius: hp('2%')
    },
    nextButton: {
        width: wp('30%'),
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: hp('1%'),
        height: hp('7%'),
        marginBottom: hp('3%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        borderRadius: hp('3%'),
        justifyContent: 'center'
    },
    prevButton: {
        width: wp('30%'),
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: hp('1%'),
        height: hp('7%'),
        marginBottom: hp('3%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        borderRadius: hp('3%'),
        justifyContent: 'center'
    },
    prevButtonDisable: {
        width: wp('30%'),
        backgroundColor: '#82a2e3',
        alignItems: 'center',
        marginTop: hp('1%'),
        height: hp('7%'),
        marginBottom: hp('3%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        borderRadius: hp('3%'),
        justifyContent: 'center'
    }, optionbtn: {
        width: wp('75%'),
        borderRadius: hp('3%'),
        alignItems: 'center',
        height: hp('7%'),
        borderColor: '#bfbfbf',
        borderWidth: hp('0.2%'),
        margin: hp('2%'),
        flexDirection: 'row',
    },
    optionselectedbtn: {
        width: wp('75%'),
        borderRadius: hp('3%'),
        alignItems: 'center',
        height: hp('7%'),
        borderColor: '#82a2e3',
        backgroundColor: '#82a2e3',
        borderWidth: hp('0.2%'),
        margin: hp('2%'),
        flexDirection: 'row',

    }
})

export { styles };