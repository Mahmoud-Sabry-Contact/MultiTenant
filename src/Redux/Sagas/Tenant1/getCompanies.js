import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { getT1Companies, setT1Companies } from '../../Slices/Tenant1';

function* getTenant1CompaniesData({ payload }) {
    try {
        const result = yield DB.ref(getTenantCompanies(1)).once('value');
        const companiesData = result.val();
        if (companiesData) {
            const companiesArray = Object.keys(companiesData).map((key) => { return { ...companiesData[key], id: key } });
            yield put(setT1Companies(companiesArray));
        } else {
            yield put(setT1Companies([]));
            Alert.alert('Error', 'No companies found', [{ text: 'OK' }]);
        }
    } catch (error) {
        console.log('getTenant1CompaniesData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT1Companies([]));
    }
}

export function* watchGetTenant1CompaniesAction() {
    yield takeLatest(getT1Companies.type, getTenant1CompaniesData);
}