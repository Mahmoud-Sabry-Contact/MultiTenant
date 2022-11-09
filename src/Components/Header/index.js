import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fonts } from '../../assets/fonts'

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: Fonts.Bold,
        color: '#000',
    }
})