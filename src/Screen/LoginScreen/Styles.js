import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: WIDTH,
        height: HEIGHT,
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
        height: HEIGHT - 200
    },
    TextInput: {
        width: WIDTH - 60,
        height: 50,
        fontSize: 14,
        marginLeft: 30
    },
    loginBtn: {
        flexDirection: 'row',
        width: WIDTH - 60,
        backgroundColor: "#2855AE",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtnLoading: {
        flexDirection: 'row',
        width: WIDTH - 60,
        backgroundColor: "#6789CA",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    baseText: {
        fontWeight: 'normal',
        color: '#2855AE',
        fontSize: 12,
    },
    innerText: {
        color: '#737373',
        fontSize: 12,
    },
})

export { styles };