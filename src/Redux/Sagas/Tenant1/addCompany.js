import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, getTenantCompanies } from '../../../Utils/Database';
import { addT1Company, getT1Companies, setT1Companies } from '../../Slices/Tenant1';

function* addTenant1CompanyData({ payload }) {
    const { name, address, phone, email, logo } = payload;
    try {
        const newReference = yield DB.ref(getTenantCompanies(1)).push();
        const newCompany = newReference.set({ name, address, phone, email, logo });
        yield put(getT1Companies());
    } catch (error) {
        console.log('addTenant1CompanyData Saga Error: ', error);
        Alert.alert('error', error, [{ text: 'OK' }]);
        yield put(setT1Companies([]));
    }
}

export function* watchAddTenant1CompanyAction() {
    yield takeLatest(addT1Company.type, addTenant1CompanyData);
}