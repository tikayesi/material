import {userActiveReducer} from "../../reducers";
import {appReducer} from "../../reducers/appReducers";

describe('App Combine Reducer', () => {
    it('Should combine reducer', () => {
        expect(
            appReducer({}, {type: 'AUTH_USER', payload: 'edo'}).userActive
        ).toEqual('edo');
    })
});
describe('Auth User reducer', () => {
    it('should handle AUTH_USER', () => {
        expect(userActiveReducer({}, {
            type: 'AUTH_USER',
            payload: 'edo'
        })).toEqual(
            'edo'
        )
    })
});
