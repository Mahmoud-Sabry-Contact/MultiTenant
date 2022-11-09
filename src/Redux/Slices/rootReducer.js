import { combineReducers } from '@reduxjs/toolkit';

import auth from './App/auth';
import tenant1 from './Tenant1';
import tenant2 from './Tenant2';
import tenant3 from './Tenant3';

const rootReducer = combineReducers({
  auth,
  tenant1,
  tenant2,
  tenant3,
});

export default rootReducer;