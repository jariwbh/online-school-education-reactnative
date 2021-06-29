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
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        borderColor: '#2855AE',
        borderWidth: 1,
        borderRadius: 10,
        width: WIDTH - 30,
        marginTop: 10
    },
    TextInput: {
        width: WIDTH / 2,
        height: 45,
        fontSize: 14,
        marginTop: -5,
    },
    TextInput1: {
        width: WIDTH - 30,
        height: 45,
        fontSize: 14,
        marginLeft: 20,
        marginTop: -5
    }
})
export { styles };