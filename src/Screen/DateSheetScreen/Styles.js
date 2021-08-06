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
        flex: 1,
        width: WIDTH - 20
    }
})

export { styles };