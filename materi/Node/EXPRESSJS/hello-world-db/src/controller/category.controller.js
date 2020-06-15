import {logErrorEvent, logInfoEvent} from "../events/logging.event";
import CategoryRepository from "../repository/category.repository";

const categoryRepository = new CategoryRepository();
export const getListCategory = async (req, res, categoryService) => {
    try {
        const rows = await categoryService.setRepository(categoryRepository).getAllCategory();
        return res.status(200).json(rows);
        // logErrorEvent.emit('CONTROLLER', 'err',res);
    } catch (err) {
        logErrorEvent.emit('CONTROLLER', {info: err, res: res});
    }
};

export const getCategoryById = async (req, res, categoryService) => {
    try {
        const id = req.query.id;
        const rows = await categoryService.setRepository(categoryRepository).getCategoryById(id);
        if (rows.length > 0) {
            return res.status(200).json(rows);
        } else {
            logInfoEvent.emit('NO_DATA_FOUND', {info: 'Find Category', res: res})
        }

        // logErrorEvent.emit('CONTROLLER', 'err',res);
    } catch (err) {
        logErrorEvent.emit('CONTROLLER', err, res);
    }
};

export const getListCategoryWithProduct = async (req, res, categoryService) => {
    try {
        const rows = await categoryService.setRepository(categoryRepository).getAllCategoryProduct();
        return res.status(200).json(rows);
    } catch (err) {
        logErrorEvent.emit('CONTROLLER', {info: err, res: res});
    }
};

export const createACategory = async (req, res, categoryService) => {
    try {
        const category = {...req.body};
        const result = await categoryService.setRepository(categoryRepository).createCategory(category);
        return res.status(200).json(result);
    } catch (err) {
        logErrorEvent.emit('CONTROLLER', {info: err, res: res});
    }
};
