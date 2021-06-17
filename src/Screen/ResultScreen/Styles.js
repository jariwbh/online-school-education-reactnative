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
        marginTop: -30,
    },
    innercardview1: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: 0.5,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH / 2,
        marginTop: 15,
        //  height: 100
    },
    innercardview2: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: 0.5,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        // borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH / 3,
        marginTop: 15,
        // height: 100
    },
    innercardview3: {
        //  flex: 1,
        // borderColor: '#2855AE',
        // borderWidth: 0.5,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH / 3,
        marginTop: 15,
        // height: 100
    },
    pdfBtn: {
        flexDirection: 'row',
        width: WIDTH / 2 + 50,
        backgroundColor: "#2855AE",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    pdfText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // QuizResultScreen style
    cardView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
    },
    innerCardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH - 30,
        marginTop: 10,
        marginBottom: 10
    },
})

export { styles };