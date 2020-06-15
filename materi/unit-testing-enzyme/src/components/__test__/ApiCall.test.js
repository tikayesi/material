import {authUserName} from "../../api/user";

beforeEach(() => {
    fetch.resetMocks();
});

describe('API', () => {
    it('should call auth user', () => {
        fetch.mockResponseOnce(JSON.stringify({name: 'edo'}));
        return authUserName('edo').then(res => {
            expect(res.status).toEqual(200);
            expect(res.body).toEqual(JSON.stringify({name: 'edo'}));
        }).finally(() => {
            expect(fetch.mock.calls.length).toEqual(1);
        })

    })
});


