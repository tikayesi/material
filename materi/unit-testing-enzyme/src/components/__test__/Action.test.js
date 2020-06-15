import {authUser} from "../../action";

describe('actions', () => {
    it('should create an action to add user name', () => {
        const payload = 'edo';
        const expectedAction = {
            type: 'AUTH_USER',
            payload:payload
        };
        expect(authUser(payload)).toEqual(expectedAction)
    })
});