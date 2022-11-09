import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const CompanyItem = ({ item }) => {
    if (item.name) {
        return (
            <View style={styles.companyContainer}>
                <Image source={{ uri: item.logo }} style={styles.companyLogo} />
                <View style={styles.companyOverViewDetailsContainer}>
                    <Text style={styles.companyOverViewNameText}>{item.name}</Text>
                    <Text style={styles.companyOverViewTypesText}>{item.address}</Text>
                    <Text style={styles.companyOverViewTypesText}>{item.email}</Text>
                    <Text style={styles.companyOverViewTypesText}>{item.phone}</Text>
                </View>
            </View>
        )
    } else return null;
}

export default CompanyItem;