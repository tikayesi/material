import {Router} from 'express';
import {
    createACategory, getCategoryById, getListCategory,
    getListCategoryWithProduct
} from "../controller/category.controller";
import CategoryService from "../services/category.service";

const CategoryRouter = Router()
    .get('/', (req, res) => getListCategory(req, res, new CategoryService()))
    .get('/:id', getCategoryById)
    .get('/with-product', getListCategoryWithProduct)
    .post('/', createACategory);

export default CategoryRouter;