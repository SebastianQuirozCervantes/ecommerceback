import QueryProduct from '../../application/use-cases/products/query-products';
import ProductRepository from '../../infrastructure/orm/repositories/products'

const getProducts = async function (httpRequest) {
  const query = httpRequest.query;
  const productRepository = new ProductRepository();
  const useCase = new QueryProduct({productRepository});

  const products = await useCase.getProducts(query);
  return {
    statusCode: 200,
    body: products,
  };
};
module.exports = {
  getProducts,
};
  