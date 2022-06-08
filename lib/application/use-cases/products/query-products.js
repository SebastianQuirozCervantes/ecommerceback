class QueryProduct {
    constructor({productRepository}){
        this.productRepository = productRepository;
    }

    async getProducts(query) {
        return await this.productRepository.getProducts(query);
    }
}

export default QueryProduct;