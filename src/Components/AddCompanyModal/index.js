import React, { useEffect, useState } from 'react'
import { View, Text, Modal, Pressable, Alert } from 'react-native'
import styles from './styles'
import Button from '../Button/index';
import InputFieldWithLabel from '../InputFieldWithLabel';

const AddCompanyModal = ({ onConfirmPress, onCloseModal, isVisible }) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [logo, setLogo] = useState('');

    const _onConfirmPress = () => {
        if (name && address && email && phone && logo) {
            // Data Should be validated first
            onConfirmPress({ name, address, email, phone, logo });
            onCloseModal();
        } else { Alert.alert('Error', 'Please fill all the fields.', [{ text: 'OK', onPress: onCloseModal() }]) }
    }

    return (
        <Modal
            animated
            animationType='slide'
            visible={isVisible}
            transparent
            style={{ flex: 1 }}
            onDismiss={onCloseModal}
        >
            <View style={styles.modalContentContainer} >
                <InputFieldWithLabel
                    key='companyName'
                    _key='companyNameInput'
                    label='Company Name'
                    placeHolder='Enter your company name'
                    value={name}
                    onChange={setName}
                />
                <InputFieldWithLabel
                    key='companyEmail'
                    _key='companyEmailInput'
                    label='E-mail'
                    placeHolder='Enter your company E-mail'
                    value={email}
                    onChange={setEmail}
                />
                <InputFieldWithLabel
                    key='companyAddress'
                    _key='companyAddressInput'
                    label='Address'
                    placeHolder='Enter your company address'
                    value={address}
                    onChange={setAddress}
                />
                <InputFieldWithLabel
                    key='companyPhone'
                    _key='companyPhoneInput'
                    label='Phone'
                    placeHolder='Enter your company phone'
                    value={phone}
                    onChange={setPhone}
                />
                <InputFieldWithLabel
                    key='companyLogo'
                    _key='companyLogoInput'
                    label='Company Logo'
                    placeHolder='Enter your company logo url'
                    value={logo}
                    onChange={setLogo}
                />
                <Button customButtonContainer={styles.continueButtonContainer} label={'Confirm'} onPress={_onConfirmPress} />
            </View>
        </Modal>
    )
}

export default AddCompanyModal;