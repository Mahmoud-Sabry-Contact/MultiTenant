import React from 'react'
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import { Assets } from '../../assets';
import Button from '../../Components/Button';
import styles from './styles'
import { useSelector } from 'react-redux';

const Onboarding = (props) => {
    const { navigation } = props;
    const { images: { screens: { onboardingTravel } } } = Assets;
    const store = useSelector((store) => store);
    console.log('store: ', store);

    const navigateToAuth = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={onboardingTravel} style={styles.onboardingImageContainer} />
            <View style={styles.onboardingContentContainer}>
                <Text style={styles.onboardingTitle}>Travel with no worry</Text>
                <Text style={styles.onboardingDescription}>
                    You can now experience the next level travel experience for hotel bookings.
                </Text>
            </View>
            <Button label={'Next'} onPress={navigateToAuth} />
        </SafeAreaView>
    )
}

export default Onboarding