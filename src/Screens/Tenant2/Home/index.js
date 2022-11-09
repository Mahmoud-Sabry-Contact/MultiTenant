import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AddCompanyModal from '../../../Components/AddCompanyModal'
import Button from '../../../Components/Button'
import Header from '../../../Components/Header'
import { addT2Company, getT2Companies } from '../../../Redux/Slices/Tenant2'
import styles from './styles'
import CompanyItem from '../../../Components/CompanyItem'

const Tenant2Home = (props) => {
  const { navigation } = props;
  const loading = useSelector(({ tenant2 }) => tenant2.loading);
  const companies = useSelector(({ tenant2 }) => tenant2.companies);
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const [showAddButton, setShowAddButton] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  console.log('user: ', user);

  useEffect(() => {
    if (user.admin) {
      setShowAddButton(true);
    }
    dispatch(getT2Companies());
  }, []);

  const onAddCompanyPressed = () => {
    setShowCalendarModal(true)
  }

  const onConfirmAddCompanyPressed = ({ name, address, email, phone, logo }) => {
    dispatch(addT2Company({ name, address, email, phone, logo }));
  }

  const _onProfilePressed = () => {
    navigation.navigate('Tenant2Profile');
  }

  const renderAddButton = () => {
    if (showAddButton) {
      return (
        <Button loading={loading} label={'Add Company'} customButtonContainer={styles.adminAddButton} onPress={onAddCompanyPressed} />
      )
    } else return null;
  }

  const renderCompanyItem = ({ item }) => {
    return <CompanyItem item={item} />
  }

  return (
    <ScrollView style={styles.container} >
      <Header title={`Welcome ${user.name} on ${user.tenant}`} _onProfilePressed={_onProfilePressed} />
      {showAddButton && renderAddButton()}
      <FlatList
        data={companies}
        renderItem={renderCompanyItem}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={() => dispatch(getT2Companies())}
      />
      <AddCompanyModal onConfirmPress={onConfirmAddCompanyPressed} isVisible={showCalendarModal} onCloseModal={() => setShowCalendarModal(false)} />
    </ScrollView>
  )
}

export default Tenant2Home