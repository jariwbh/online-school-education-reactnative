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
})

export { styles };