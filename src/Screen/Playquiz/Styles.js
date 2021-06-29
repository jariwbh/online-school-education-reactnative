import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D81C6'
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20
    },
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH - 30,
        marginBottom: 20
    },
    viewButton: {
        width: WIDTH / 2 + 50,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 25,
        height: 40,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center'
    },
    nextButton: {
        width: WIDTH / 3,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 5,
        height: 40,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'center'
    },
    prevButton: {
        width: WIDTH / 3,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 5,
        height: 40,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'center'
    },
    prevButtonDisable: {
        width: WIDTH / 3,
        backgroundColor: '#82a2e3',
        alignItems: 'center',
        marginTop: 5,
        height: 40,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'center'
    },
    optionbtn: {
        width: WIDTH - 90,
        borderRadius: 100,
        alignItems: 'center',
        height: 40,
        borderColor: '#bfbfbf',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
    },
    optionselectedbtn: {
        width: WIDTH - 90,
        borderRadius: 100,
        alignItems: 'center',
        height: 40,
        borderColor: '#82a2e3',
        backgroundColor: '#82a2e3',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
    }
})

export { styles };