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
        marginTop: hp('7%'),

    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 15,
    },
    btnTab: {
        width: Dimensions.get('window').width / 6.5,
        flexDirection: 'row',
        borderColor: '#00C464',
        borderRadius: hp('2%'),
        borderWidth: 1,
        padding: 5,
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
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderColor: '#bfbfbf',
        borderWidth: hp('0.2%'),
        borderRadius: hp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: wp('90%'),
        marginTop: hp('2%')
    },
})
export { styles };