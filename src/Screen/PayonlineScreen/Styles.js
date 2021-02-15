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
        marginTop: hp('7%'),

    },
    TextInput: {
        width: wp('80%'),
        height: hp('8%'),
        fontSize: hp('3%'),
        marginLeft: hp('5%'),
        marginTop: hp('-1%'),
    },
    payBtn: {
        flexDirection: 'row',
        width: wp('85%'),
        backgroundColor: "#2855AE",
        borderRadius: wp('2%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    payText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
})
export { styles };