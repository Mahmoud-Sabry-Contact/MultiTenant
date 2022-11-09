import React from 'react'
import { TextInput, Text, View, Image, Pressable } from 'react-native'
import styles from './styles'

const InputFieldWithLabel = ({ _key, label, placeHolder, value, onChange, password, icon, onPress }) => {

    const _onIconPress = () => {
        if (onPress) {
            onPress();
        }
    }

    return (
        <View>
            <Text style={styles.inputFieldLabel}>{label}</Text>
            <View style={styles.inputFieldTextContainer}>
                <TextInput
                    key={_key}
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeHolder}
                    style={icon ? styles.inputFieldTextWithIcon : styles.inputFieldText}
                    secureTextEntry={password}
                />
                {icon &&
                    <Pressable onPress={_onIconPress}>
                        <Image source={icon} style={styles.iconImage} />
                    </Pressable>
                }
            </View>
        </View>
    )
}

export default InputFieldWithLabel