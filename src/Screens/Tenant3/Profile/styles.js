import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 10,
    },
    sectionTitle: {
        fontFamily: Fonts.Bold,
        fontSize: 22,
        color: '#3E3E3E',
    },
    sectionValue: {
        fontFamily: Fonts.Regular,
        fontSize: 18,
        color: '#3E3E3E',
    }
})

export default styles