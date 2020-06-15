export const authUser = (user) => {
    return {
        type: 'AUTH_USER',
        payload: user
    };
};