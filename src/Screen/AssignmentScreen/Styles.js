import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH - 30,
        marginTop: 5,
        marginBottom: 10
    },
    selectFilebtn: {
        width: WIDTH / 2 + 40,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        marginBottom: 25,
        borderRadius: 10
    },
    selectFilebtnDisable: {
        width: WIDTH / 2 + 40,
        backgroundColor: '#6789CA',
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        marginBottom: 25,
        borderRadius: 10
    },
    submitButton: {
        width: WIDTH - 60,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        marginBottom: 25,
        borderRadius: 10
    },
    downloadButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: WIDTH - 60,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        marginBottom: 25,
        borderRadius: 10
    },
    submitButtonDisable: {
        width: WIDTH - 60,
        backgroundColor: '#6789CA',
        alignItems: 'center',
        marginTop: 20,
        height: 35,
        marginBottom: 25,
        borderRadius: 10
    },
    AssignmentCardview: {
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: '#000000',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        width: WIDTH - 30,
        marginTop: 10
    },
})

export { styles };