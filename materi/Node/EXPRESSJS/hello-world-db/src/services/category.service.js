export default class CategoryService {
    setRepository(repo) {
        this.repo = repo;
        return this;
    }

    getAllCategory() {
        return this.repo.findAllCategory();

    }

    getAllCategoryProduct() {
        return this.repo.findAllCategoryProduct();

    }

    getCategoryById(id) {
        return this.repo.findOne(id);
    }

    createCategory(category) {
        return this.repo.createCategory(category);
    }
}