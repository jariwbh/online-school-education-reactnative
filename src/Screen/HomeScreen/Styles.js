import { Dimensions, StyleSheet } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5D81C6",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: WIDTH,
        height: HEIGHT,
    },
    inputView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 50
    },
    loaderView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 150
    },
    cardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: 180,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardView: {
        flexDirection: 'column',
        backgroundColor: "#F5F6FC",
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: 180,
        height: 140,
    }
})

export { styles };