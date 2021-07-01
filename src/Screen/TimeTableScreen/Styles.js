import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D81C6'
    },
    cardview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20
    },
    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 15,
    },
    btnTab: {
        width: WIDTH / 6.5,
        flexDirection: 'row',
        borderColor: '#5D81C6',
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#5D81C6'
    },
    textTabActive: {
        color: '#FFF'
    },
    textTabInActive: {
        color: '#000000'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    innercardview: {
        backgroundColor: "#FFFFFF",
        borderColor: '#bfbfbf',
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH - 30,
        marginTop: 10,
        marginBottom: 5
    }
})

export { styles };