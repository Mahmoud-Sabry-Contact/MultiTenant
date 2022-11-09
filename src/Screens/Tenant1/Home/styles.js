import { StyleSheet } from 'react-native';
import { Assets } from '../../../assets';

const { fonts } = Assets

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    adminAddButton: {
        position: 'relative',
        bottom: 0,
        right: 0,
        marginTop: 20,
    },
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