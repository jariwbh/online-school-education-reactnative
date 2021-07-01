import { StyleSheet, Dimensions } from 'react-native'
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
        marginTop: 20,
    },
    innercardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        width: WIDTH - 30,
        marginTop: 5,
        marginBottom: 10,
        borderColor: '#EEEEEE',
        borderWidth: 0.5
    },
    meetingbtn: {
        width: WIDTH / 2 + 50,
        backgroundColor: '#2855AE',
        alignItems: 'center',
        marginTop: 25,
        height: 40,
        marginBottom: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    meetingErrorbtn: {
        width: WIDTH / 2 + 50,
        backgroundColor: '#82a2e3',
        alignItems: 'center',
        marginTop: 25,
        height: 40,
        marginBottom: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export { styles };