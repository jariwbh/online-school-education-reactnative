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
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp('5%'),
        borderTopRightRadius: hp('5%'),
        marginTop: hp('1%'),
        marginTop: hp('10%'),
    },
})

export { styles };