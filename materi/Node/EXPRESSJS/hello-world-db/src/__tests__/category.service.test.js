import CategoryRepository from "../repository/category.repository";
import CategoryService from "../services/category.service";

let categoryRepository;
let categoryService;
beforeAll(() => {
    categoryRepository = new CategoryRepository();
    categoryService = new CategoryService();
});

describe('Category Service Test', () => {
    it('should call get all category', async () => {
        categoryRepository.findAllCategory = jest.fn(() => {
            return [{id: 1, categoryName: 'sample category'}]
        });
        categoryService.setRepository(categoryRepository);
        expect(categoryService.getAllCategory()).toEqual([{id: 1, categoryName: 'sample category'}])
    });
    it('should create category', async () => {
        const category = {id: '2', categoryId: 'Anything'};
        categoryRepository.createCategory = jest.fn((category) => {
            return category;
        });
        categoryService.setRepository(categoryRepository);
        expect(categoryService.createCategory(category)).toEqual(category)
    });
});