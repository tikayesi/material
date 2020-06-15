export const authUserName = (userName) => {
    return fetch('http://localhost:3131/auth/userName', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'userName': userName})
    })
};