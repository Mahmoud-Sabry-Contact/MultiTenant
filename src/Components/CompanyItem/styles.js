import { StyleSheet } from 'react-native';
import { Assets } from '../../assets';

const { fonts } = Assets

const styles = StyleSheet.create({
    companyContainer: {
        flexDirection: 'row',
        marginVertical: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        marginHorizontal: 20,
    },
    companyLogo: {
        width: 95,
        height: 95,
        borderRadius: 10,
    },
    companyOverViewDetailsContainer: {
        flex: 1,
        marginStart: 15,
    },
    companyOverViewNameText: {
        fontFamily: fonts.Bold,
        fontSize: 18,
        fontWeight: '700',
        color: '#3E3E3E',
    },
    companyOverViewTypesText: {
        fontFamily: fonts.Regular,
        fontSize: 14,
        fontWeight: '400',
        color: '#3E3E3E99'
    },
})

export default styles