import {server} from '../../src/server';
import {mockProcessExit} from "jest-mock-process";

describe('Server Test', () => {
    it('should exit when error event', async () => {
        var mockExit = mockProcessExit();
        server.emit('error', 'test error');
        expect(mockExit).toHaveBeenCalledWith(1);
    })
});