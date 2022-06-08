class QueryCategory {
    constructor({categoryRepository}){
        this.categoryRepository = categoryRepository;
    }

    async getCategoriesWithProducts(query) {
        return await this.categoryRepository.getCategoriesWithProducts(query);
    }
}

export default QueryCategory;