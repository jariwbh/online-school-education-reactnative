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
    cardviewResult: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innercardview1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        width: WIDTH / 3
    },
    innercardview2: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        width: WIDTH / 3
    },
    innercardview3: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        width: WIDTH / 3
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
        borderColor: '#EEEEEE',
        borderWidth: 0.5,
        shadowOpacity: 1,
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
    boxview: {
        flexDirection: 'column',
        backgroundColor: "#F5F6FC",
        borderRadius: 15,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        width: WIDTH / 3 + 40,
        height: 140,
    },
    innercardview: {
        flexDirection: 'column',
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
        marginBottom: 10
    }
})

export { styles };