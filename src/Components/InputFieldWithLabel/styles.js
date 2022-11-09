import { StyleSheet, Dimensions } from 'react-native'
import { Assets } from '../../assets';
const { width } = Dimensions.get('window');

const { fonts } = Assets;

const styles = StyleSheet.create({
    inputFieldLabel: {
        fontFamily: fonts.Regular,
        fontSize: 16,
        color: '#3E3E3E',
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 25,
    },
    inputFieldTextContainer: {
        flexDirection: 'row',
        width: width - 60,
        height: 55,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 27.5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
    },
    inputFieldText:{
        flex: 1,
        height: 55,
        fontFamily: fonts.Regular,
        fontSize: 16,
        lineHeight: 22,
        color: '#3E3E3E',
    },
    inputFieldTextWithIcon: {
        height: 55,
        fontFamily: fonts.Regular,
        fontSize: 16,
        lineHeight: 22,
        color: '#3E3E3E',
        width: width - 120,
    },
    iconImage: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    }
})

export default styles