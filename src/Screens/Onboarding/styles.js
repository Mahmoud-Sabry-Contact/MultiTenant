import { StyleSheet, Text, View } from 'react-native'
import { Assets } from '../../assets';
const { fonts } = Assets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff' //'#E5E5E5',
    },
    onboardingImageContainer: {
        marginVertical: 15,
    },
    onboardingTitle: {
        fontSize: 24,
        color: '#000',
        fontFamily: fonts.bold
    },
    onboardingContentContainer: {
        marginVertical: 15,
        marginStart: 25,
    },
    onboardingDescription: {
        fontSize: 16,
        color: '#3E3E3ECC',
        lineHeight: 28,
        marginTop: 20,
        fontFamily: fonts.regular,
    }
})

export default styles