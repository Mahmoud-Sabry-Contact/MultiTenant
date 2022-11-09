import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import AppStack from '../Navigation/AppStack';
import { Provider } from 'react-redux';
import store from '../Redux/stores';

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <NavigationContainer >
                    <AppStack />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})