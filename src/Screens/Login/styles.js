import { StyleSheet, Dimensions } from 'react-native'
import { Assets } from '../../assets';
const { width, height} = Dimensions.get('window');

const { fonts } = Assets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center',
    },
    forgetPasswordText: {
        fontFamily: fonts.Regular,
        fontSize: 14,
        fontWeight: '400',
        color: '#3E3E3ECC',
        marginVertical: 30,
        alignSelf: 'flex-end',
        marginHorizontal: 25,
        lineHeight: 25,
    },
    loginButtonContainer: {
        position: 'relative',
        marginTop: 30,
        width: width - 50,
    }
})

export default styles