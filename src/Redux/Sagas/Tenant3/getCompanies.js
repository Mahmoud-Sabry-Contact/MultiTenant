import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { getT3Companies, setT3Companies } from '../../Slices/Tenant3';

function* getTenant3CompaniesData({ payload }) {
    try {
        const result = yield DB.ref(getTenantCompanies(3)).once('value');
        const companiesData = result.val();
        if (companiesData) {
            const companiesArray = Object.keys(companiesData).map((key) => { return { ...companiesData[key], id: key } });
            yield put(setT3Companies(companiesArray));
        } else {
            yield put(setT3Companies([]));
            Alert.alert('Error', 'No companies found', [{ text: 'OK' }]);
        }
    } catch (error) {
        console.log('getTenant3CompaniesData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT3Companies([]));
    }
}

export function* watchGetTenant3CompaniesAction() {
    yield takeLatest(getT3Companies.type, getTenant3CompaniesData);
}