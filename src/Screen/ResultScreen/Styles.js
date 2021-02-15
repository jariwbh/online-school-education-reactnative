
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
        height: hp('100%'),
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('-5.5%'),

    },
    innercardview1: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('2%'),
        borderBottomLeftRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('50%'),
        marginTop: hp('2%'),
        //  height: hp('10%')
    },
    innercardview2: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        // borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('20%'),
        marginTop: hp('2%'),
        // height: hp('10%')
    },
    innercardview3: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: hp('0.2%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: hp('2%'),
        borderBottomRightRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('20%'),
        marginTop: hp('2%'),
        //  height: hp('10%')
    },
    pdfBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    pdfText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})

export { styles };