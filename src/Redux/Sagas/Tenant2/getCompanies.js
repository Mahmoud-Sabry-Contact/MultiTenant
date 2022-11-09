import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { getT2Companies, setT2Companies } from '../../Slices/Tenant2';

function* getTenant2CompaniesData({ payload }) {
    try {
        const result = yield DB.ref(getTenantCompanies(2)).once('value');
        const companiesData = result.val();
        if (companiesData) {
            const companiesArray = Object.keys(companiesData).map((key) => { return { ...companiesData[key], id: key } });
            yield put(setT2Companies(companiesArray));
        } else {
            yield put(setT2Companies([]));
            Alert.alert('Error', 'No companies found', [{ text: 'OK' }]);
        }
    } catch (error) {
        console.log('getTenant2CompaniesData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT2Companies([]));
    }
}

export function* watchGetTenant2CompaniesAction() {
    yield takeLatest(getT2Companies.type, getTenant2CompaniesData);
}