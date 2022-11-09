import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Alert } from 'react-native'
import InputFieldWithLabel from '../../Components/InputFieldWithLabel'
import styles from './styles'
import { Assets } from '../../assets';
import Button from '../../Components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../../Redux/Slices/App/auth';
import { DB, getTenantCompanies, tenantCompany } from '../../Utils/Database';

const Login = (props) => {
    const { navigation } = props;
    const { images: { common: { eyeOff } } } = Assets;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const loading = useSelector(({ auth }) => auth.authLoading);
    const user = useSelector(({ auth }) => auth.user);
    const dispatch = useDispatch();

    const loginPressed = async () => {
        if (email && password) {
            dispatch(checkAuth({ email, password }));
        } else {
            Alert.alert('Error', 'Please enter email and password.', [{ text: 'OK' }]);
        }
    }

    useEffect(() => {
        console.log('user: ', user);
        if (user) {
            switch (user.tenant) {
                case 'tenant1':
                    navigation.navigate('Tenant1Stack');
                    break;
                case 'tenant2':
                    navigation.navigate('Tenant2Stack');
                    break;
                case 'tenant3':
                    navigation.navigate('Tenant3Stack');
                    break;
                default:
                    break;
            }
        }
    }, [user])


    return (
        <View style={styles.container}>
            <InputFieldWithLabel key='emailInput' _key='emailInput' label='E-mail' placeHolder='Enter your E-mail' value={email} onChange={setEmail} />

            <InputFieldWithLabel
                key='passwordInput'
                _key='passwordInput'
                label='Password'
                placeHolder='Enter your Password'
                value={password}
                onChange={setPassword}
                password={!showPassword}
                icon={eyeOff}
                onPress={() => setShowPassword(!showPassword)}
            />

            <Pressable >
                <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
            </Pressable>

            <Button loading={loading} onPress={loginPressed} label={'Login'} customButtonContainer={styles.loginButtonContainer} />
        </View>
    )
}

export default Login