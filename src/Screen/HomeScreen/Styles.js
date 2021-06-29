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
        marginTop: 100
    },
    loaderView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 210
    },
    cardview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderColor: '#5D81C6',
        borderWidth: 1,
        width: WIDTH / 3 + 40,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginTop: -40
    },
    cardView: {
        flexDirection: 'column',
        backgroundColor: "#F5F6FC",
        borderRadius: 15,
        shadowRadius: 3,
        width: WIDTH / 3 + 40,
        height: 140,
        margin: 5
    }
})

export { styles };