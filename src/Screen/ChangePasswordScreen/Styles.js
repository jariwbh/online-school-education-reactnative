import { StyleSheet, Dimensions } from 'react-native'
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
        marginTop: 20,
    },
    TextInput: {
        width: WIDTH - 60,
        height: 40,
        fontSize: 14,
        marginLeft: 25,
        marginTop: -5,
    },
    cpBtn: {
        flexDirection: 'row',
        width: WIDTH - 60,
        backgroundColor: "#2855AE",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cpText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cpBtnLoading: {
        flexDirection: 'row',
        width: WIDTH - 60,
        backgroundColor: "#6789CA",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
})

export { styles };