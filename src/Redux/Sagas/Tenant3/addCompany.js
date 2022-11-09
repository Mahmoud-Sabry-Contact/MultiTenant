import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { addT3Company, getT3Companies, setT3Companies } from '../../Slices/Tenant3';

function* addTenant3CompanyData({ payload }) {
    const { name, address, phone, email, logo } = payload;
    try {
        const newReference = yield DB.ref(getTenantCompanies(3)).push();
        const newCompany = newReference.set({ name, address, phone, email, logo });
        yield put(getT3Companies());
    } catch (error) {
        console.log('addTenant3CompanyData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT3Companies([]));
    }
}

export function* watchAddTenant3CompanyAction() {
    yield takeLatest(addT3Company.type, addTenant3CompanyData);
}