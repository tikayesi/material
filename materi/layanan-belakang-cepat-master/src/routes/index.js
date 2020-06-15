import express from 'express';

import UserRouter from './user.route';
import ProductRouter from './product.route';
import CategoryRouter from "./category.route";
import OutletRouter from "./outlet.route";

export default express.Router()
    .use('/users', UserRouter)
    .use('/products', ProductRouter)
    .use('/categories', CategoryRouter)
    .use('/outlets', OutletRouter)
    .use((req, res, next) => {
        res.status(404).json({message: 'Not Found.'});
    });
