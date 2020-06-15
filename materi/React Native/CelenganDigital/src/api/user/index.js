import API from '../api';

export function doAuth(name, password) {
    return API.post('/auth',
        {userName: name, userPassword: password});
}