import API from '../api';

export function doGetBankAccount() {
    return API.get('/account');
}