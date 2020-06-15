import express from 'express';
import ProductRouter from "./product.router";
import CategoryRouter from "./category.router";
import UserRouter from "./user.router";
import AuthRouter from "./auth.router";
import {logErrorEvent, logInfoEvent} from '../events/logging.event';

export default express.Router()
    .use('/auth', AuthRouter)
    .use(function (req, res, next) {
        if (req.session.name) {
            next()
        } else {
            logErrorEvent.emit('SESSION', {res: res})
        }
    })
    .use(function (req, res, next) {
        logInfoEvent.emit('ACCESS', {info: req.originalUrl});
        next();
    })
    .use('/product', ProductRouter)
    .use('/category', CategoryRouter)
    .use('/user', UserRouter)
    .use((req, res, next) => {
        logErrorEvent.emit('ROUTE', {info: req.originalUrl, res: res});
    });
