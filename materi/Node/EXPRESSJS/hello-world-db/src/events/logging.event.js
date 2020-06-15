import events from 'events';
import {log} from "../logger";

export const logErrorEvent = new events.EventEmitter();

export const logging = {
    recordLog(logInfo) {
        switch (logInfo.logType) {
            case 'ERROR':
                log.error(logInfo.logTitle, logInfo.logMessage);
                break;
            case 'INFO':
                log.info(logInfo.logTitle, logInfo.logMessage);
                break;
            default:
                log.debug(logInfo.logTitle, logInfo.logMessage);
        }
    }
};

logErrorEvent.on('APP', function (ev) {
    logging.recordLog({
        logType: 'ERROR', logTitle: 'APP-FAILED', logMessage: ev.info
    });
});

logErrorEvent.on('DB', function (ev) {
    logging.recordLog({
        logType: 'ERROR', logTitle: 'DB-FAILED', logMessage: ev.info
    });
});

logErrorEvent.on('ROUTE', function (ev) {
    logging.recordLog({
        logType: 'ERROR', logTitle: 'ROUTE-FAILED', logMessage: ev.info});
    ev.res.status(404);
    ev.res.json({message: 'Not Found.'});
});

logErrorEvent.on('SESSION', function (ev) {
    ev.res.sendStatus(401);
});

logErrorEvent.on('CONTROLLER', function (ev) {
    logging.recordLog({
        logType: 'ERROR', logTitle: 'CONTROLLER-FAILED', logMessage: ev.info});
    ev.res.status(200);
    ev.res.json({message: 'We are sorry, your request can not be processed'})
});

export const logInfoEvent = new events.EventEmitter();

logInfoEvent.on('ACCESS', function (ev) {
    logging.recordLog({logType: 'INFO', logTitle: 'USER-ROUTE', logMessage: ev.info});
});
logInfoEvent.on('NO_DATA_FOUND', function (ev) {
    ev.res.status(200)
    ev.res.json({status: '400', message: `No Data Found on ${ev.info}`})
});
