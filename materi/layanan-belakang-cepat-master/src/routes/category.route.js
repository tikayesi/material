import {Router} from 'express';


const CategoryRouter = Router()
    .get('/', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send([{categoryId: '1111', categoryName: 'ATK'}, {categoryId: '2222', categoryName: 'Furnitur'}]);
    });

export default CategoryRouter;