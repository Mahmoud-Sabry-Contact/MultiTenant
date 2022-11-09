import { Alert } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import { DB, user } from '../../../Utils/Database';
import { checkAuth, setUser } from '../../Slices/App/auth';

function* checkUserAuth({ payload }) {
  const { email, password } = payload;
  try {
    let userId = null;
    if (email.includes('.com')) {
      userId = email.split('.com')[0];
      const result = yield DB.ref(user(userId)).once('value');
      const userData = result.val();
      if (userData) {
        if (userData.password === password) {
          yield put(setUser(userData));
        } else {
          yield put(setUser(null));
          Alert.alert('Error', 'Password is incorrect', [{ text: 'OK' }]);
        }
      } else {
        yield put(setUser(null));
        Alert.alert('Error', 'User does not exist', [{ text: 'OK' }]);
      }
    } else {
      yield put(setUser(null));
      Alert.alert('Invalid Email', 'Please enter a valid email', [{ text: 'OK' }]);
    }

  } catch (error) {
    console.log('checkUserAuth Saga Error: ', error);
    Alert.alert('error', error, [{ text: 'OK' }]);
    yield put(setUser(null));
  }
}

export function* watchCheckUserAuth() {
  yield takeLatest(checkAuth.type, checkUserAuth);
}