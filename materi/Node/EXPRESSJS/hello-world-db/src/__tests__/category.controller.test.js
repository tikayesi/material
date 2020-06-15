import {
    categoryEvent, createACategory, getListCategory,
    getListCategoryWithProduct
} from "../controller/category.controller";
import CategoryService from "../services/category.service";

let mockResponse;
let mockRequest;
beforeAll(async () => {
    mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };
    mockRequest = () => {
        const res = {};
        return res;
    };
});
describe('Category Controller Test', () => {
    it('should call find all category', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const categoryService = new CategoryService();
        categoryService.getAllCategory = jest.fn(() => [{id: '1'}]);
        await getListCategory(req, res, categoryService);
        expect(res.json).toHaveBeenCalledWith([{id: '1'}]);
        expect(res.status).toHaveBeenCalledWith(200)
    });
    it('should call find all category with product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const categoryService = new CategoryService();
        categoryService.getAllCategoryProduct = jest.fn(() => [{id: '1'}]);
        await getListCategoryWithProduct(req, res, categoryService);
        expect(res.json).toHaveBeenCalledWith([{id: '1'}]);
        expect(res.status).toHaveBeenCalledWith(200)
    });
    it('should call create product', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const categoryService = new CategoryService();
        categoryService.createCategory = jest.fn(() => [{id: '1'}]);
        await createACategory(req, res,categoryService);
        expect(res.json).toHaveBeenCalledWith([{id: '1'}]);
        expect(res.status).toHaveBeenCalledWith(200)
    });
});