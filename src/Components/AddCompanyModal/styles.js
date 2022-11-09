import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../Utils/Dimensions'
import { Assets } from '../../assets';
const { fonts } = Assets;

const styles = StyleSheet.create({
    modalContentContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: hp(692),
        backgroundColor: '#FAFAFA',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: hp(25),
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    continueButtonContainer: {
        width: wp(325),
    },
})

export default styles