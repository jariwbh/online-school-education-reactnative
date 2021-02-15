import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { StyleSheet, Dimensions } from 'react-native';

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
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: hp('2%'),
    },
    btnTab: {
        width: Dimensions.get('window').width / 3,
        flexDirection: 'row',
        borderColor: '#00C464',
        borderRadius: hp('2%'),
        borderWidth: 1,
        padding: 2,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#00C464'
    },
    textTabActive: {
        color: '#FFF'
    },
    textTabInActive: {
        color: '#00C464'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
})

export { styles };