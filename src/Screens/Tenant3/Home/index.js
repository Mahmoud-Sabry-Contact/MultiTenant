import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AddCompanyModal from '../../../Components/AddCompanyModal'
import Button from '../../../Components/Button'
import CompanyItem from '../../../Components/CompanyItem'
import Header from '../../../Components/Header'
import { addT3Company, getT3Companies } from '../../../Redux/Slices/Tenant3'
import styles from './styles'

const Tenant3Home = (props) => {
  const { navigation } = props;
  const loading = useSelector(({ tenant3 }) => tenant3.loading);
  const companies = useSelector(({ tenant3 }) => tenant3.companies);
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const [showAddButton, setShowAddButton] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  console.log('user: ', user);

  useEffect(() => {
    if (user.admin) {
      setShowAddButton(true);
    }
    dispatch(getT3Companies());
  }, []);

  const onAddCompanyPressed = () => {
    setShowCalendarModal(true)
  }

  const onConfirmAddCompanyPressed = ({ name, address, email, phone, logo }) => {
    dispatch(addT3Company({ name, address, email, phone, logo }));
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
      <Header title={`Welcome ${user.name} on ${user.tenant}`} />
      {showAddButton && renderAddButton()}
      <FlatList
        data={companies}
        renderItem={renderCompanyItem}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={() => dispatch(getT3Companies())}
      />
      <AddCompanyModal onConfirmPress={onConfirmAddCompanyPressed} isVisible={showCalendarModal} onCloseModal={() => setShowCalendarModal(false)} />
    </ScrollView>
  )
}

export default Tenant3Home