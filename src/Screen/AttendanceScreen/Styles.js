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
    cardViewAbsent: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: WIDTH - 40,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#E92020'
    },
    cardViewHolidays: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: WIDTH - 40,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#D4E2FF'
    },
    cardViewAttendDays: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: WIDTH - 40,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#0BAC00'
    },
})

export { styles };