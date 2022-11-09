import { StyleSheet, Text, View } from 'react-native'
import { Assets } from '../../assets';
const { fonts } = Assets;

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        width: 165,
        height: 57,
        borderRadius: 28.5,
        backgroundColor: '#00A76E',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        lineHeight: 25,
        fontFamily: fonts.Regular,
        textAlign: 'center'
    }
})

export default styles