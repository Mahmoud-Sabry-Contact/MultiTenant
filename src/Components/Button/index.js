import React from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'
import styles from './styles'

const Button = ({ customButtonContainer, customButtonText, label, onPress, loading }) => {

    if (loading) {
        return (
            <Pressable style={[styles.buttonContainer, customButtonContainer]}>
                <ActivityIndicator size='large' color={'#ffff'} />
            </Pressable>
        )
    }
    return (
        <Pressable style={[styles.buttonContainer, customButtonContainer]} onPress={() => onPress()}>
            <Text style={[styles.buttonText, customButtonText]}>{label}</Text>
        </Pressable>
    )
}

export default Button;