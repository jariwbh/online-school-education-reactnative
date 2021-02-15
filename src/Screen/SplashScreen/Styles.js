import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'cover',
        flex: 1,
        height: height,
        width: width
    }
})

export { styles };