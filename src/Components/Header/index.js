import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { Assets } from '../../assets'
import { Fonts } from '../../assets/fonts'

const Header = ({ title, _onProfilePressed, _onHomePressed }) => {

    const { images: { common: { profile, home } } } = Assets;

    const profilePressed = () => {
        if (_onProfilePressed) {
            _onProfilePressed();
        }
    }
    const homePressed = () => {
        if (_onHomePressed) {
            _onHomePressed();
        }
    }

    return (
        <View style={styles.headerContainer}>
            <Pressable onPress={homePressed}>
                <Image source={home} style={styles.profile} />
            </Pressable>
            <Text>{title}</Text>
            <Pressable onPress={profilePressed}>
                <Image source={profile} style={styles.profile} />
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: Fonts.Bold,
        color: '#000',
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 5,
    }
})