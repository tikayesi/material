import {logErrorEvent, logging} from '../events/logging.event';

let spy;
beforeEach(() => {
    spy = jest.spyOn(logging, 'recordLog');
});
afterEach(() => {
    jest.clearAllMocks();
});

describe('Logging Event Test', () => {
    it('should log error in APP', () => {
        const info = {info: 'test'};
        const logInfoExpected = {logType: 'ERROR', logTitle: 'APP-FAILED', logMessage: info.info};
        logErrorEvent.emit('APP', info);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(logInfoExpected);
    });

    it('should log error in CONTROLLER', () => {
        const info = {info: 'test', res: {json: jest.fn(), status: jest.fn()}};
        logErrorEvent.emit('CONTROLLER', info);
        expect(info.res.json).toHaveBeenCalledTimes(1);
        expect(info.res.status).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should log on Session timeout and send 401', () => {
        const info = {res: {sendStatus: jest.fn()}};
        logErrorEvent.emit('SESSION', info);
        expect(info.res.sendStatus).toHaveBeenCalledTimes(1);
        expect(info.res.sendStatus).toHaveBeenCalledWith(401);
    });
});