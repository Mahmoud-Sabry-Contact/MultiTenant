import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../../Components/Header'
import styles from './styles'

const Tenant2Profile = (props) => {
  const { navigation } = props;
  const user = useSelector(({ auth }) => auth.user);
  
  console.log('user: ', user);

  const _onHomePressed = () => {
    navigation.navigate('Tenant2Home');
  }

  const renderSection = (title, value) => {

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}: </Text>
        <Text style={styles.sectionValue}>{value}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} >
      <Header _onHomePressed={_onHomePressed} title={`Welcome ${user.name} on ${user.tenant}`} />
      {renderSection('Name', user.name)}
      {renderSection('Email', user.email)}
      {renderSection('Tenant', user.tenant)}
      {renderSection('Admin', user.admin ? 'Yes' : 'No')}
    </ScrollView>
  )
}

export default Tenant2Profile