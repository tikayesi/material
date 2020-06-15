export const userActiveReducer = (userActive = {}, action) => {
    if (action.type === 'AUTH_USER') {
        return action.payload;
    }
    return userActive;
};