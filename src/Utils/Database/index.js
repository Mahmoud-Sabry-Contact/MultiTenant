import { firebase } from '@react-native-firebase/database';


export const user = (id) => `/multiTenantDB/Users/${id}`;
export const getTenantCompanies = (id) => `/Tenant${id}/companyProfile`;
export const tenantCompany = (id, companyId) => `/Tenant${id}/companyProfile/${companyId}`;


export const DB = firebase.app().database('https://hotelbooking-b0dff-default-rtdb.firebaseio.com/');
