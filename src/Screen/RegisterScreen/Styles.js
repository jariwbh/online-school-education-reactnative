import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: wp('100%'),
        height: hp('100%'),
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('25%'),
    },
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('2.5%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    regBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    regBtnLoading: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#6789CA",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    regText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
    },
    baseText: {
        fontWeight: 'normal',
        color: '#2855AE',
        fontSize: hp('2%'),
    },
    innerText: {
        color: '#737373',
        fontSize: hp('2%'),
    },
})

export { styles };