import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { addT2Company, getT2Companies, setT2Companies } from '../../Slices/Tenant2';

function* addTenant2CompanyData({ payload }) {
    const { name, address, phone, email, logo } = payload;
    try {
        const newReference = yield DB.ref(getTenantCompanies(2)).push();
        const newCompany = newReference.set({ name, address, phone, email, logo });
        yield put(getT2Companies());
    } catch (error) {
        console.log('addTenant2CompanyData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT2Companies([]));
    }
}

export function* watchAddTenant2CompanyAction() {
    yield takeLatest(addT2Company.type, addTenant2CompanyData);
}