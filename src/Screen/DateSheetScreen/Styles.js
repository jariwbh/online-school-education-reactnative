import { StyleSheet, Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGH = Dimensions.get('window').height;

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
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        width: WIDTH / 3 + 30,
        height: 150
    }
})

export { styles };